# 3551. 数位和排序需要的最小交换次数

> 英文原題：Minimum Swaps to Sort by Digit Sum
> 難度：中等　|　日期：2026-10-17　|　[題目連結](https://leetcode.com/problems/minimum-swaps-to-sort-by-digit-sum/)　·　[中文站](https://leetcode.cn/problems/minimum-swaps-to-sort-by-digit-sum/)

> 翻譯來源：leetcode.cn

## 題目

给你一个由 **互不相同** 的正整数组成的数组 `nums`，需要根据每个数字的数位和（即每一位数字相加求和）按 **升序 **对数组进行排序。如果两个数字的数位和相等，则较小的数字排在前面。

返回将 `nums` 排列为上述排序顺序所需的 **最小 **交换次数。

一次 **交换 **定义为交换数组中两个不同位置的值。

 

**示例 1：**

**输入:** nums = `[37,100]`

**输出:** 1

**解释:**

- 计算每个整数的数位和：`[3 + 7 = 10, 1 + 0 + 0 = 1] → [10, 1]`
- 根据数位和排序：`[100, 37]`。将 `37` 与 `100` 交换，得到排序后的数组。
- 因此，将 `nums` 排列为排序顺序所需的最小交换次数为 1。

**示例 2：**

**输入:** nums = `[22,14,33,7]`

**输出:** 0

**解释:**

- 计算每个整数的数位和：`[2 + 2 = 4, 1 + 4 = 5, 3 + 3 = 6, 7 = 7] → [4, 5, 6, 7]`
- 根据数位和排序：`[22, 14, 33, 7]`。数组已经是排序好的。
- 因此，将 `nums` 排列为排序顺序所需的最小交换次数为 0。

**示例 3：**

**输入:** nums = `[18,43,34,16]`

**输出:** 2

**解释:**

- 计算每个整数的数位和：`[1 + 8 = 9, 4 + 3 = 7, 3 + 4 = 7, 1 + 6 = 7] → [9, 7, 7, 7]`
- 根据数位和排序：`[16, 34, 43, 18]`。将 `18` 与 `16` 交换，再将 `43` 与 `34` 交换，得到排序后的数组。
- 因此，将 `nums` 排列为排序顺序所需的最小交换次数为 2。

 

**提示:**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `nums` 由 **互不相同** 的正整数组成。

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> First, sort the array based on digit sum (and value as a tiebreaker). Then, map each original value to its index in the sorted array.

</details>

<details>
<summary>提示 2（點開）</summary>

> Now, the problem reduces to finding the minimum number of swaps to sort this mapped array. The answer is `n - number_of_cycles` in the permutation.

</details>

## 標籤

- 官方分類：数组、哈希表、排序
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-swaps-to-sort-by-digit-sum 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
