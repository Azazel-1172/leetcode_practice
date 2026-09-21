# LeetCode 每日挑戰

`lcdaily.py` 抓取 LeetCode 每日挑戰，自動開分支、建立題目資料夾，
並把題目與提示翻成繁體中文。零相依套件，只用 Python 標準函式庫。

```bash
python3 lcdaily.py fetch      # 抓今日挑戰（開分支 + 建題目資料夾）
python3 lcdaily.py serve      # 開啟總覽 app（Mac / Windows 通用）
```

`serve` 會在 <http://127.0.0.1:8765> 啟動本機網頁 app，可以篩選、搜尋、看中文題目，
並直接改標籤、狀態與筆記——會寫回 `meta.json` 與該題 README，本頁總覽同步更新。

<details>
<summary>其他指令</summary>

```bash
python3 lcdaily.py fetch --slug two-sum        # 抓指定題目
python3 lcdaily.py fetch --lang ts,cpp         # 這次改用別的語言
python3 lcdaily.py tag two-sum 雜湊表 雙指標    # 加自訂標籤
python3 lcdaily.py done two-sum                # 標記已解
python3 lcdaily.py list --tag 遞迴             # 依標籤找題目
python3 lcdaily.py sync                        # 重建本頁總覽
```

</details>

- 解題語言、翻譯方式等預設值改 [`lcconfig.json`](lcconfig.json)
- 中文翻譯怎麼設定見 [docs/翻譯設定.md](docs/翻譯設定.md)

<!-- LCDAILY:BEGIN -->
## 📅 每日挑戰總覽

共 **1** 題　|　已解 **1** 題　|　最後更新：2026-09-21

| 日期 | # | 題目 | 難度 | 狀態 | 標籤 | 連結 |
|---|---|---|---|---|---|---|
| 2026-09-21 | 3524 | [求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md) | 中等 | ✅ 已解 | `滾動陣列`、`取餘數`、`遞推`、`計數陣列`、`陣列`、`數學` | [LC](https://leetcode.com/problems/find-x-value-of-array-i/) |

## 🏷️ 標籤索引

- **動態規劃 DP** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **取餘數** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **數學** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **滾動陣列** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **計數陣列** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **遞推** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **陣列** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
<!-- LCDAILY:END -->
