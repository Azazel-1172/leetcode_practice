# 1267. 统计参与通信的服务器

> 英文原題：Count Servers that Communicate
> 難度：中等　|　日期：2026-11-08　|　[題目連結](https://leetcode.com/problems/count-servers-that-communicate/)　·　[中文站](https://leetcode.cn/problems/count-servers-that-communicate/)

> 翻譯來源：leetcode.cn

## 題目

这里有一幅服务器分布图，服务器的位置标识在 `m * n` 的整数矩阵网格 `grid` 中，1 表示单元格上有服务器，0 表示没有。

如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。

请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。

 

**示例 1：**

![](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2019/11/24/untitled-diagram-6.jpg)

<pre><strong>输入：</strong>grid = [[1,0],[0,1]]
<strong>输出：</strong>0
<strong>解释：</strong>没有一台服务器能与其他服务器进行通信。</pre>

**示例 2：**

**

![](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2019/11/24/untitled-diagram-4-1.jpg)

**

<pre><strong>输入：</strong>grid = [[1,0],[1,1]]
<strong>输出：</strong>3
<strong>解释：</strong>所有这些服务器都至少可以与一台别的服务器进行通信。</pre>

**示例 3：**

![](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2019/11/24/untitled-diagram-1-3.jpg)

<pre><strong>输入：</strong>grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
<strong>输出：</strong>4
<strong>解释：</strong>第一行的两台服务器互相通信，第三列的两台服务器互相通信，但右下角的服务器无法与其他服务器通信。</pre>

 

**提示：**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m <= 250`
- `1 <= n <= 250`
- `grid[i][j] == 0 or 1`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Store number of computer in each row and column.

</details>

<details>
<summary>提示 2（點開）</summary>

> Count all servers that are not isolated.

</details>

## 標籤

- 官方分類：深度优先搜索、广度优先搜索、并查集、数组、计数、矩阵
- 我的標籤：（解完題後用 `python3 lcdaily.py tag count-servers-that-communicate 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
