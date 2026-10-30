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

共 **29** 題　|　已解 **2** 題　|　最後更新：2026-10-30

| 日期 | # | 題目 | 難度 | 狀態 | 標籤 | 連結 |
|---|---|---|---|---|---|---|
| 2026-10-30 | 3970 | [最多 K 个连续相同字符的最短路径](daily/2026-10-30-shortest-path-with-at-most-k-consecutive-identical-characters/README.md) | 中等 | ⬜ 未解 | `图`、`字符串`、`最短路`、`堆（优先队列）` | [LC](https://leetcode.com/problems/shortest-path-with-at-most-k-consecutive-identical-characters/) |
| 2026-10-29 | 3841 | [查询树上回文路径](daily/2026-10-29-palindromic-path-queries-in-a-tree/README.md) | 困難 | ⬜ 未解 | `位运算`、`树`、`深度优先搜索`、`树状数组`、`线段树`、`数组` | [LC](https://leetcode.com/problems/palindromic-path-queries-in-a-tree/) |
| 2026-10-28 | 3882 | [网格图中最小异或路径](daily/2026-10-28-minimum-xor-path-in-a-grid/README.md) | 中等 | ⬜ 未解 | `位运算`、`数组`、`动态规划`、`矩阵` | [LC](https://leetcode.com/problems/minimum-xor-path-in-a-grid/) |
| 2026-10-27 | 3963 | [构造恰好一条路径的网格](daily/2026-10-27-create-grid-with-exactly-one-path/README.md) | 簡單 | ⬜ 未解 | — | [LC](https://leetcode.com/problems/create-grid-with-exactly-one-path/) |
| 2026-10-26 | 3619 | [总价值可以被 K 整除的岛屿数目](daily/2026-10-26-count-islands-with-total-value-divisible-by-k/README.md) | 中等 | ⬜ 未解 | `深度优先搜索`、`广度优先搜索`、`并查集`、`数组`、`矩阵` | [LC](https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k/) |
| 2026-10-25 | 1254 | [统计封闭岛屿的数目](daily/2026-10-25-number-of-closed-islands/README.md) | 中等 | ⬜ 未解 | `深度优先搜索`、`广度优先搜索`、`并查集`、`数组`、`矩阵` | [LC](https://leetcode.com/problems/number-of-closed-islands/) |
| 2026-10-24 | 2409 | [统计共同度过的日子数](daily/2026-10-24-count-days-spent-together/README.md) | 簡單 | ⬜ 未解 | `数学`、`字符串` | [LC](https://leetcode.com/problems/count-days-spent-together/) |
| 2026-10-23 | 3644 | [排序排列](daily/2026-10-23-maximum-k-to-sort-a-permutation/README.md) | 中等 | ⬜ 未解 | `位运算`、`数组` | [LC](https://leetcode.com/problems/maximum-k-to-sort-a-permutation/) |
| 2026-10-22 | 3942 | [排序排列的最少操作数](daily/2026-10-22-minimum-operations-to-sort-a-permutation/README.md) | 中等 | ⬜ 未解 | `数组` | [LC](https://leetcode.com/problems/minimum-operations-to-sort-a-permutation/) |
| 2026-10-21 | 3863 | [将一个字符串排序的最小操作次数](daily/2026-10-21-minimum-operations-to-sort-a-string/README.md) | 中等 | ⬜ 未解 | `字符串` | [LC](https://leetcode.com/problems/minimum-operations-to-sort-a-string/) |
| 2026-10-20 | 3886 | [可排序整数求和](daily/2026-10-20-sum-of-sortable-integers/README.md) | 困難 | ⬜ 未解 | `数组`、`数学`、`枚举`、`排序` | [LC](https://leetcode.com/problems/sum-of-sortable-integers/) |
| 2026-10-19 | 2089 | [找出数组排序后的目标下标](daily/2026-10-19-find-target-indices-after-sorting-array/README.md) | 簡單 | ⬜ 未解 | `数组`、`二分查找`、`排序` | [LC](https://leetcode.com/problems/find-target-indices-after-sorting-array/) |
| 2026-10-18 | 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md) | 困難 | ⬜ 未解 | `树`、`并查集`、`二叉搜索树`、`记忆化`、`数组`、`数学` | [LC](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/) |
| 2026-10-17 | 3551 | [数位和排序需要的最小交换次数](daily/2026-10-17-minimum-swaps-to-sort-by-digit-sum/README.md) | 中等 | ⬜ 未解 | `数组`、`哈希表`、`排序` | [LC](https://leetcode.com/problems/minimum-swaps-to-sort-by-digit-sum/) |
| 2026-10-16 | 2916 | [子数组不同元素数目的平方和 II](daily/2026-10-16-subarrays-distinct-element-sum-of-squares-ii/README.md) | 困難 | ⬜ 未解 | `树状数组`、`线段树`、`数组`、`哈希表` | [LC](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/) |
| 2026-10-15 | 2913 | [子数组不同元素数目的平方和 I](daily/2026-10-15-subarrays-distinct-element-sum-of-squares-i/README.md) | 簡單 | ⬜ 未解 | `树状数组`、`线段树`、`数组`、`哈希表` | [LC](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/) |
| 2026-10-14 | 3723 | [数位平方和的最大值](daily/2026-10-14-maximize-sum-of-squares-of-digits/README.md) | 中等 | ⬜ 未解 | `贪心`、`数学` | [LC](https://leetcode.com/problems/maximize-sum-of-squares-of-digits/) |
| 2026-10-13 | 3727 | [最大交替平方和](daily/2026-10-13-maximum-alternating-sum-of-squares/README.md) | 中等 | ⬜ 未解 | `贪心`、`数组`、`排序` | [LC](https://leetcode.com/problems/maximum-alternating-sum-of-squares/) |
| 2026-10-12 | 2897 | [对数组执行操作使平方和最大](daily/2026-10-12-apply-operations-on-array-to-maximize-sum-of-squares/README.md) | 困難 | ⬜ 未解 | `贪心`、`位运算`、`数组`、`哈希表` | [LC](https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/) |
| 2026-10-11 | 2778 | [特殊元素平方和](daily/2026-10-11-sum-of-squares-of-special-elements/README.md) | 簡單 | ⬜ 未解 | `数组`、`枚举` | [LC](https://leetcode.com/problems/sum-of-squares-of-special-elements/) |
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

- **数组** (19)：[查询树上回文路径](daily/2026-10-29-palindromic-path-queries-in-a-tree/README.md), [网格图中最小异或路径](daily/2026-10-28-minimum-xor-path-in-a-grid/README.md), [总价值可以被 K 整除的岛屿数目](daily/2026-10-26-count-islands-with-total-value-divisible-by-k/README.md), [统计封闭岛屿的数目](daily/2026-10-25-number-of-closed-islands/README.md), [排序排列](daily/2026-10-23-maximum-k-to-sort-a-permutation/README.md), [排序排列的最少操作数](daily/2026-10-22-minimum-operations-to-sort-a-permutation/README.md), [可排序整数求和](daily/2026-10-20-sum-of-sortable-integers/README.md), [找出数组排序后的目标下标](daily/2026-10-19-find-target-indices-after-sorting-array/README.md), [将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md), [数位和排序需要的最小交换次数](daily/2026-10-17-minimum-swaps-to-sort-by-digit-sum/README.md), [子数组不同元素数目的平方和 II](daily/2026-10-16-subarrays-distinct-element-sum-of-squares-ii/README.md), [子数组不同元素数目的平方和 I](daily/2026-10-15-subarrays-distinct-element-sum-of-squares-i/README.md), [最大交替平方和](daily/2026-10-13-maximum-alternating-sum-of-squares/README.md), [对数组执行操作使平方和最大](daily/2026-10-12-apply-operations-on-array-to-maximize-sum-of-squares/README.md), [特殊元素平方和](daily/2026-10-11-sum-of-squares-of-special-elements/README.md), [最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md), [数位和等于下标的最小下标](daily/2026-09-24-smallest-index-with-digit-sum-equal-to-index/README.md), [将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md), [求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **字符串** (8)：[最多 K 个连续相同字符的最短路径](daily/2026-10-30-shortest-path-with-at-most-k-consecutive-identical-characters/README.md), [查询树上回文路径](daily/2026-10-29-palindromic-path-queries-in-a-tree/README.md), [统计共同度过的日子数](daily/2026-10-24-count-days-spent-together/README.md), [将一个字符串排序的最小操作次数](daily/2026-10-21-minimum-operations-to-sort-a-string/README.md), [平衡括号字符串的最少插入次数](daily/2026-10-09-minimum-insertions-to-balance-a-parentheses-string/README.md), [删除最外层的括号](daily/2026-10-08-remove-outermost-parentheses/README.md), [使括号有效的最少添加](daily/2026-10-06-minimum-add-to-make-parentheses-valid/README.md), [括号的分数](daily/2026-10-05-score-of-parentheses/README.md)
- **数学** (6)：[统计共同度过的日子数](daily/2026-10-24-count-days-spent-together/README.md), [可排序整数求和](daily/2026-10-20-sum-of-sortable-integers/README.md), [将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md), [数位平方和的最大值](daily/2026-10-14-maximize-sum-of-squares-of-digits/README.md), [数位和等于下标的最小下标](daily/2026-09-24-smallest-index-with-digit-sum-equal-to-index/README.md), [求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **贪心** (6)：[数位平方和的最大值](daily/2026-10-14-maximize-sum-of-squares-of-digits/README.md), [最大交替平方和](daily/2026-10-13-maximum-alternating-sum-of-squares/README.md), [对数组执行操作使平方和最大](daily/2026-10-12-apply-operations-on-array-to-maximize-sum-of-squares/README.md), [最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md), [平衡括号字符串的最少插入次数](daily/2026-10-09-minimum-insertions-to-balance-a-parentheses-string/README.md), [使括号有效的最少添加](daily/2026-10-06-minimum-add-to-make-parentheses-valid/README.md)
- **哈希表** (5)：[数位和排序需要的最小交换次数](daily/2026-10-17-minimum-swaps-to-sort-by-digit-sum/README.md), [子数组不同元素数目的平方和 II](daily/2026-10-16-subarrays-distinct-element-sum-of-squares-ii/README.md), [子数组不同元素数目的平方和 I](daily/2026-10-15-subarrays-distinct-element-sum-of-squares-i/README.md), [对数组执行操作使平方和最大](daily/2026-10-12-apply-operations-on-array-to-maximize-sum-of-squares/README.md), [将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md)
- **排序** (5)：[可排序整数求和](daily/2026-10-20-sum-of-sortable-integers/README.md), [找出数组排序后的目标下标](daily/2026-10-19-find-target-indices-after-sorting-array/README.md), [数位和排序需要的最小交换次数](daily/2026-10-17-minimum-swaps-to-sort-by-digit-sum/README.md), [最大交替平方和](daily/2026-10-13-maximum-alternating-sum-of-squares/README.md), [最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md)
- **Bracket Sequences** (4)：[平衡括号字符串的最少插入次数](daily/2026-10-09-minimum-insertions-to-balance-a-parentheses-string/README.md), [删除最外层的括号](daily/2026-10-08-remove-outermost-parentheses/README.md), [使括号有效的最少添加](daily/2026-10-06-minimum-add-to-make-parentheses-valid/README.md), [括号的分数](daily/2026-10-05-score-of-parentheses/README.md)
- **位运算** (4)：[查询树上回文路径](daily/2026-10-29-palindromic-path-queries-in-a-tree/README.md), [网格图中最小异或路径](daily/2026-10-28-minimum-xor-path-in-a-grid/README.md), [排序排列](daily/2026-10-23-maximum-k-to-sort-a-permutation/README.md), [对数组执行操作使平方和最大](daily/2026-10-12-apply-operations-on-array-to-maximize-sum-of-squares/README.md)
- **栈** (4)：[平衡括号字符串的最少插入次数](daily/2026-10-09-minimum-insertions-to-balance-a-parentheses-string/README.md), [删除最外层的括号](daily/2026-10-08-remove-outermost-parentheses/README.md), [使括号有效的最少添加](daily/2026-10-06-minimum-add-to-make-parentheses-valid/README.md), [括号的分数](daily/2026-10-05-score-of-parentheses/README.md)
- **线段树** (4)：[查询树上回文路径](daily/2026-10-29-palindromic-path-queries-in-a-tree/README.md), [子数组不同元素数目的平方和 II](daily/2026-10-16-subarrays-distinct-element-sum-of-squares-ii/README.md), [子数组不同元素数目的平方和 I](daily/2026-10-15-subarrays-distinct-element-sum-of-squares-i/README.md), [求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **二分查找** (3)：[找出数组排序后的目标下标](daily/2026-10-19-find-target-indices-after-sorting-array/README.md), [最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md), [将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md)
- **并查集** (3)：[总价值可以被 K 整除的岛屿数目](daily/2026-10-26-count-islands-with-total-value-divisible-by-k/README.md), [统计封闭岛屿的数目](daily/2026-10-25-number-of-closed-islands/README.md), [将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md)
- **树状数组** (3)：[查询树上回文路径](daily/2026-10-29-palindromic-path-queries-in-a-tree/README.md), [子数组不同元素数目的平方和 II](daily/2026-10-16-subarrays-distinct-element-sum-of-squares-ii/README.md), [子数组不同元素数目的平方和 I](daily/2026-10-15-subarrays-distinct-element-sum-of-squares-i/README.md)
- **深度优先搜索** (3)：[查询树上回文路径](daily/2026-10-29-palindromic-path-queries-in-a-tree/README.md), [总价值可以被 K 整除的岛屿数目](daily/2026-10-26-count-islands-with-total-value-divisible-by-k/README.md), [统计封闭岛屿的数目](daily/2026-10-25-number-of-closed-islands/README.md)
- **矩阵** (3)：[网格图中最小异或路径](daily/2026-10-28-minimum-xor-path-in-a-grid/README.md), [总价值可以被 K 整除的岛屿数目](daily/2026-10-26-count-islands-with-total-value-divisible-by-k/README.md), [统计封闭岛屿的数目](daily/2026-10-25-number-of-closed-islands/README.md)
- **分治** (2)：[查询树上回文路径](daily/2026-10-29-palindromic-path-queries-in-a-tree/README.md), [将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md)
- **动态规划** (2)：[网格图中最小异或路径](daily/2026-10-28-minimum-xor-path-in-a-grid/README.md), [将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md)
- **取餘數** (2)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md), [求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **堆（优先队列）** (2)：[最多 K 个连续相同字符的最短路径](daily/2026-10-30-shortest-path-with-at-most-k-consecutive-identical-characters/README.md), [最小差值平方和](daily/2026-10-10-minimum-sum-of-squared-difference/README.md)
- **广度优先搜索** (2)：[总价值可以被 K 整除的岛屿数目](daily/2026-10-26-count-islands-with-total-value-divisible-by-k/README.md), [统计封闭岛屿的数目](daily/2026-10-25-number-of-closed-islands/README.md)
- **枚举** (2)：[可排序整数求和](daily/2026-10-20-sum-of-sortable-integers/README.md), [特殊元素平方和](daily/2026-10-11-sum-of-squares-of-special-elements/README.md)
- **树** (2)：[查询树上回文路径](daily/2026-10-29-palindromic-path-queries-in-a-tree/README.md), [将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md)
- **Fermat's Little Theorem** (1)：[将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md)
- **二叉搜索树** (1)：[将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md)
- **二叉树** (1)：[将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md)
- **前綴積** (1)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **前缀和** (1)：[将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md)
- **動態規劃 DP** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **區間查詢** (1)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **單點修改** (1)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **图** (1)：[最多 K 个连续相同字符的最短路径](daily/2026-10-30-shortest-path-with-at-most-k-consecutive-identical-characters/README.md)
- **數學** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **最短路** (1)：[最多 K 个连续相同字符的最短路径](daily/2026-10-30-shortest-path-with-at-most-k-consecutive-identical-characters/README.md)
- **滑动窗口** (1)：[将 x 减到 0 的最小操作数](daily/2026-09-23-minimum-operations-to-reduce-x-to-zero/README.md)
- **滾動陣列** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **線段樹** (1)：[求出数组的 X 值 II](daily/2026-09-22-find-x-value-of-array-ii/README.md)
- **组合数学** (1)：[将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md)
- **計數陣列** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **记忆化** (1)：[将子数组重新排序得到同一个二叉搜索树的方案数](daily/2026-10-18-number-of-ways-to-reorder-array-to-get-same-bst/README.md)
- **遞推** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
- **陣列** (1)：[求陣列的 X 值 I](daily/2026-09-21-find-x-value-of-array-i/README.md)
<!-- LCDAILY:END -->
