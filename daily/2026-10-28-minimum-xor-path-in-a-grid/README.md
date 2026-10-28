# 3882. 网格图中最小异或路径

> 英文原題：Minimum XOR Path in a Grid
> 難度：中等　|　日期：2026-10-28　|　[題目連結](https://leetcode.com/problems/minimum-xor-path-in-a-grid/)　·　[中文站](https://leetcode.cn/problems/minimum-xor-path-in-a-grid/)

> 翻譯來源：leetcode.cn

## 題目

给你一个大小为 `m * n` 的二维整数数组 `grid`。

你从 **左上角** 的单元格 `(0, 0)` 出发，想要到达 **右下角** 的单元格 `(m - 1, n - 1)`。

在每一步中，你 **可以** **向右或向下** 移动。

路径的 **代价** 定义为该路径上所有单元格（**包括** 起点和终点）的值的 **按位异或**。

返回从 `(0, 0)` 到 `(m - 1, n - 1)` 的所有有效路径中 **最小** 的可能异或值。

 

**示例 1：**

**输入：** grid = `[[1,2],[3,4]]`

**输出：** 6

**解释：**

有两条有效路径：

- `(0, 0) → (0, 1) → (1, 1)`，异或值为：`1 XOR 2 XOR 4 = 7`
- `(0, 0) → (1, 0) → (1, 1)`，异或值为：`1 XOR 3 XOR 4 = 6`

所有有效路径中的最小异或值为 6。

**示例 2：**

**输入：** grid = `[[6,7],[5,8]]`

**输出：** 9

**解释：**

有两条有效路径：

- `(0, 0) → (0, 1) → (1, 1)`，异或值为：`6 XOR 7 XOR 8 = 9`
- `(0, 0) → (1, 0) → (1, 1)`，异或值为：`6 XOR 5 XOR 8 = 11`

所有有效路径中的最小异或值为 9。

**示例 3：**

**输入：** grid = `[[2,7,5]]`

**输出：** 0

**解释：**

只有一条有效路径：

- `(0, 0) → (0, 1) → (0, 2)`，异或值为：`2 XOR 7 XOR 5 = 0`

这条路径的异或值为 0，这是可能达到的最小值。

 

**提示：**

- `1 <= m == grid.length <= 1000`
- `1 <= n == grid[i].length <= 1000`
- `m * n <= 1000`
- `0 <= grid[i][j] <= 1023​`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Use dynamic programming with state `dp[i][j][x]`, where `x` is a possible XOR value.

</details>

<details>
<summary>提示 2（點開）</summary>

> `dp[i][j][x]` indicates whether it is possible to reach cell `(i, j)` with XOR equal to `x`.

</details>

<details>
<summary>提示 3（點開）</summary>

> Transition from the top left cell by updating `x ^ grid[i][j]`, and track all reachable XOR values to find the minimum at the end cell.

</details>

## 標籤

- 官方分類：位运算、数组、动态规划、矩阵
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-xor-path-in-a-grid 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
