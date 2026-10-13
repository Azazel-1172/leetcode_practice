# 3727. 最大交替平方和

> 英文原題：Maximum Alternating Sum of Squares
> 難度：中等　|　日期：2026-10-13　|　[題目連結](https://leetcode.com/problems/maximum-alternating-sum-of-squares/)　·　[中文站](https://leetcode.cn/problems/maximum-alternating-sum-of-squares/)

> 翻譯來源：leetcode.cn

## 題目

给你一个整数数组 `nums`。你可以以任意顺序 **重新排列元素 **。

数组 `arr` 的 **交替得分 **定义为：

- `score = arr[0]^2 - arr[1]^2 + arr[2]^2 - arr[3]^2 + ...`

在对 `nums` 重新排列后，返回其 **最大可能的交替得分**。

 

**示例 1：**

**输入：** nums = `[1,2,3]`

**输出：** 12

**解释：**

`nums` 的一种可行重排为 `[2,1,3]`，该排列在所有可能重排中给出了最大交替得分。

交替得分计算如下：

`score = 2^2 - 1^2 + 3^2 = 4 - 1 + 9 = 12`

**示例 2：**

**输入：** nums = `[1,-1,2,-2,3,-3]`

**输出：** 16

**解释：**

`nums` 的一种可行重排为 `[-3,-1,-2,1,3,2]`，该排列在所有可能重排中给出了最大交替得分。

交替得分计算如下：

`score = (-3)^2 - (-1)^2 + (-2)^2 - (1)^2 + (3)^2 - (2)^2 = 9 - 1 + 4 - 1 + 9 - 4 = 16`

 

**提示：**

- `1 <= nums.length <= 10^5`
- `-4 * 10^4 <= nums[i] <= 4 * 10^4`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> The score uses squares of values. The original signs of `nums` don't affect the squared terms.

</details>

<details>
<summary>提示 2（點開）</summary>

> In the alternating sum, even indices contribute positively and odd indices negatively.

</details>

## 標籤

- 官方分類：贪心、数组、排序
- 我的標籤：（解完題後用 `python3 lcdaily.py tag maximum-alternating-sum-of-squares 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
