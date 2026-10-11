# 2778. 特殊元素平方和

> 英文原題：Sum of Squares of Special Elements 
> 難度：簡單　|　日期：2026-10-11　|　[題目連結](https://leetcode.com/problems/sum-of-squares-of-special-elements/)　·　[中文站](https://leetcode.cn/problems/sum-of-squares-of-special-elements/)

> 翻譯來源：leetcode.cn

## 題目

给你一个下标从 **1** 开始、长度为 `n` 的整数数组 `nums` 。

对 `nums` 中的元素 `nums[i]` 而言，如果 `n` 能够被 `i` 整除，即 `n % i == 0` ，则认为 `nums[i]` 是一个 **特殊元素** 。

返回 `nums` 中所有 **特殊元素** 的 **平方和** 。

 

**示例 1：**

<pre><strong>输入：</strong>nums = [1,2,3,4]
<strong>输出：</strong>21
<strong>解释：</strong>nums 中共有 3 个特殊元素：nums[1]，因为 4 被 1 整除；nums[2]，因为 4 被 2 整除；以及 nums[4]，因为 4 被 4 整除。
因此，nums 中所有特殊元素的平方和等于 nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21 。</pre>

**示例 2：**

<pre><strong>输入：</strong>nums = [2,7,1,19,18,3]
<strong>输出：</strong>63
<strong>解释：</strong>nums 中共有 4 个特殊元素：nums[1]，因为 6 被 1 整除；nums[2] ，因为 6 被 2 整除；nums[3]，因为 6 被 3 整除；以及 nums[6]，因为 6 被 6 整除。
因此，nums 中所有特殊元素的平方和等于 nums[1] * nums[1] + nums[2] * nums[2] + nums[3] * nums[3] + nums[6] * nums[6] = 2 * 2 + 7 * 7 + 1 * 1 + 3 * 3 = 63 。</pre>

 

**提示：**

- `1 <= nums.length == n <= 50`
- `1 <= nums[i] <= 50`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Iterate over all the elements of the array. For each index i, check if it is special using the modulo operator.

</details>

<details>
<summary>提示 2（點開）</summary>

> if n%i == 0, index i is special and you should add nums[i] to the answer.

</details>

## 標籤

- 官方分類：数组、枚举
- 我的標籤：（解完題後用 `python3 lcdaily.py tag sum-of-squares-of-special-elements 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
