# 1658. 将 x 减到 0 的最小操作数

> 英文原題：Minimum Operations to Reduce X to Zero
> 難度：中等　|　日期：2026-09-23　|　[題目連結](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)　·　[中文站](https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero/)

> 翻譯來源：leetcode.cn

## 題目

给你一个整数数组 `nums` 和一个整数 `x` 。每一次操作时，你应当移除数组 `nums` 最左边或最右边的元素，然后从 `x` 中减去该元素的值。请注意，需要 **修改** 数组以供接下来的操作使用。

如果可以将 `x` **恰好** 减到 `0` ，返回** 最小操作数 **；否则，返回 `-1` 。

 

**示例 1：**

```

**输入：**nums = [1,1,4,2,3], x = 5
**输出：**2
**解释：**最佳解决方案是移除后两个元素，将 x 减到 0 。
```

**示例 2：**

```

**输入：**nums = [5,6,7,8,9], x = 4
**输出：**-1
```

**示例 3：**

```

**输入：**nums = [3,2,20,1,1,3], x = 10
**输出：**5
**解释：**最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。
```

 

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^4`
- `1 <= x <= 10^9`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Think in reverse; instead of finding the minimum prefix + suffix, find the maximum subarray.

</details>

<details>
<summary>提示 2（點開）</summary>

> Finding the maximum subarray is standard and can be done greedily.

</details>

## 標籤

- 官方分類：数组、哈希表、二分查找、前缀和、滑动窗口
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-operations-to-reduce-x-to-zero 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
