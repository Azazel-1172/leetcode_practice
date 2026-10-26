# 3619. 总价值可以被 K 整除的岛屿数目

> 英文原題：Count Islands With Total Value Divisible by K
> 難度：中等　|　日期：2026-10-26　|　[題目連結](https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k/)　·　[中文站](https://leetcode.cn/problems/count-islands-with-total-value-divisible-by-k/)

> 翻譯來源：leetcode.cn

## 題目

给你一个 `m x n` 的矩阵 `grid` 和一个正整数 `k`。一个 **岛屿 **是由 **正 **整数（表示陆地）组成的，并且陆地间 **四周 **连通（水平或垂直）。

一个岛屿的总价值是该岛屿中所有单元格的值之和。

返回总价值可以被 `k` **整除 **的岛屿数量。

 

**示例 1:**

![](https://assets.leetcode.com/uploads/2025/03/06/example1griddrawio-1.png)

**输入:** grid = `[[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]]`, k = 5

**输出:** 2

**解释:**

网格中包含四个岛屿。蓝色高亮显示的岛屿的总价值可以被 5 整除，而红色高亮显示的岛屿则不能。

**示例 2:**

![](https://assets.leetcode.com/uploads/2025/03/06/example2griddrawio.png)

**输入:** grid = `[[3,0,3,0], [0,3,0,3], [3,0,3,0]]`, k = 3

**输出:** 6

**解释:**

网格中包含六个岛屿，每个岛屿的总价值都可以被 3 整除。

 

**提示:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 1000`
- `1 <= m * n <= 10^5`
- `0 <= grid[i][j] <= 10^6`
- `1 <= k < = 10^6`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Use a BFS/DFS to find connected components.

</details>

## 標籤

- 官方分類：深度优先搜索、广度优先搜索、并查集、数组、矩阵
- 我的標籤：（解完題後用 `python3 lcdaily.py tag count-islands-with-total-value-divisible-by-k 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
