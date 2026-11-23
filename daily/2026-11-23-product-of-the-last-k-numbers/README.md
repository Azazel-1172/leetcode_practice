# 1352. 最后 K 个数的乘积

> 英文原題：Product of the Last K Numbers
> 難度：中等　|　日期：2026-11-23　|　[題目連結](https://leetcode.com/problems/product-of-the-last-k-numbers/)　·　[中文站](https://leetcode.cn/problems/product-of-the-last-k-numbers/)

> 翻譯來源：leetcode.cn

## 題目

设计一个算法，该算法接受一个整数流并检索该流中最后 `k` 个整数的乘积。

实现 `ProductOfNumbers` 类：

- `ProductOfNumbers()` 用一个空的流初始化对象。
- `void add(int num)` 将数字 `num` 添加到当前数字列表的最后面。
- `int getProduct(int k)` 返回当前数字列表中，最后 `k` 个数字的乘积。你可以假设当前列表中始终 **至少** 包含 `k` 个数字。

题目数据保证：任何时候，任一连续数字序列的乘积都在 32 位整数范围内，不会溢出。

 

**示例：**

<pre><strong>输入：</strong>
["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
[[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]

<strong>输出：</strong>
[null,null,null,null,null,null,20,40,0,null,32]

<strong>解释：</strong>
ProductOfNumbers productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3);        // [3]
productOfNumbers.add(0);        // [3,0]
productOfNumbers.add(2);        // [3,0,2]
productOfNumbers.add(5);        // [3,0,2,5]
productOfNumbers.add(4);        // [3,0,2,5,4]
productOfNumbers.getProduct(2); // 返回 20 。最后 2 个数字的乘积是 5 * 4 = 20
productOfNumbers.getProduct(3); // 返回 40 。最后 3 个数字的乘积是 2 * 5 * 4 = 40
productOfNumbers.getProduct(4); // 返回  0 。最后 4 个数字的乘积是 0 * 2 * 5 * 4 = 0
productOfNumbers.add(8);        // [3,0,2,5,4,8]
productOfNumbers.getProduct(2); // 返回 32 。最后 2 个数字的乘积是 4 * 8 = 32</pre>

 

**提示：**

- `0 <= num <= 100`
- `1 <= k <= 4 * 10^4`
- `add` 和 `getProduct` 最多被调用 `4 * 10^4` 次。
- 在任何时间点流的乘积都在 32 位整数范围内。

 

**进阶：**您能否 **同时** 将 `GetProduct` 和 `Add` 的实现改为 `O(1)` 时间复杂度，而不是 `O(k)` 时间复杂度？

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Keep all prefix products of numbers in an array, then calculate the product of last K elements in O(1) complexity.

</details>

<details>
<summary>提示 2（點開）</summary>

> When a zero number is added, clean the array of prefix products.

</details>

## 標籤

- 官方分類：设计、数组、数学、数据流、前缀和
- 我的標籤：（解完題後用 `python3 lcdaily.py tag product-of-the-last-k-numbers 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
