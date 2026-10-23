# 3644. 排序排列

> 英文原題：Maximum K to Sort a Permutation
> 難度：中等　|　日期：2026-10-23　|　[題目連結](https://leetcode.com/problems/maximum-k-to-sort-a-permutation/)　·　[中文站](https://leetcode.cn/problems/maximum-k-to-sort-a-permutation/)

> 翻譯來源：leetcode.cn

## 題目

给你一个长度为 `n` 的整数数组 `nums`，其中 `nums` 是范围 `[0..n - 1]` 内所有数字的一个 **排列 **。

你可以在满足条件 `nums[i] AND nums[j] == k` 的情况下交换下标 `i` 和 `j` 的元素，其中 `AND` 表示按位与操作，`k` 是一个**非负整数**。

返回可以使数组按 **非递减 **顺序排序的最大值 `k`（允许进行任意次这样的交换）。如果 `nums` 已经是有序的，返回 0。

**排列 **是数组所有元素的一种重新排列。

 

**示例 1：**

**输入：**nums = `[0,3,2,1]`

**输出：**1

**解释：**

选择 `k = 1`。交换 `nums[1] = 3` 和 `nums[3] = 1`，因为 `nums[1] AND nums[3] == 1`，从而得到一个排序后的排列：`[0, 1, 2, 3]`。

**示例 2：**

**输入：**nums = `[0,1,3,2]`

**输出：**2

**解释：**

选择 `k = 2`。交换 `nums[2] = 3` 和 `nums[3] = 2`，因为 `nums[2] AND nums[3] == 2`，从而得到一个排序后的排列：`[0, 1, 2, 3]`。

**示例 3：**

**输入：**nums = `[3,2,1,0]`

**输出：**0

**解释：**

只有当 `k = 0` 时，才能进行排序，因为没有更大的 `k` 能够满足 `nums[i] AND nums[j] == k` 的交换条件。

 

**提示：**

- `1 <= n == nums.length <= 10^5`
- `0 <= nums[i] <= n - 1`
- `nums` 是从 `0` 到 `n - 1` 的一个排列。

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Take the bitwise AND of all elements that are not in their correct position.

</details>

## 標籤

- 官方分類：位运算、数组
- 我的標籤：（解完題後用 `python3 lcdaily.py tag maximum-k-to-sort-a-permutation 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
