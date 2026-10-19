# 2089. 找出数组排序后的目标下标

> 英文原題：Find Target Indices After Sorting Array
> 難度：簡單　|　日期：2026-10-19　|　[題目連結](https://leetcode.com/problems/find-target-indices-after-sorting-array/)　·　[中文站](https://leetcode.cn/problems/find-target-indices-after-sorting-array/)

> 翻譯來源：leetcode.cn

## 題目

给你一个下标从 **0** 开始的整数数组 `nums` 以及一个目标元素 `target` 。

**目标下标** 是一个满足 `nums[i] == target` 的下标 `i` 。

将 `nums` 按 **非递减** 顺序排序后，返回由 `nums` 中目标下标组成的列表。如果不存在目标下标，返回一个 **空** 列表。返回的列表必须按 **递增** 顺序排列。

 

**示例 1：**

<pre><strong>输入：</strong>nums = [1,2,5,2,3], target = 2
<strong>输出：</strong>[1,2]
<strong>解释：</strong>排序后，nums 变为 [1,<em><strong>2</strong></em>,<em><strong>2</strong></em>,3,5] 。
满足 nums[i] == 2 的下标是 1 和 2 。</pre>

**示例 2：**

<pre><strong>输入：</strong>nums = [1,2,5,2,3], target = 3
<strong>输出：</strong>[3]
<strong>解释：</strong>排序后，nums 变为 [1,2,2,<em><strong>3</strong></em>,5] 。
满足 nums[i] == 3 的下标是 3 。</pre>

**示例 3：**

<pre><strong>输入：</strong>nums = [1,2,5,2,3], target = 5
<strong>输出：</strong>[4]
<strong>解释：</strong>排序后，nums 变为 [1,2,2,3,<em><strong>5</strong></em>] 。
满足 nums[i] == 5 的下标是 4 。</pre>

**示例 4：**

<pre><strong>输入：</strong>nums = [1,2,5,2,3], target = 4
<strong>输出：</strong>[]
<strong>解释：</strong>nums 中不含值为 4 的元素。</pre>

 

**提示：**

- `1 <= nums.length <= 100`
- `1 <= nums[i], target <= 100`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Try "sorting" the array first.

</details>

<details>
<summary>提示 2（點開）</summary>

> Now find all indices in the array whose values are equal to target.

</details>

## 標籤

- 官方分類：数组、二分查找、排序
- 我的標籤：（解完題後用 `python3 lcdaily.py tag find-target-indices-after-sorting-array 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
