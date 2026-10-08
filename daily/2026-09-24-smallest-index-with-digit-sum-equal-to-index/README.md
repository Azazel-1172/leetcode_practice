# 3550. 数位和等于下标的最小下标

> 英文原題：Smallest Index With Digit Sum Equal to Index
> 難度：簡單　|　日期：2026-09-24　|　[題目連結](https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/)　·　[中文站](https://leetcode.cn/problems/smallest-index-with-digit-sum-equal-to-index/)

> 翻譯來源：leetcode.cn

## 題目

给你一个整数数组 `nums` 。

返回满足 `nums[i]` 的数位和（每一位数字相加求和）等于 `i` 的 **最小** 下标 `i` 。

如果不存在满足要求的下标，返回 `-1` 。

 

**示例 1：**

**输入：**nums = `[1,3,2]`

**输出：**2

**解释：**

- `nums[2] = 2`，其数位和等于 2 ，与其下标 `i = 2` 相等。因此，输出为 2 。

**示例 2：**

**输入：**nums = `[1,10,11]`

**输出：**1

**解释：**

- `nums[1] = 10`，其数位和等于 `1 + 0 = 1`，与其下标 `i = 1` 相等。
- `nums[2] = 11`，其数位和等于是 `1 + 1 = 2`，与其下标 `i = 2` 相等。
- 由于下标 1 是满足要求的最小下标，输出为 1 。

**示例 3：**

**输入：**nums = `[1,2,3]`

**输出：**-1

**解释：**

- 由于不存在满足要求的下标，输出为 -1 。

 

**提示：**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Simulate as described

</details>

## 標籤

- 官方分類：数组、数学
- 我的標籤：（解完題後用 `python3 lcdaily.py tag smallest-index-with-digit-sum-equal-to-index 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
