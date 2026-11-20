# 3041. 修改数组后最大化数组中的连续元素数目

> 英文原題：Maximize Consecutive Elements in an Array After Modification
> 難度：困難　|　日期：2026-11-20　|　[題目連結](https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/)　·　[中文站](https://leetcode.cn/problems/maximize-consecutive-elements-in-an-array-after-modification/)

> 翻譯來源：leetcode.cn

## 題目

给你一个下标从 **0** 开始只包含 **正** 整数的数组 `nums` 。

一开始，你可以将数组中 **任意数量** 元素增加 **至多** `1` 。

修改后，你可以从最终数组中选择 **一个或者更多** 元素，并确保这些元素升序排序后是 **连续** 的。比方说，`[3, 4, 5]` 是连续的，但是 `[3, 4, 6]` 和 `[1, 1, 2, 3]` 不是连续的。

请你返回 **最多** 可以选出的元素数目。

 

**示例 1：**

<pre><strong>输入：</strong>nums = [2,1,5,1,1]
<strong>输出：</strong>3
<strong>解释：</strong>我们将下标 0 和 3 处的元素增加 1 ，得到结果数组 nums = [3,1,5,2,1] 。
我们选择元素 [<em><strong>3</strong></em>,<em><strong>1</strong></em>,5,<em><strong>2</strong></em>,1] 并将它们排序得到 [1,2,3] ，是连续元素。
最多可以得到 3 个连续元素。</pre>

**示例 2：**

<pre><strong>输入：</strong>nums = [1,4,7,10]
<strong>输出：</strong>1
<strong>解释：</strong>我们可以选择的最多元素数目是 1 。</pre>

 

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Sort the array and try using dynamic programming.

</details>

<details>
<summary>提示 2（點開）</summary>

> Let `dp[i]` be the length of the longest consecutive elements ending at element at index `i` in the sorted array.

</details>

## 標籤

- 官方分類：数组、动态规划、排序
- 我的標籤：（解完題後用 `python3 lcdaily.py tag maximize-consecutive-elements-in-an-array-after-modification 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
