# 3934. 最短唯一子数组

> 英文原題：Smallest Unique Subarray
> 難度：困難　|　日期：2026-11-25　|　[題目連結](https://leetcode.com/problems/smallest-unique-subarray/)　·　[中文站](https://leetcode.cn/problems/smallest-unique-subarray/)

> 翻譯來源：leetcode.cn

## 題目

给你一个整数数组 `nums` 。

找出 `nums` 中与其他任何 **子数组** 均 **不** **相同** 的 **子数组** 的 **最小 **长度。

返回一个整数，表示此类 **子数组** 的 **最小可能长度** 。

**子数组** 是数组中的一个连续的非空元素序列。

如果两个 **子数组** 具有相同的长度，并且对应位置的元素也相同，则认为这两个 **子数组** 是相同的。

 

**示例 1：**

**输入：** nums = `[3,3,3]`

**输出：** 3

**解释：**

- 长度为 1 的子数组：`[3]` → 出现 3 次
- 长度为 2 的子数组：`[3, 3]` → 出现 2 次
- 长度为 3 的子数组：`[3, 3, 3]` → 出现 1 次

子数组 `[3, 3, 3]` 是唯一的，因此最小唯一子数组的长度为 3。

**示例 2：**

**输入：** nums = `[2,1,2,3,3]`

**输出：** 1

**解释：**

长度为 1 的子数组：

- `[2]` → 出现 2 次
- `[1]` → 出现 1 次
- `[3]` → 出现 2 次

 子数组 `[1]` 是唯一的，因此最小唯一子数组的长度为 1。

**示例 3：**

**输入：** nums = `[1,1,2,2,1]`

**输出：** 2

**解释：**

长度为 1 的子数组：

- `[1]` → 出现 3 次
- `[2]` → 出现 2 次

长度为 2 的子数组：

- `[1, 1]` → 出现 1 次
- `[1, 2]` → 出现 1 次
- `[2, 2]` → 出现 1 次
- `[2, 1]` → 出现 1 次

 至少有一个长度为 2 的子数组是唯一的，因此最小唯一子数组的长度为 2。

 

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Think in terms of checking a fixed length `len`: count all subarrays of length `len`, and see whether any one appears exactly once.

</details>

<details>
<summary>提示 2（點開）</summary>

> Use rolling hash so each subarray can be represented in `O(1)` after preprocessing, instead of comparing arrays directly.

</details>

<details>
<summary>提示 3（點開）</summary>

> The answer can be binary searched because if there is a unique subarray of length `len`, then there is also a unique subarray of some length `> len`.

</details>

<details>
<summary>提示 4（點開）</summary>

> For each checked length, store frequencies of hashes in a hashmap. If any hash has frequency 1, that length works.

</details>

## 標籤

- 官方分類：数组、哈希表、二分查找、后缀数组、哈希函数、滚动哈希
- 我的標籤：（解完題後用 `python3 lcdaily.py tag smallest-unique-subarray 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
