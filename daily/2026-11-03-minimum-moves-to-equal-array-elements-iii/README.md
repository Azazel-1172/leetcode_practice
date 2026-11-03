# 3736. 最小操作次数使数组元素相等 III

> 英文原題：Minimum Moves to Equal Array Elements III
> 難度：簡單　|　日期：2026-11-03　|　[題目連結](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii/)　·　[中文站](https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-iii/)

> 翻譯來源：leetcode.cn

## 題目

给你一个整数数组 `nums`。

在一步操作中，你可以将任意单个元素 `nums[i]` 的值 **增加** 1。

返回使数组中的所有元素都 **相等 **所需的 **最小总操作次数 **。

 

**示例 1:**

**输入:** nums = `[2,1,3]`

**输出:** 3

**解释:**

使所有元素相等的操作如下:

- 将 `nums[0] = 2` 增加 1, 变为 3。
- 将 `nums[1] = 1` 增加 1, 变为 2。
- 将 `nums[1] = 2` 增加 1, 变为 3。

现在，`nums` 中的所有元素都等于 3。最小总操作次数为 `3`。

**示例 2:**

**输入:** nums = `[4,4,5]`

**输出:** 2

**解释:**

使所有元素相等的操作如下:

- 将 `nums[0] = 4` 增加 1, 变为 5。
- 将 `nums[1] = 4` 增加 1, 变为 5。

现在，`nums` 中的所有元素都等于 5。最小总操作次数为 `2`。

 

**提示:**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> To make all numbers equal, they must all reach at least the maximum value in the array.

</details>

## 標籤

- 官方分類：数组、数学
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-moves-to-equal-array-elements-iii 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
