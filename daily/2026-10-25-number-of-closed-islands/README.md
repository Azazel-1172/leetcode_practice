# 1254. 统计封闭岛屿的数目

> 英文原題：Number of Closed Islands
> 難度：中等　|　日期：2026-10-25　|　[題目連結](https://leetcode.com/problems/number-of-closed-islands/)　·　[中文站](https://leetcode.cn/problems/number-of-closed-islands/)

> 翻譯來源：leetcode.cn

## 題目

二维矩阵 `grid` 由 `0` （土地）和 `1` （水）组成。岛是由最大的4个方向连通的 `0` 组成的群，封闭岛是一个 `完全` 由1包围（左、上、右、下）的岛。

请返回 *封闭岛屿* 的数目。

 

**示例 1：**

![](https://assets.leetcode.com/uploads/2019/10/31/sample_3_1610.png)

<pre><strong>输入：</strong>grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
<strong>输出：</strong>2
<strong>解释：</strong>
灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。</pre>

**示例 2：**

![示意圖](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2019/11/07/sample_4_1610.png)

<pre><strong>输入：</strong>grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
<strong>输出：</strong>1</pre>

**示例 3：**

<pre><strong>输入：</strong>grid = [[1,1,1,1,1,1,1],
             [1,0,0,0,0,0,1],
             [1,0,1,1,1,0,1],
             [1,0,1,0,1,0,1],
             [1,0,1,1,1,0,1],
             [1,0,0,0,0,0,1],
             [1,1,1,1,1,1,1]]
<strong>输出：</strong>2</pre>

 

**提示：**

- `1 <= grid.length, grid[0].length <= 100`
- `0 <= grid[i][j] <=1`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Exclude connected group of 0s on the corners because they are not closed island.

</details>

<details>
<summary>提示 2（點開）</summary>

> Return number of connected component of 0s on the grid.

</details>

## 標籤

- 官方分類：深度优先搜索、广度优先搜索、并查集、数组、矩阵
- 我的標籤：（解完題後用 `python3 lcdaily.py tag number-of-closed-islands 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
