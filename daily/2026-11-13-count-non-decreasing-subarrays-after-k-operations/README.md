# 3420. 统计 K 次操作以内得到非递减子数组的数目

> 英文原題：Count Non-Decreasing Subarrays After K Operations
> 難度：困難　|　日期：2026-11-13　|　[題目連結](https://leetcode.com/problems/count-non-decreasing-subarrays-after-k-operations/)　·　[中文站](https://leetcode.cn/problems/count-non-decreasing-subarrays-after-k-operations/)

> 翻譯來源：leetcode.cn

## 題目

给你一个长度为 `n` 的数组 `nums` 和一个整数 `k` 。

对于 `nums` 中的每一个子数组，你可以对它进行 **至多** `k` 次操作。每次操作中，你可以将子数组中的任意一个元素增加 1 。

**注意** ，每个子数组都是独立的，也就是说你对一个子数组的修改不会保留到另一个子数组中。

请你返回最多 `k` 次操作以内，有多少个子数组可以变成 **非递减** 的。

如果一个数组中的每一个元素都大于等于前一个元素（如果前一个元素存在），那么我们称这个数组是 **非递减** 的。

 

**示例 1：**

**输入：**nums = `[6,3,1,2,4,4]`, k = 7

**输出：**17

**解释：**

`nums` 的所有 21 个子数组中，只有子数组 `[6, 3, 1]` ，`[6, 3, 1, 2]` ，`[6, 3, 1, 2, 4]` 和 `[6, 3, 1, 2, 4, 4]` 无法在 k = 7 次操作以内变为非递减的。所以非递减子数组的数目为 `21 - 4 = 17` 。

**示例 2：**

**输入：**nums = `[6,3,1,3,6]`, k = 4

**输出：**12

**解释：**

子数组 `[3, 1, 3, 6]` 和 `nums` 中所有小于等于三个元素的子数组中，除了 `[6, 3, 1]` 以外，都可以在 `k` 次操作以内变为非递减子数组。总共有 5 个包含单个元素的子数组，4 个包含两个元素的子数组，除 `[6, 3, 1]` 以外有 2 个包含三个元素的子数组，所以总共有 `1 + 5 + 4 + 2 = 12` 个子数组可以变为非递减的。

 

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= k <= 10^9`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Use a sparse table.

</details>

<details>
<summary>提示 2（點開）</summary>

> Compute `sp[e][i] = [lastElement, operations]` where `operations` is the number of `operations` required to make the subarray `nums[i...i + 2^e - 1]` non-decreasing, and `lastElement` be the value of the last element after the operations were applied on it.

</details>

<details>
<summary>提示 3（點開）</summary>

> How can we combine `sp[a][i]` with `sp[b][i + 2^a]` to find the answer for the subarray `nums[i...i + 2^a + 2^b - 1]`?

</details>

## 標籤

- 官方分類：栈、线段树、队列、数组、滑动窗口、单调队列、单调栈
- 我的標籤：（解完題後用 `python3 lcdaily.py tag count-non-decreasing-subarrays-after-k-operations 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
