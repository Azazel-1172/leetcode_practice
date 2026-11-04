# 3505. Minimum Operations to Make Elements Within K Subarrays Equal

> 英文原題：Minimum Operations to Make Elements Within K Subarrays Equal
> 難度：困難　|　日期：2026-11-04　|　[題目連結](https://leetcode.com/problems/minimum-operations-to-make-elements-within-k-subarrays-equal/)　·　[中文站](https://leetcode.cn/problems/minimum-operations-to-make-elements-within-k-subarrays-equal/)

> ⚠️ 沒有取得中文翻譯，以下為英文原文。

## 題目

You are given an integer array `nums` and two integers, `x` and `k`. You can perform the following operation any number of times (**including zero**):

- Increase or decrease any element of `nums` by 1.

Return the **minimum** number of operations needed to have **at least** `k` *non-overlapping subarrays* of size **exactly** `x` in `nums`, where all elements within each subarray are equal.

 

**Example 1:**

**Input:** nums = `[5,-2,1,3,7,3,6,4,-1]`, x = 3, k = 2

**Output:** 8

**Explanation:**

- Use 3 operations to add 3 to `nums[1]` and use 2 operations to subtract 2 from `nums[3]`. The resulting array is `[5, 1, 1, 1, 7, 3, 6, 4, -1]`.
- Use 1 operation to add 1 to `nums[5]` and use 2 operations to subtract 2 from `nums[6]`. The resulting array is `[5, 1, 1, 1, 7, 4, 4, 4, -1]`.
- Now, all elements within each subarray `[1, 1, 1]` (from indices 1 to 3) and `[4, 4, 4]` (from indices 5 to 7) are equal. Since 8 total operations were used, 8 is the output.

**Example 2:**

**Input:** nums = `[9,-2,-2,-2,1,5]`, x = 2, k = 2

**Output:** 3

**Explanation:**

- Use 3 operations to subtract 3 from `nums[4]`. The resulting array is `[9, -2, -2, -2, -2, 5]`.
- Now, all elements within each subarray `[-2, -2]` (from indices 1 to 2) and `[-2, -2]` (from indices 3 to 4) are equal. Since 3 operations were used, 3 is the output.

 

**Constraints:**

- `2 <= nums.length <= 10^5`
- `-10^6 <= nums[i] <= 10^6`
- `2 <= x <= nums.length`
- `1 <= k <= 15`
- `2 <= k * x <= nums.length`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Making every element of an x-sized window equal to its median is optimal.

</details>

<details>
<summary>提示 2（點開）</summary>

> Precalculate this for each window.

</details>

## 標籤

- 官方分類：Array、Hash Table、Math、Dynamic Programming、Sliding Window、Heap (Priority Queue)
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-operations-to-make-elements-within-k-subarrays-equal 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
