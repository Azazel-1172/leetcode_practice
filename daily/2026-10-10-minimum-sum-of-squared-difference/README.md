# 2333. 最小差值平方和

> 英文原題：Minimum Sum of Squared Difference
> 難度：中等　|　日期：2026-10-10　|　[題目連結](https://leetcode.com/problems/minimum-sum-of-squared-difference/)　·　[中文站](https://leetcode.cn/problems/minimum-sum-of-squared-difference/)

> 翻譯來源：leetcode.cn

## 題目

给你两个下标从 **0** 开始的整数数组 `nums1` 和 `nums2` ，长度为 `n` 。

数组 `nums1` 和 `nums2` 的 **差值平方和** 定义为所有满足 `0 <= i < n` 的 `(nums1[i] - nums2[i])^2` 之和。

同时给你两个正整数 `k1` 和 `k2` 。你可以将 `nums1` 中的任意元素 `+1` 或者 `-1` 至多 `k1` 次。类似的，你可以将 `nums2` 中的任意元素 `+1` 或者 `-1` 至多 `k2` 次。

请你返回修改数组* *`nums1`* *至多* *`k1` 次且修改数组* *`nums2` 至多 `k2`* *次后的最小 **差值平方和** 。

**注意：**你可以将数组中的元素变成 **负** 整数。

 

**示例 1：**

<pre><strong>输入：</strong>nums1 = [1,2,3,4], nums2 = [2,10,20,19], k1 = 0, k2 = 0
<strong>输出：</strong>579
<strong>解释：</strong>nums1 和 nums2 中的元素不能修改，因为 k1 = 0 和 k2 = 0 。
差值平方和为：(1 - 2)^2 + (2 - 10)^2 + (3 - 20)^2 + (4 - 19)^2 = 579 。</pre>

**示例 2：**

<pre><strong>输入：</strong>nums1 = [1,4,10,12], nums2 = [5,8,6,9], k1 = 1, k2 = 1
<strong>输出：</strong>43
<strong>解释：</strong>一种得到最小差值平方和的方式为：
- 将 nums1[0] 增加一次。
- 将 nums2[2] 增加一次。
最小差值平方和为：
(2 - 5)^2 + (4 - 8)^2 + (10 - 7)^2 + (12 - 9)^2 = 43 。
注意，也有其他方式可以得到最小差值平方和，但没有得到比 43 更小答案的方案。</pre>

 

**提示：**

- `n == nums1.length == nums2.length`
- `1 <= n <= 10^5`
- `0 <= nums1[i], nums2[i] <= 10^5`
- `0 <= k1, k2 <= 10^9`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> There is no difference between the purpose of k1 and k2. Adding +1 to one element in nums1 is same as performing -1 to one element in nums2, and vice versa.

</details>

<details>
<summary>提示 2（點開）</summary>

> Reduce the sum of squared difference greedily. One operation of k should use the index that has the current maximum difference.

</details>

<details>
<summary>提示 3（點開）</summary>

> Binary search the maximum difference for the final result.

</details>

## 標籤

- 官方分類：贪心、数组、二分查找、排序、堆（优先队列）
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-sum-of-squared-difference 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
