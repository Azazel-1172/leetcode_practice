#!/usr/bin/env python3
"""
lcdaily —— LeetCode 每日挑戰抓取工具

功能：
  fetch   抓取每日挑戰（中文題目 + 提示），開分支、建立題目資料夾、更新總覽
  sync    依照 daily/*/meta.json 重建根目錄總覽 README
  tag     為某一題加上 / 移除自訂標籤（二元樹、遞迴、雙指標 ...）
  done    把某一題標記為已完成
  list    列出所有題目，可用 --tag 篩選

題目中文來源為 LeetCode 中文站（leetcode.cn）的官方翻譯，
專業術語（如 BST、DP）維持原文，不做機器翻譯。
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import re
import os
import ssl
import subprocess
import sys
import textwrap
from html.parser import HTMLParser
from pathlib import Path
from urllib import error, request

ROOT = Path(__file__).resolve().parent
DAILY_DIR = ROOT / "daily"
INDEX_FILE = ROOT / "README.md"

COM_GRAPHQL = "https://leetcode.com/graphql"
CN_GRAPHQL = "https://leetcode.cn/graphql"
CN_COOKIE_FILE = ROOT / ".lc_cookie"

# 翻譯用模型與詞彙表
TRANSLATE_MODEL = "claude-opus-5"
GLOSSARY = """陣列 array、字串 string、雜湊表 hash table、堆疊 stack、佇列 queue、
鏈結串列 linked list、二元樹 binary tree、二元搜尋樹 BST、堆積 heap、圖 graph、
遞迴 recursion、回溯 backtracking、動態規劃 DP、貪婪 greedy、雙指標 two pointers、
滑動視窗 sliding window、二分搜尋 binary search、拓撲排序 topological sort、
前綴和 prefix sum、位元運算 bit manipulation、時間複雜度 time complexity"""

BEGIN_MARK = "<!-- LCDAILY:BEGIN -->"
END_MARK = "<!-- LCDAILY:END -->"

DIFFICULTY_ZH = {"Easy": "簡單", "Medium": "中等", "Hard": "困難"}

EXT_BY_LANG = {
    "python3": "py", "python": "py", "cpp": "cpp", "java": "java",
    "c": "c", "csharp": "cs", "javascript": "js", "typescript": "ts",
    "golang": "go", "rust": "rs", "kotlin": "kt", "swift": "swift",
    "ruby": "rb", "scala": "scala", "php": "php", "dart": "dart",
}
COMMENT_BY_EXT = {
    "py": "#", "rb": "#", "php": "#",
}


# --------------------------------------------------------------------------
# GraphQL
# --------------------------------------------------------------------------

def _ssl_context() -> ssl.SSLContext:
    """
    建立 SSL context。

    python.org 版的 macOS Python 預設沒有安裝根憑證（會噴
    CERTIFICATE_VERIFY_FAILED），這裡依序嘗試 certifi、macOS 系統憑證，
    都沒有才退回 Python 預設，讓工具不必額外設定就能用。
    """
    try:
        import certifi
        return ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        pass
    for cafile in ("/etc/ssl/cert.pem", "/private/etc/ssl/cert.pem"):
        if os.path.exists(cafile):
            return ssl.create_default_context(cafile=cafile)
    return ssl.create_default_context()


_SSL = _ssl_context()


def read_cn_cookie() -> str | None:
    """
    讀取 leetcode.cn 的 cookie。

    中文站有 Cloudflare 驗證，程式直接連會被擋 403。把瀏覽器裡
    leetcode.cn 的 cookie（至少要有 cf_clearance）整串貼進
    .lc_cookie 這個檔案，就能抓到官方中文翻譯。
    """
    if not CN_COOKIE_FILE.exists():
        return None
    raw = CN_COOKIE_FILE.read_text("utf-8").strip()
    return raw or None


def graphql(url: str, query: str, variables: dict | None = None,
            timeout: int = 20, cookie: str | None = None) -> dict:
    """送出一次 GraphQL 查詢，回傳 data 區塊。"""
    payload = json.dumps({"query": query, "variables": variables or {}}).encode()
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                       "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"),
        "Referer": url.rsplit("/graphql", 1)[0] + "/",
        "Origin": url.rsplit("/graphql", 1)[0],
    }
    if cookie:
        headers["Cookie"] = cookie
    req = request.Request(url, data=payload, headers=headers, method="POST")
    try:
        with request.urlopen(req, timeout=timeout, context=_SSL) as resp:
            body = json.loads(resp.read().decode("utf-8"))
    except error.HTTPError as e:
        raise RuntimeError(f"HTTP {e.code} 來自 {url}：{e.read()[:200]!r}") from None
    except error.URLError as e:
        raise RuntimeError(f"無法連線 {url}：{e.reason}") from None
    if body.get("errors"):
        raise RuntimeError(f"GraphQL 錯誤：{body['errors']}")
    return body.get("data") or {}


Q_DAILY_COM = """
query questionOfToday {
  activeDailyCodingChallengeQuestion {
    date
    link
    question { titleSlug title difficulty }
  }
}
"""

Q_DAILY_CN = """
query questionOfToday {
  todayRecord {
    date
    question { titleSlug title titleCn }
  }
}
"""

Q_DETAIL_COM = """
query questionData($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionFrontendId
    title
    titleSlug
    difficulty
    content
    hints
    topicTags { name slug }
    codeSnippets { langSlug code }
    exampleTestcases
  }
}
"""

Q_DETAIL_CN = """
query questionData($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionFrontendId
    title
    titleSlug
    difficulty
    translatedTitle
    translatedContent
    hints
    topicTags { name slug translatedName }
  }
}
"""


# --------------------------------------------------------------------------
# Claude 翻譯（中文站沒有官方翻譯時的備援）
# --------------------------------------------------------------------------

SYSTEM_TRANSLATE = f"""你是 LeetCode 題目的中文譯者，讀者是台灣的軟體工程師。

