# 3963. 构造恰好一条路径的网格

> 英文原題：Create Grid With Exactly One Path
> 難度：簡單　|　日期：2026-10-27　|　[題目連結](https://leetcode.com/problems/create-grid-with-exactly-one-path/)　·　[中文站](https://leetcode.cn/problems/create-grid-with-exactly-one-path/)

> 翻譯來源：leetcode.cn

## 題目

给你两个整数 `m` 和 `n`，分别表示网格的行数和列数。

请你构造 **任意** 一个只包含字符 `'.'` 和 `'#'` 的 `m x n` 网格，其中：

- `'.'` 表示空单元格。
- `'#'` 表示障碍物单元格。

**有效路径** 是满足以下条件的空单元格序列：

- 从左上角单元格 `(0, 0)` 开始。
- 在右下角单元格 `(m - 1, n - 1)` 结束。
- 只能向：

  - 右移动，从 `(i, j)` 到 `(i, j + 1)`，或者
  - 下移动，从 `(i, j)` 到 `(i + 1, j)`。

返回任意一个从左上角到右下角 **恰好只有一条有效路径** 的网格。

 

**示例 1：**

**输入：** m = 2, n = 3

**输出：** ["..#","#.."]

**解释：**

![示意圖](https://assets.leetcode.com/uploads/2026/05/26/screenshot-2026-05-26-at-61005pm.png)

唯一的有效路径是：`(0,0) → (0,1) → (1,1) → (1,2)`

**示例 2：**

**输入：** m = 3, n = 3

**输出：** ["..#","#..","##."]

**解释：**

![示意圖](https://assets.leetcode.com/uploads/2026/05/26/screenshot-2026-05-26-at-61129pm.png)

唯一的有效路径是：`(0,0) → (0,1) → (1,1) → (1,2) → (2,2)`

**示例 3：**

**输入：** m = 1, n = 4

**输出：** `["...."]`

**解释：**

唯一的有效路径是：`(0,0) → (0,1) → (0,2) → (0,3)`

 

**提示：**

- `1 <= m, n <= 25`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> It is enough to leave one simple route made of free cells and block every other cell.

</details>

<details>
<summary>提示 2（點開）</summary>

> There are many routes to choose from. What is the simplest one you can think of?

</details>

<details>
<summary>提示 3（點開）</summary>

> One possible route: Go right while possible, then go down till you reach the destination.

</details>

## 標籤

- 官方分類：（無）
- 我的標籤：（解完題後用 `python3 lcdaily.py tag create-grid-with-exactly-one-path 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
