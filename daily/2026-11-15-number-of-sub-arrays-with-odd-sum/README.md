# 1524. 和为奇数的子数组数目

> 英文原題：Number of Sub-arrays With Odd Sum
> 難度：中等　|　日期：2026-11-15　|　[題目連結](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/)　·　[中文站](https://leetcode.cn/problems/number-of-sub-arrays-with-odd-sum/)

> 翻譯來源：leetcode.cn

## 題目

给你一个整数数组 `arr` 。请你返回和为 **奇数** 的子数组数目。

由于答案可能会很大，请你将结果对 `10^9 + 7` 取余后返回。

 

**示例 1：**

<pre><strong>输入：</strong>arr = [1,3,5]
<strong>输出：</strong>4
<strong>解释：</strong>所有的子数组为 [[1],[1,3],[1,3,5],[3],[3,5],[5]] 。
所有子数组的和为 [1,4,9,3,8,5].
奇数和包括 [1,9,3,5] ，所以答案为 4 。</pre>

**示例 2 ：**

<pre><strong>输入：</strong>arr = [2,4,6]
<strong>输出：</strong>0
<strong>解释：</strong>所有子数组为 [[2],[2,4],[2,4,6],[4],[4,6],[6]] 。
所有子数组和为 [2,6,12,4,10,6] 。
所有子数组和都是偶数，所以答案为 0 。</pre>

**示例 3：**

<pre><strong>输入：</strong>arr = [1,2,3,4,5,6,7]
<strong>输出：</strong>16</pre>

**示例 4：**

<pre><strong>输入：</strong>arr = [100,100,99,99]
<strong>输出：</strong>4</pre>

**示例 5：**

<pre><strong>输入：</strong>arr = [7]
<strong>输出：</strong>1</pre>

 

**提示：**

- `1 <= arr.length <= 10^5`
- `1 <= arr[i] <= 100`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Can we use the accumulative sum to keep track of all the odd-sum sub-arrays ?

</details>

<details>
<summary>提示 2（點開）</summary>

> if the current accu sum is odd, we care only about previous even accu sums and vice versa.

</details>

## 標籤

- 官方分類：数组、数学、动态规划、前缀和
- 我的標籤：（解完題後用 `python3 lcdaily.py tag number-of-sub-arrays-with-odd-sum 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
