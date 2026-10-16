# 2916. 子数组不同元素数目的平方和 II

> 英文原題：Subarrays Distinct Element Sum of Squares II
> 難度：困難　|　日期：2026-10-16　|　[題目連結](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/)　·　[中文站](https://leetcode.cn/problems/subarrays-distinct-element-sum-of-squares-ii/)

> 翻譯來源：leetcode.cn

## 題目

给你一个下标从 **0** 开始的整数数组 `nums` 。

定义 `nums` 一个子数组的 **不同计数** 值如下：

- 令 `nums[i..j]` 表示 `nums` 中所有下标在 `i` 到 `j` 范围内的元素构成的子数组（满足 `0 <= i <= j < nums.length` ），那么我们称子数组 `nums[i..j]` 中不同值的数目为 `nums[i..j]` 的不同计数。

请你返回 `nums` 中所有子数组的 **不同计数** 的 **平方** 和。

由于答案可能会很大，请你将它对 `10^9 + 7` **取余** 后返回。

子数组指的是一个数组里面一段连续 **非空** 的元素序列。

 

**示例 1：**

<pre><strong>输入：</strong>nums = [1,2,1]
<strong>输出：</strong>15
<strong>解释：</strong>六个子数组分别为：
[1]: 1 个互不相同的元素。
[2]: 1 个互不相同的元素。
[1]: 1 个互不相同的元素。
[1,2]: 2 个互不相同的元素。
[2,1]: 2 个互不相同的元素。
[1,2,1]: 2 个互不相同的元素。
所有不同计数的平方和为 1^2 + 1^2 + 1^2 + 2^2 + 2^2 + 2^2 = 15 。</pre>

**示例 2：**

<pre><strong>输入：</strong>nums = [2,2]
<strong>输出：3</strong>
<strong>解释：</strong>三个子数组分别为：
[2]: 1 个互不相同的元素。
[2]: 1 个互不相同的元素。
[2,2]: 1 个互不相同的元素。
所有不同计数的平方和为 1^2 + 1^2 + 1^2 = 3 。</pre>

 

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Consider the sum of the count of distinct values of subarrays ending with index `i`, let’s call it `sum`. Now if you need the sum of all subarrays ending with index `i + 1` think how it can be related to `sum` and what extra will be needed to add to this.

</details>

<details>
<summary>提示 2（點開）</summary>

> You can find that extra sum using the segment tree.

</details>

## 標籤

- 官方分類：树状数组、线段树、数组、哈希表
- 我的標籤：（解完題後用 `python3 lcdaily.py tag subarrays-distinct-element-sum-of-squares-ii 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
