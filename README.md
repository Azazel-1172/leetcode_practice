# LeetCode 每日挑戰

`lcdaily.py` 抓取 LeetCode 每日挑戰，自動開分支、建立題目資料夾，
並帶回 leetcode.cn 的官方中文題面。核心只用 Python 標準函式庫；
中文翻譯需要選用套件 `curl_cffi`，沒裝也能跑（見 [docs/翻譯設定.md](docs/翻譯設定.md)）。

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
python3 lcdaily.py build-site                  # 輸出手機版唯讀網站到 _site/
python3 lcdaily.py notify --site-url <網址>     # 推播最新一題（ntfy / Discord）
```

</details>

- 解題語言、翻譯方式等預設值改 [`lcconfig.json`](lcconfig.json)
- 中文翻譯怎麼設定見 [docs/翻譯設定.md](docs/翻譯設定.md)
- 每天自動抓題 + 手機推播見 [docs/手機推播設定.md](docs/手機推播設定.md)

<!-- LCDAILY:BEGIN -->
## 📅 每日挑戰總覽

共 **9** 題　|　已解 **2** 題　|　最後更新：2026-10-10

| 日期 | # | 題目 | 難度 | 狀態 | 標籤 | 連結 |
|---|---|---|---|---|---|---|
| 2026-10-10 | 2333 | [最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md) | 中等 | ⬜ 未解 | `贪心`、`数组`、`二分查找`、`排序`、`堆（优先队列）` | [LC](https://leetcode.com/problems/minimum-sum-of-squared-difference/) |
| 2026-10-09 | 1541 | [平衡括号字符串的最少插入次数](daily/2026-10-09-minimum-insertions-to-balance-a-parentheses-string/README.md) | 中等 | ⬜ 未解 | `栈`、`贪心`、`字符串`、`Bracket Sequences` | [LC](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/) |
| 2026-10-08 | 1021 | [删除最外层的括号](daily/2026-10-08-remove-outermost-parentheses/README.md) | 簡單 | ⬜ 未解 | `栈`、`字符串`、`Bracket Sequences` | [LC](https://leetcode.com/problems/remove-outermost-parentheses/) |
| 2026-10-06 | 921 | [使括号有效的最少添加](daily/2026-10-06-minimum-add-to-make-parentheses-valid/README.md) | 中等 | ⬜ 未解 | `栈`、`贪心`、`字符串`、`Bracket Sequences` | [LC](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) |
| 2026-10-05 | 856 | [括号的分数](daily/2026-10-05-score-of-parentheses/README.md) | 中等 | ⬜ 未解 | `栈`、`字符串`、`Bracket Sequences` | [LC](https://leetcode.com/problems/score-of-parentheses/) |
| 2026-09-24 | 3550 | [数位和等于下标的最小下标](daily/2026-09-24-smallest-index-with-digit-sum-equal-to-index/README.md) | 簡單 | ⬜ 未解 | `数组`、`数学` | [LC](https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/) |
| 2026-09-23 | 1658 | [将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md) | 中等 | ⬜ 未解 | `数组`、`哈希表`、`二分查找`、`前缀和`、`滑动窗口` | [LC](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) |
| 2026-09-22 | 3525 | [求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md) | 困難 | ✅ 已解 | `線段樹`、`區間查詢`、`單點修改`、`前綴積`、`取餘數`、`线段树` | [LC](https://leetcode.com/problems/find-x-value-of-array-ii/) |
| 2026-09-21 | 3524 | [求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md) | 中等 | ✅ 已解 | `滾動陣列`、`取餘數`、`遞推`、`計數陣列`、`陣列`、`數學` | [LC](https://leetcode.com/problems/find-x-value-of-array-i/) |

## 🏷️ 標籤索引

- **Bracket Sequences** (4)：[平衡括号字符串的最少插入次数](daily/2026-10-09-minimum-insertions-to-balance-a-parentheses-string/README.md), [删除最外层的括号](daily/2026-10-08-remove-outermost-parentheses/README.md), [使括号有效的最少添加](daily/2026-10-06-minimum-add-to-make-parentheses-valid/README.md), [括号的分数](daily/2026-10-05-score-of-parentheses/README.md)
- **字符串** (4)：[平衡括号字符串的最少插入次数](daily/2026-10-09-minimum-insertions-to-balance-a-parentheses-string/README.md), [删除最外层的括号](daily/2026-10-08-remove-outermost-parentheses/README.md), [使括号有效的最少添加](daily/2026-10-06-minimum-add-to-make-parentheses-valid/README.md), [括号的分数](daily/2026-10-05-score-of-parentheses/README.md)
- **数组** (4)：[最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md), [数位和等于下标的最小下标](daily/2026-09-24-smallest-index-with-digit-sum-equal-to-index/README.md), [将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md), [求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **栈** (4)：[平衡括号字符串的最少插入次数](daily/2026-10-09-minimum-insertions-to-balance-a-parentheses-string/README.md), [删除最外层的括号](daily/2026-10-08-remove-outermost-parentheses/README.md), [使括号有效的最少添加](daily/2026-10-06-minimum-add-to-make-parentheses-valid/README.md), [括号的分数](daily/2026-10-05-score-of-parentheses/README.md)
- **贪心** (3)：[最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md), [平衡括号字符串的最少插入次数](daily/2026-10-09-minimum-insertions-to-balance-a-parentheses-string/README.md), [使括号有效的最少添加](daily/2026-10-06-minimum-add-to-make-parentheses-valid/README.md)
- **二分查找** (2)：[最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md), [将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md)
- **取餘數** (2)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md), [求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **数学** (2)：[数位和等于下标的最小下标](daily/2026-09-24-smallest-index-with-digit-sum-equal-to-index/README.md), [求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **前綴積** (1)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **前缀和** (1)：[将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md)
- **動態規劃 DP** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **區間查詢** (1)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **哈希表** (1)：[将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md)
- **單點修改** (1)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **堆（优先队列）** (1)：[最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md)
- **排序** (1)：[最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md)
- **數學** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **滑动窗口** (1)：[将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md)
- **滾動陣列** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **線段樹** (1)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **线段树** (1)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **計數陣列** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **遞推** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **陣列** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
<!-- LCDAILY:END -->
