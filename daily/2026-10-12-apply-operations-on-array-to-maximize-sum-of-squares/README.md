# 2897. 对数组执行操作使平方和最大

> 英文原題：Apply Operations on Array to Maximize Sum of Squares
> 難度：困難　|　日期：2026-10-12　|　[題目連結](https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/)　·　[中文站](https://leetcode.cn/problems/apply-operations-on-array-to-maximize-sum-of-squares/)

> 翻譯來源：leetcode.cn

## 題目

给你一个下标从 **0** 开始的整数数组 `nums` 和一个 **正** 整数 `k` 。

你可以对数组执行以下操作 **任意次** ：

- 选择两个互不相同的下标 `i` 和 `j` ，**同时** 将 `nums[i]` 更新为 `(nums[i] AND nums[j])` 且将 `nums[j]` 更新为 `(nums[i] OR nums[j])` ，`OR` 表示按位 **或** 运算，`AND` 表示按位 **与** 运算。

你需要从最终的数组里选择 `k` 个元素，并计算它们的 **平方** 之和。

请你返回你可以得到的 **最大** 平方和。

由于答案可能会很大，将答案对 `10^9 + 7` **取余** 后返回。

 

**示例 1：**

<pre><strong>输入：</strong>nums = [2,6,5,8], k = 2
<strong>输出：</strong>261
<strong>解释：</strong>我们可以对数组执行以下操作：
- 选择 i = 0 和 j = 3 ，同时将 nums[0] 变为 (2 AND 8) = 0 且 nums[3] 变为 (2 OR 8) = 10 ，结果数组为 nums = [0,6,5,10] 。
- 选择 i = 2 和 j = 3 ，同时将 nums[2] 变为 (5 AND 10) = 0 且 nums[3] 变为 (5 OR 10) = 15 ，结果数组为 nums = [0,6,0,15] 。
从最终数组里选择元素 15 和 6 ，平方和为 15^2 + 6^2 = 261 。
261 是可以得到的最大结果。</pre>

**示例 2：**

<pre><strong>输入：</strong>nums = [4,5,4,7], k = 3
<strong>输出：</strong>90
<strong>解释：</strong>不需要执行任何操作。
选择元素 7 ，5 和 4 ，平方和为 7^2 + 5^2 + 4^2 = 90 。
90 是可以得到的最大结果。</pre>

 

**提示：**

- `1 <= k <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> The operation described only transfers some bits from one element to another in their binary representation.

</details>

<details>
<summary>提示 2（點開）</summary>

> To have a maximum sum of squares, it is optimal to greedily make each number as big as possible.

</details>

## 標籤

- 官方分類：贪心、位运算、数组、哈希表
- 我的標籤：（解完題後用 `python3 lcdaily.py tag apply-operations-on-array-to-maximize-sum-of-squares 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
