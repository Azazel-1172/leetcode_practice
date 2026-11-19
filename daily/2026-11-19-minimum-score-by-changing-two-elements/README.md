# 2567. 修改两个元素的最小分数

> 英文原題：Minimum Score by Changing Two Elements
> 難度：中等　|　日期：2026-11-19　|　[題目連結](https://leetcode.com/problems/minimum-score-by-changing-two-elements/)　·　[中文站](https://leetcode.cn/problems/minimum-score-by-changing-two-elements/)

> 翻譯來源：leetcode.cn

## 題目

给你一个下标从 **0** 开始的整数数组 `nums` 。

- `nums` 的 **最小** 得分是满足 `0 <= i < j < nums.length` 的 `|nums[i] - nums[j]|` 的最小值。
- `nums`的 **最大 **得分是满足 `0 <= i < j < nums.length` 的 `|nums[i] - nums[j]|` 的最大值。
- `nums` 的分数是 **最大** 得分与 **最小** 得分的和。

我们的目标是最小化 `nums` 的分数。你 **最多** 可以修改 `nums` 中 **2** 个元素的值。

请你返回修改 `nums` 中 **至多两个** 元素的值后，可以得到的 **最小分数** 。

`|x|` 表示 `x` 的绝对值。

 

**示例 1：**

<pre><strong>输入：</strong>nums = [1,4,3]
<strong>输出：</strong>0
<strong>解释：</strong>将 nums[1] 和 nums[2] 的值改为 1 ，nums 变为 [1,1,1] 。|nums[i] - nums[j]| 的值永远为 0 ，所以我们返回 0 + 0 = 0 。</pre>

**示例 2：**

<pre><strong>输入：</strong>nums = [1,4,7,8,5]
<strong>输出：</strong>3
<strong>解释：
</strong>将 nums[0] 和 nums[1] 的值变为 6 ，nums 变为 [6,6,7,8,5] 。
最小得分是 i = 0 且 j = 1 时得到的 |nums[i] - nums[j]| = |6 - 6| = 0 。
最大得分是 i = 3 且 j = 4 时得到的 |nums[i] - nums[j]| = |8 - 5| = 3 。
最大得分与最小得分之和为 3 。这是最优答案。</pre>

 

**提示：**

- `3 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Changing the minimum or maximum values will only minimize the score.

</details>

<details>
<summary>提示 2（點開）</summary>

> Think about what all possible pairs of minimum and maximum values can be changed to form the minimum score.

</details>

## 標籤

- 官方分類：贪心、数组、排序
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-score-by-changing-two-elements 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
