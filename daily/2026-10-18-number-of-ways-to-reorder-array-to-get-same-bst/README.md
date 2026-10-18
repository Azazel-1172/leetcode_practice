# 1569. 将子数组重新排序得到同一个二叉搜索树的方案数

> 英文原題：Number of Ways to Reorder Array to Get Same BST
> 難度：困難　|　日期：2026-10-18　|　[題目連結](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/)　·　[中文站](https://leetcode.cn/problems/number-of-ways-to-reorder-array-to-get-same-bst/)

> 翻譯來源：leetcode.cn

## 題目

给你一个数组 `nums` 表示 `1` 到 `n` 的一个排列。我们按照元素在 `nums` 中的顺序依次插入一个初始为空的二叉搜索树（BST）。请你统计将 `nums` 重新排序后，统计满足如下条件的方案数：重排后得到的二叉搜索树与 `nums` 原本数字顺序得到的二叉搜索树相同。

- 比方说，给你 `nums = [2,1,3]`，我们得到一棵 2 为根，1 为左孩子，3 为右孩子的树。数组 `[2,3,1]` 也能得到相同的 BST，但 `[3,2,1]` 会得到一棵不同的 BST 。

请你返回重排 `nums` 后，与原数组 `nums` 得到相同二叉搜索树的方案数。

由于答案可能会很大，请将结果对** **`10^9 + 7` 取余数。

 

**示例 1：**

![](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/08/30/bb.png)

<pre><strong>输入：</strong>nums = [2,1,3]
<strong>输出：</strong>1
<strong>解释：</strong>我们将 nums 重排， [2,3,1] 能得到相同的 BST 。没有其他得到相同 BST 的方案了。</pre>

**示例 2：**

**

![](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/08/30/ex1.png)

**

<pre><strong>输入：</strong>nums = [3,4,5,1,2]
<strong>输出：</strong>5
<strong>解释：</strong>下面 5 个数组会得到相同的 BST：
[3,1,2,4,5]
[3,1,4,2,5]
[3,1,4,5,2]
[3,4,1,2,5]
[3,4,1,5,2]</pre>

**示例 3：**

**

![](https://assets.leetcode.cn/aliyun-lc-upload/uploads/2020/08/30/ex4.png)

**

<pre><strong>输入：</strong>nums = [1,2,3]
<strong>输出：</strong>0
<strong>解释：</strong>没有别的排列顺序能得到相同的 BST 。</pre>

 

**提示：**

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= nums.length`
- `nums` 中所有数 **互不相同** 。

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Use a divide and conquer strategy.

</details>

<details>
<summary>提示 2（點開）</summary>

> The first number will always be the root. Consider the numbers smaller and larger than the root separately. When merging the results together, how many ways can you order x elements in x+y positions?

</details>

## 標籤

- 官方分類：树、并查集、二叉搜索树、记忆化、数组、数学、分治、动态规划、二叉树、组合数学、Fermat's Little Theorem
- 我的標籤：（解完題後用 `python3 lcdaily.py tag number-of-ways-to-reorder-array-to-get-same-bst 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
