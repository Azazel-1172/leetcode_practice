# 3411. 最长乘积等价子数组

> 英文原題：Maximum Subarray With Equal Products
> 難度：簡單　|　日期：2026-11-24　|　[題目連結](https://leetcode.com/problems/maximum-subarray-with-equal-products/)　·　[中文站](https://leetcode.cn/problems/maximum-subarray-with-equal-products/)

> 翻譯來源：leetcode.cn

## 題目

给你一个由 **正整数 **组成的数组 `nums`。

如果一个数组 `arr` 满足 `prod(arr) == lcm(arr) * gcd(arr)`，则称其为 **乘积等价数组 **，其中：

- `prod(arr)` 表示 `arr` 中所有元素的乘积。
- `gcd(arr)` 表示 `arr` 中所有元素的最大公因数 (GCD)。
- `lcm(arr)` 表示 `arr` 中所有元素的最小公倍数 (LCM)。

返回数组 `nums` 的 **最长** **乘积等价 子数组 **的长度。

 

**示例 1：**

**输入：** nums = `[1,2,1,2,1,1,1]`

**输出：** 5

**解释：** 

最长的乘积等价子数组是 `[1, 2, 1, 1, 1]`，其中 `prod([1, 2, 1, 1, 1]) = 2`， `gcd([1, 2, 1, 1, 1]) = 1`，以及 `lcm([1, 2, 1, 1, 1]) = 2`。

**示例 2：**

**输入：** nums = `[2,3,4,5,6]`

**输出：** 3

**解释：** 

最长的乘积等价子数组是 `[3, 4, 5]`。

**示例 3：**

**输入：** nums = `[1,2,3,1,4,5,1]`

**输出：** 5

 

**提示：**

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 10`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> What is the maximum possible lcm?

</details>

## 標籤

- 官方分類：数组、数学、枚举、数论、滑动窗口
- 我的標籤：（解完題後用 `python3 lcdaily.py tag maximum-subarray-with-equal-products 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
