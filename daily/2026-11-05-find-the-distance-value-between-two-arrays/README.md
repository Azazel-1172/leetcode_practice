# 1385. 两个数组间的距离值

> 英文原題：Find the Distance Value Between Two Arrays
> 難度：簡單　|　日期：2026-11-05　|　[題目連結](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/)　·　[中文站](https://leetcode.cn/problems/find-the-distance-value-between-two-arrays/)

> 翻譯來源：leetcode.cn

## 題目

给你两个整数数组 `arr1` ， `arr2` 和一个整数 `d` ，请你返回两个数组之间的 **距离值** 。

「**距离值**」** **定义为符合此距离要求的元素数目：对于元素 `arr1[i]` ，不存在任何元素 `arr2[j]` 满足 `|arr1[i]-arr2[j]| <= d` 。

 

**示例 1：**

<pre><strong>输入：</strong>arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
<strong>输出：</strong>2
<strong>解释：</strong>
对于 arr1[0]=4 我们有：
|4-10|=6 &gt; d=2
|4-9|=5 &gt; d=2
|4-1|=3 &gt; d=2
|4-8|=4 &gt; d=2
所以 arr1[0]=4 符合距离要求

对于 arr1[1]=5 我们有：
|5-10|=5 &gt; d=2
|5-9|=4 &gt; d=2
|5-1|=4 &gt; d=2
|5-8|=3 &gt; d=2
所以 arr1[1]=5 也符合距离要求

对于 arr1[2]=8 我们有：
<strong>|8-10|=2 &lt;= d=2</strong>
<strong>|8-9|=1 &lt;= d=2</strong>
|8-1|=7 &gt; d=2
<strong>|8-8|=0 &lt;= d=2</strong>
存在距离小于等于 2 的情况，不符合距离要求

故而只有 arr1[0]=4 和 arr1[1]=5 两个符合距离要求，距离值为 2</pre>

**示例 2：**

<pre><strong>输入：</strong>arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
<strong>输出：</strong>2</pre>

**示例 3：**

<pre><strong>输入：</strong>arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
<strong>输出：</strong>1</pre>

 

**提示：**

- `1 <= arr1.length, arr2.length <= 500`
- `-10^3 <= arr1[i], arr2[j] <= 10^3`
- `0 <= d <= 100`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Sort 'arr2' and use binary search to get the closest element for each 'arr1[i]', it gives a time complexity of O(nlogn).

</details>

## 標籤

- 官方分類：数组、双指针、二分查找、排序
- 我的標籤：（解完題後用 `python3 lcdaily.py tag find-the-distance-value-between-two-arrays 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