規則：
1. 輸入是 HTML 片段。完整保留所有 HTML 標籤、屬性與巢狀結構，只翻譯標籤之間的自然語言文字。
2. 以下內容一律不翻譯、原樣保留：程式碼、變數與函式名稱、範例的 Input/Output/Explanation 裡的資料本身、
   數學式、運算子、單位。（"Input"、"Output"、"Explanation"、"Constraints"、"Example" 這些標題字可翻。）
3. 專業術語用台灣業界慣用譯名，必要時保留英文。對照表：
{GLOSSARY}
4. 輸出通順的繁體中文，用台灣慣用的技術用語，不要逐字硬翻，也不要用中國大陸用語
   （例如要寫「陣列」不是「数组」、「迴圈」不是「循环」、「最佳化」不是「优化」）。
5. 只輸出翻譯後的 HTML，不要加任何說明、前言或 markdown 圍欄。"""

SYSTEM_S2T = """把輸入的簡體中文技術文件轉成台灣慣用的繁體中文。
完整保留 HTML 標籤、程式碼與變數名稱。用語要在地化（数组→陣列、循环→迴圈、
优化→最佳化、指针→指標、字符串→字串、队列→佇列、哈希→雜湊），
但不要改寫句子結構。只輸出結果，不要任何說明。"""


class TranslatorUnavailable(Exception):
    pass


def _claude_client():
    try:
        import anthropic
    except ImportError:
        raise TranslatorUnavailable(
            "需要 Anthropic SDK 才能用 Claude 翻譯：pip install anthropic") from None
    try:
        return anthropic.Anthropic()
    except Exception as e:  # 沒有憑證
        raise TranslatorUnavailable(f"無法建立 Anthropic client：{e}") from None


def claude_translate(text: str, system: str) -> str:
    """把一段 HTML 丟給 Claude 翻譯，回傳翻譯後的 HTML。"""
    if not text.strip():
        return text
    client = _claude_client()
    resp = client.messages.create(
        model=TRANSLATE_MODEL,
        max_tokens=16000,
        system=system,
        output_config={"effort": "low"},
        messages=[{"role": "user", "content": text}],
    )
    out = "".join(b.text for b in resp.content if b.type == "text").strip()
    # 模型偶爾會包 markdown 圍欄，剝掉
    out = re.sub(r"^```(?:html)?\n|\n```$", "", out).strip()
    return out or text


def fetch_daily_slug(site: str) -> tuple[str, str]:
    """回傳 (日期, titleSlug)。"""
    if site == "cn":
        data = graphql(CN_GRAPHQL, Q_DAILY_CN)
        rec = (data.get("todayRecord") or [None])[0]
        if not rec:
            raise RuntimeError("中文站沒有回傳今日挑戰")
        return rec["date"], rec["question"]["titleSlug"]
    data = graphql(COM_GRAPHQL, Q_DAILY_COM)
    node = data.get("activeDailyCodingChallengeQuestion")
    if not node:
        raise RuntimeError("英文站沒有回傳今日挑戰")
    return node["date"], node["question"]["titleSlug"]


def fetch_question(slug: str, translate: str = "auto", zh: str = "tw") -> dict:
    """
    抓英文原題，再依 translate 模式取得中文。

    translate:
      auto —— 先試 leetcode.cn 官方翻譯，沒有才用 Claude 翻譯
      cn   —— 只用官方翻譯
      llm  —— 一律用 Claude 翻譯（繁體中文）
      off  —— 不翻譯，保留英文
    zh: tw（繁體，預設）/ cn（簡體，即官方翻譯原樣）
    """
    en = graphql(COM_GRAPHQL, Q_DETAIL_COM, {"titleSlug": slug}).get("question")
    if not en:
        raise RuntimeError(f"找不到題目：{slug}")

    hints_en = en.get("hints") or []
    tags_en = [t["name"] for t in (en.get("topicTags") or [])]

    zh_q: dict = {}
    source = "none"

    if translate in ("auto", "cn"):
        try:
            zh_q = graphql(CN_GRAPHQL, Q_DETAIL_CN, {"titleSlug": slug},
                           cookie=read_cn_cookie()) or {}
            zh_q = zh_q.get("question") or {}
            if zh_q.get("translatedContent"):
                source = "leetcode.cn"
        except RuntimeError as e:
            msg = str(e)
            if "Just a moment" in msg or "HTTP 403" in msg:
                print("  ! leetcode.cn 被 Cloudflare 擋住（把瀏覽器 cookie 存到 "
                      f"{CN_COOKIE_FILE.name} 可解）", file=sys.stderr)
            else:
                print(f"  ! 中文站抓取失敗：{e}", file=sys.stderr)
            zh_q = {}

    title_zh = zh_q.get("translatedTitle") or ""
    content_zh = zh_q.get("translatedContent") or ""
    hints_zh = zh_q.get("hints") or []
    if hints_zh == hints_en:
        hints_zh = []

    tags = []
    cn_tags = zh_q.get("topicTags") or []
    for i, name in enumerate(tags_en):
        zh_name = cn_tags[i].get("translatedName") if i < len(cn_tags) else None
        tags.append(zh_name or name)

    # 官方翻譯是簡體；使用者要繁體就再過一次 Claude
    if source == "leetcode.cn" and zh == "tw":
        try:
            print("  · 官方翻譯為簡體，用 Claude 轉成台灣繁體用語 ...")
            content_zh = claude_translate(content_zh, SYSTEM_S2T)
            title_zh = claude_translate(title_zh, SYSTEM_S2T) if title_zh else title_zh
            hints_zh = [claude_translate(h, SYSTEM_S2T) for h in hints_zh]
            tags = [claude_translate(t, SYSTEM_S2T) for t in tags]
            source = "leetcode.cn + 簡轉繁"
        except TranslatorUnavailable as e:
            print(f"  ! 保留簡體（{e}）", file=sys.stderr)

    # 沒有官方翻譯 → Claude 直接翻
    if translate == "llm" or (translate == "auto" and source == "none"):
        try:
            print("  · 用 Claude 翻譯題目 ...")
            content_zh = claude_translate(en.get("content") or "", SYSTEM_TRANSLATE)
            title_zh = claude_translate(en["title"], SYSTEM_TRANSLATE)
            if hints_en:
                print(f"  · 翻譯 {len(hints_en)} 則提示 ...")
                hints_zh = [claude_translate(h, SYSTEM_TRANSLATE) for h in hints_en]
            source = f"Claude ({TRANSLATE_MODEL})"
        except TranslatorUnavailable as e:
            print(f"  ! 無法翻譯，保留英文：{e}", file=sys.stderr)

    return {
        "id": en["questionFrontendId"],
        "slug": en["titleSlug"],
        "title": en["title"],
        "titleZh": title_zh or en["title"],
        "difficulty": en["difficulty"],
        "contentEn": en.get("content") or "",
        "contentZh": content_zh,
        "translated": bool(content_zh),
        "translateSource": source,
        "hints": hints_zh or hints_en,
        "hintsTranslated": bool(hints_zh),
        "topicTags": tags,
        "topicTagsEn": tags_en,
        "codeSnippets": {c["langSlug"]: c["code"] for c in (en.get("codeSnippets") or [])},
        "exampleTestcases": en.get("exampleTestcases") or "",
    }


# --------------------------------------------------------------------------
# HTML -> Markdown
# --------------------------------------------------------------------------

class _Html2Md(HTMLParser):
    """把 LeetCode 題目 HTML 轉成可讀的 Markdown。"""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.out: list[str] = []
        self.list_stack: list[dict] = []
        self.in_pre = 0
        self.in_code = 0
        self.skip = 0

    # -- helpers --
    def w(self, s: str) -> None:
        self.out.append(s)

    def nl(self, n: int = 1) -> None:
        text = "".join(self.out)
        existing = len(text) - len(text.rstrip("\n"))
        if text.strip() == "":
            return
        if existing < n:
            self.w("\n" * (n - existing))

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ("script", "style"):
            self.skip += 1
        elif tag == "p":
            self.nl(2)
        elif tag == "br":
            self.w("  \n" if not self.in_pre else "\n")
        elif tag in ("strong", "b"):
            self.w("**")
        elif tag in ("em", "i"):
            self.w("*")
        elif tag == "code":
            if not self.in_pre:
                self.w("`")
            self.in_code += 1
        elif tag == "pre":
            self.nl(2)
            self.w("```\n")
            self.in_pre += 1
        elif tag in ("ul", "ol"):
            self.nl(2)
            self.list_stack.append({"type": tag, "n": 0})
        elif tag == "li":
            self.nl(1)
            if self.list_stack:
                lvl = self.list_stack[-1]
                indent = "  " * (len(self.list_stack) - 1)
                if lvl["type"] == "ol":
                    lvl["n"] += 1
                    self.w(f"{indent}{lvl['n']}. ")
                else:
                    self.w(f"{indent}- ")
        elif tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.nl(2)
            self.w("#" * int(tag[1]) + " ")
        elif tag == "img":
            self.w(f"\n\n![{a.get('alt', '示意圖')}]({a.get('src', '')})\n\n")
        elif tag == "a":
            self.w("[")
        elif tag == "sup":
            self.w("^")
        elif tag == "sub":
            self.w("_")
        elif tag == "blockquote":
            self.nl(2)
            self.w("> ")

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self.skip = max(0, self.skip - 1)
        elif tag == "p":
            self.nl(2)
        elif tag in ("strong", "b"):
            self.w("**")
        elif tag in ("em", "i"):
            self.w("*")
        elif tag == "code":
            self.in_code = max(0, self.in_code - 1)
            if not self.in_pre:
                self.w("`")
        elif tag == "pre":
            self.in_pre = max(0, self.in_pre - 1)
            self.nl(1)
            self.w("```")
            self.nl(2)
        elif tag in ("ul", "ol"):
            if self.list_stack:
                self.list_stack.pop()
            self.nl(2)
        elif tag == "li":
            self.nl(1)
        elif tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.nl(2)
        elif tag == "a":
            self.w("]")

    def handle_data(self, data):
        if self.skip:
            return
        if self.in_pre:
            self.w(data)
            return
        data = re.sub(r"[ \t\r\n]+", " ", data)
        if not data:
            return
        text = "".join(self.out)
        if data == " " and (not text or text.endswith((" ", "\n"))):
            return
        self.w(data)


def html_to_md(html_text: str) -> str:
    if not html_text:
        return ""
    p = _Html2Md()
    p.feed(html_text)
    p.close()
    md = "".join(p.out)
    md = re.sub(r"[ \t]+\n", "\n", md)
    md = re.sub(r"\n{3,}", "\n\n", md)
    # LeetCode 常見的排版殘留
    md = md.replace(" ", " ").replace("&nbsp;", " ")
    return md.strip() + "\n"


# --------------------------------------------------------------------------
# Git
# --------------------------------------------------------------------------

def git(*args: str, check: bool = True, capture: bool = True) -> str:
    r = subprocess.run(["git", *args], cwd=ROOT, text=True,
                       capture_output=capture)
    if check and r.returncode != 0:
        raise RuntimeError(f"git {' '.join(args)} 失敗：{(r.stderr or '').strip()}")
    return (r.stdout or "").strip()


def git_toplevel() -> Path | None:
    r = subprocess.run(["git", "rev-parse", "--show-toplevel"],
                       cwd=ROOT, text=True, capture_output=True)
    return Path(r.stdout.strip()) if r.returncode == 0 else None


def check_repo_root() -> bool:
    """
    確認這個資料夾自己就是 git repo 的根。

    如果 repo 根在更上層，開分支會連帶切換上層其他專案的檔案，
    這通常不是想要的結果，所以擋下來請使用者處理。
    """
    top = git_toplevel()
    if top is None:
        print(f"! {ROOT} 不在 git repo 裡。先執行：git init", file=sys.stderr)
        return False
    if top.resolve() != ROOT.resolve():
        print(f"! git repo 的根目錄是 {top}，不是 {ROOT}。", file=sys.stderr)
        print("  每日開分支會切換整個 repo，可能影響其他專案。", file=sys.stderr)
        print("  建議在這個資料夾另外 git init，或加 --no-branch 只建立資料夾。",
              file=sys.stderr)
        return False
    return True


def git_has_commits() -> bool:
    return subprocess.run(["git", "rev-parse", "--verify", "HEAD"],
                          cwd=ROOT, capture_output=True).returncode == 0


def git_branch_exists(name: str) -> bool:
    return subprocess.run(["git", "rev-parse", "--verify", f"refs/heads/{name}"],
                          cwd=ROOT, capture_output=True).returncode == 0


def ensure_branch(name: str) -> None:
    """建立並切換到分支；已存在就直接切過去。"""
    current = git("rev-parse", "--abbrev-ref", "HEAD", check=False)
    if current == name:
        print(f"  · 已經在分支 {name}")
        return
    if git_branch_exists(name):
        git("checkout", name)
        print(f"  · 切換到既有分支 {name}")
    else:
        git("checkout", "-b", name)
        print(f"  · 建立並切換到分支 {name}")


# --------------------------------------------------------------------------
# 產生檔案
# --------------------------------------------------------------------------

def folder_name(date: str, slug: str) -> str:
    return f"{date}-{slug}"


def render_problem_md(q: dict, date: str, meta: dict) -> str:
    body = html_to_md(q["contentZh"] or q["contentEn"])
    lines = [
        f"# {q['id']}. {q['titleZh']}",
        "",
        f"> 英文原題：{q['title']}",
        f"> 難度：{DIFFICULTY_ZH.get(q['difficulty'], q['difficulty'])}"
        f"　|　日期：{date}"
        f"　|　[題目連結](https://leetcode.com/problems/{q['slug']}/)"
        f"　·　[中文站](https://leetcode.cn/problems/{q['slug']}/)",
        "",
    ]
    if q["translated"]:
        lines += [f"> 翻譯來源：{q['translateSource']}", ""]
    else:
        lines += ["> ⚠️ 沒有取得中文翻譯，以下為英文原文。", ""]

    lines += ["## 題目", "", body.rstrip(), ""]

    if q["hints"]:
        note = "" if q["hintsTranslated"] else "（中文站未翻譯，以下為英文原文）"
        lines += [f"## 提示 Hints {note}".rstrip(), ""]
        for i, h in enumerate(q["hints"], 1):
            hint_md = html_to_md(h).strip()
            hint_md = textwrap.indent(hint_md, "> ").replace("> \n", ">\n")
            lines += [
                "<details>",
                f"<summary>提示 {i}（點開）</summary>",
                "",
                hint_md,
                "",
                "</details>",
                "",
            ]

    lines += [
        "## 標籤",
        "",
        "- 官方分類：" + ("、".join(q["topicTags"]) or "（無）"),
        "- 我的標籤：" + ("、".join(meta["userTags"]) or "（解完題後用 `python3 lcdaily.py tag " + q["slug"] + " 遞迴 二元樹` 補上）"),
        "",
        "## 解題筆記",
        "",
        "### 思路",
        "",
        "（寫下你的想法）",
        "",
        "### 複雜度",
        "",
        "- 時間：O(?)",
        "- 空間：O(?)",
        "",
        "### 踩到的坑",
        "",
        "",
    ]
    return "\n".join(lines)


def render_solution(q: dict, lang: str) -> tuple[str, str]:
    ext = EXT_BY_LANG.get(lang, "txt")
    snippet = q["codeSnippets"].get(lang, "")
    c = COMMENT_BY_EXT.get(ext)
    header_lines = [
        f"{q['id']}. {q['titleZh']} ({q['title']})",
        f"https://leetcode.com/problems/{q['slug']}/",
        f"難度：{DIFFICULTY_ZH.get(q['difficulty'], q['difficulty'])}",
    ]
    if ext == "py":
        header = '"""\n' + "\n".join(header_lines) + '\n"""\n\n'
    elif c:
        header = "".join(f"{c} {l}\n" for l in header_lines) + "\n"
    else:
        header = "/*\n" + "".join(f" * {l}\n" for l in header_lines) + " */\n\n"
    return f"solution.{ext}", header + (snippet or "// TODO") + "\n"


def write_problem(q: dict, date: str, lang: str, force: bool) -> Path:
    d = DAILY_DIR / folder_name(date, q["slug"])
    d.mkdir(parents=True, exist_ok=True)

    meta_path = d / "meta.json"
    if meta_path.exists():
        meta = json.loads(meta_path.read_text("utf-8"))
    else:
        meta = {"userTags": [], "status": "todo", "notes": ""}

    meta.update({
        "id": q["id"],
        "date": date,
        "slug": q["slug"],
        "title": q["title"],
        "titleZh": q["titleZh"],
        "difficulty": q["difficulty"],
        "topicTags": q["topicTags"],
        "topicTagsEn": q["topicTagsEn"],
        "translated": q["translated"],
        "translateSource": q["translateSource"],
        "url": f"https://leetcode.com/problems/{q['slug']}/",
        "urlCn": f"https://leetcode.cn/problems/{q['slug']}/",
        "branch": branch_name(date, q["slug"]),
    })
    meta.setdefault("userTags", [])
    meta.setdefault("status", "todo")
    meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=2) + "\n", "utf-8")

    readme = d / "README.md"
    if readme.exists() and not force:
        print(f"  · {readme.relative_to(ROOT)} 已存在，保留不覆蓋（要重抓加 --force）")
    else:
        readme.write_text(render_problem_md(q, date, meta), "utf-8")
        print(f"  · 寫入 {readme.relative_to(ROOT)}")

    fname, code = render_solution(q, lang)
    sol = d / fname
    if sol.exists():
        print(f"  · {sol.relative_to(ROOT)} 已存在，保留你的解答")
    else:
        sol.write_text(code, "utf-8")
        print(f"  · 寫入 {sol.relative_to(ROOT)}")

    if q["exampleTestcases"]:
        tc = d / "testcases.txt"
        if not tc.exists():
            tc.write_text(q["exampleTestcases"] + "\n", "utf-8")
    return d


def branch_name(date: str, slug: str) -> str:
    return f"daily/{date}-{slug}"


# --------------------------------------------------------------------------
# 總覽 README
# --------------------------------------------------------------------------

def load_all_meta() -> list[dict]:
    metas = []
    if not DAILY_DIR.exists():
        return metas
    for p in sorted(DAILY_DIR.glob("*/meta.json")):
        try:
            m = json.loads(p.read_text("utf-8"))
            m["_dir"] = p.parent.name
            metas.append(m)
        except json.JSONDecodeError:
            print(f"  ! 略過壞掉的 {p}", file=sys.stderr)
    metas.sort(key=lambda m: (m.get("date", ""), m.get("id", "")), reverse=True)
    return metas


STATUS_ICON = {"todo": "⬜ 未解", "wip": "🟡 進行中", "done": "✅ 已解"}


def render_index(metas: list[dict]) -> str:
    done = sum(1 for m in metas if m.get("status") == "done")
    lines = [
        "## 📅 每日挑戰總覽",
        "",
        f"共 **{len(metas)}** 題　|　已解 **{done}** 題　|　"
        f"最後更新：{dt.date.today().isoformat()}",
        "",
        "| 日期 | # | 題目 | 難度 | 狀態 | 標籤 | 連結 |",
        "|---|---|---|---|---|---|---|",
    ]
    for m in metas:
        tags = (m.get("userTags") or []) + [t for t in (m.get("topicTags") or [])
                                            if t not in (m.get("userTags") or [])]
        tag_str = "、".join(f"`{t}`" for t in tags[:6]) or "—"
        title = f"[{m.get('titleZh') or m.get('title')}](daily/{m['_dir']}/README.md)"
        lines.append(
            f"| {m.get('date', '')} | {m.get('id', '')} | {title} "
            f"| {DIFFICULTY_ZH.get(m.get('difficulty', ''), m.get('difficulty', ''))} "
            f"| {STATUS_ICON.get(m.get('status', 'todo'), m.get('status'))} "
            f"| {tag_str} | [LC]({m.get('url', '')}) |"
        )

    # 標籤索引
    by_tag: dict[str, list[dict]] = {}
    for m in metas:
        for t in set((m.get("userTags") or []) + (m.get("topicTags") or [])):
            by_tag.setdefault(t, []).append(m)
    if by_tag:
        lines += ["", "## 🏷️ 標籤索引", ""]
        for t in sorted(by_tag, key=lambda k: (-len(by_tag[k]), k)):
            items = ", ".join(
                f"[{m.get('titleZh') or m.get('title')}](daily/{m['_dir']}/README.md)"
                for m in sorted(by_tag[t], key=lambda m: m.get("date", ""), reverse=True)
            )
            lines.append(f"- **{t}** ({len(by_tag[t])})：{items}")
    lines.append("")
    return "\n".join(lines)


INDEX_HEADER = """# LeetCode 每日挑戰

`lcdaily.py` 抓取 LeetCode 每日挑戰，自動開分支、建立題目資料夾，
並把題目與提示翻成繁體中文。零相依套件，只用 Python 標準函式庫。

```bash
python3 lcdaily.py fetch                  # 抓今天的每日挑戰（開分支 + 建資料夾）
python3 lcdaily.py fetch --slug two-sum   # 抓指定題目
python3 lcdaily.py tag two-sum 雜湊表 雙指標   # 解完題加標籤
python3 lcdaily.py done two-sum           # 標記已解
python3 lcdaily.py list --tag 遞迴        # 依標籤找題目
python3 lcdaily.py sync                   # 重建本頁總覽
```

翻譯方式見 [docs/翻譯設定.md](docs/翻譯設定.md)。
"""


def update_index() -> None:
    body = render_index(load_all_meta())
    block = f"{BEGIN_MARK}\n{body}{END_MARK}\n"
    if INDEX_FILE.exists():
        old = INDEX_FILE.read_text("utf-8")
        if BEGIN_MARK in old and END_MARK in old:
            new = re.sub(
                re.escape(BEGIN_MARK) + r".*?" + re.escape(END_MARK) + r"\n?",
                lambda _: block, old, flags=re.S)
        else:
            new = old.rstrip() + "\n\n" + block
    else:
        new = INDEX_HEADER + "\n" + block
    INDEX_FILE.write_text(new, "utf-8")
    print(f"  · 更新 {INDEX_FILE.name}")


def find_meta(slug: str) -> Path:
    hits = [p for p in DAILY_DIR.glob("*/meta.json")
            if json.loads(p.read_text("utf-8")).get("slug") == slug
            or p.parent.name == slug or p.parent.name.endswith(f"-{slug}")]
    if not hits:
        raise SystemExit(f"找不到題目 {slug}（試試 python3 lcdaily.py list）")
    return sorted(hits)[-1]


# --------------------------------------------------------------------------
# 指令
# --------------------------------------------------------------------------

def cmd_fetch(args) -> None:
    if args.slug:
        slug = args.slug
        date = args.date or dt.date.today().isoformat()
        print(f"→ 指定題目 {slug}（歸檔日期 {date}）")
    else:
        date, slug = fetch_daily_slug(args.site)
        if args.date:
            date = args.date
        print(f"→ {date} 每日挑戰：{slug}")

    q = fetch_question(slug, translate=args.translate, zh=args.zh)
    print(f"  · {q['id']}. {q['titleZh']}（{DIFFICULTY_ZH.get(q['difficulty'], q['difficulty'])}）")
    if q["translated"]:
        print(f"  · 翻譯來源：{q['translateSource']}")

    if not args.no_branch:
        if not check_repo_root():
            raise SystemExit("已中止（沒有動到任何檔案）")
        if not git_has_commits():
            print("  · repo 還沒有 commit，先建立初始 commit")
            (ROOT / ".gitignore").exists() or (ROOT / ".gitignore").write_text(
                "__pycache__/\n*.pyc\n.DS_Store\n.venv/\n.lc_cookie\n", "utf-8")
            INDEX_FILE.exists() or INDEX_FILE.write_text(INDEX_HEADER, "utf-8")
            git("add", ".gitignore", "README.md", "lcdaily.py")
            git("commit", "-m", "chore: 初始化 LeetCode 每日挑戰工具")
        ensure_branch(branch_name(date, q["slug"]))

    d = write_problem(q, date, args.lang, args.force)
    update_index()

    if args.commit:
        git("add", str(d.relative_to(ROOT)), "README.md")
        git("commit", "-m", f"feat({date}): {q['id']}. {q['titleZh']}")
        print("  · 已 commit")

    print(f"\n完成 → {d.relative_to(ROOT)}/README.md")


def cmd_sync(args) -> None:
    update_index()


def cmd_tag(args) -> None:
    p = find_meta(args.slug)
    m = json.loads(p.read_text("utf-8"))
    tags = m.get("userTags", [])
    if args.remove:
        tags = [t for t in tags if t not in args.tags]
    else:
        for t in args.tags:
            if t not in tags:
                tags.append(t)
    m["userTags"] = tags
    p.write_text(json.dumps(m, ensure_ascii=False, indent=2) + "\n", "utf-8")
    print(f"{m['slug']} 的標籤：{'、'.join(tags) or '（無）'}")
    update_index()


def cmd_done(args) -> None:
    p = find_meta(args.slug)
    m = json.loads(p.read_text("utf-8"))
    m["status"] = args.status
    p.write_text(json.dumps(m, ensure_ascii=False, indent=2) + "\n", "utf-8")
    print(f"{m['slug']} → {STATUS_ICON.get(args.status, args.status)}")
    update_index()


def cmd_list(args) -> None:
    metas = load_all_meta()
    if args.tag:
        metas = [m for m in metas
                 if args.tag in (m.get("userTags") or []) + (m.get("topicTags") or [])]
    if not metas:
        print("（沒有符合的題目）")
        return
    for m in metas:
        tags = "、".join((m.get("userTags") or []) + (m.get("topicTags") or []))
        print(f"{m.get('date')}  {STATUS_ICON.get(m.get('status', 'todo'))}  "
              f"{m.get('id')}. {m.get('titleZh')}  [{tags}]")


def main() -> None:
    ap = argparse.ArgumentParser(
        description="LeetCode 每日挑戰抓取工具",
        formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)

    f = sub.add_parser("fetch", help="抓取每日挑戰並建立資料夾 / 分支")
    f.add_argument("--slug", help="指定題目 slug（預設抓今日挑戰）")
    f.add_argument("--date", help="指定歸檔日期 YYYY-MM-DD")
    f.add_argument("--site", choices=["com", "cn"], default="com",
                   help="每日挑戰來源站（預設 com）")
    f.add_argument("--lang", default="python3", help="解答樣板語言（預設 python3）")
    f.add_argument("--translate", choices=["auto", "cn", "llm", "off"], default="auto",
                   help="翻譯方式：auto=官方翻譯優先、cn=只用官方、llm=只用 Claude、off=不翻")
    f.add_argument("--zh", choices=["tw", "cn"], default="tw",
                   help="中文字體用語：tw=台灣繁體（預設）、cn=簡體原樣")
    f.add_argument("--no-branch", action="store_true", help="不要開 / 切分支")
    f.add_argument("--commit", action="store_true", help="抓完自動 commit")
    f.add_argument("--force", action="store_true", help="覆蓋已存在的題目 README")
    f.set_defaults(func=cmd_fetch)

    s = sub.add_parser("sync", help="重建根目錄總覽")
    s.set_defaults(func=cmd_sync)

    t = sub.add_parser("tag", help="加上 / 移除自訂標籤")
    t.add_argument("slug")
    t.add_argument("tags", nargs="+")
    t.add_argument("--remove", action="store_true", help="改為移除這些標籤")
    t.set_defaults(func=cmd_tag)

    d = sub.add_parser("done", help="標記解題狀態")
    d.add_argument("slug")
    d.add_argument("--status", choices=["todo", "wip", "done"], default="done")
    d.set_defaults(func=cmd_done)

    l = sub.add_parser("list", help="列出題目")
    l.add_argument("--tag", help="只列出含此標籤的題目")
    l.set_defaults(func=cmd_list)

    args = ap.parse_args()
    try:
        args.func(args)
    except RuntimeError as e:
        raise SystemExit(f"錯誤：{e}")


if __name__ == "__main__":
    main()
