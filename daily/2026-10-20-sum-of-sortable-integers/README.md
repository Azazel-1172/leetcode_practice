# 3886. 可排序整数求和

> 英文原題：Sum of Sortable Integers
> 難度：困難　|　日期：2026-10-20　|　[題目連結](https://leetcode.com/problems/sum-of-sortable-integers/)　·　[中文站](https://leetcode.cn/problems/sum-of-sortable-integers/)

> 翻譯來源：leetcode.cn

## 題目

给你一个长度为 `n` 的整数数组 `nums`。

如果一个整数 `k` 满足以下条件，则称其为 **可排序整数**：`k` 是 `n` 的 **因数**，且可以通过依次执行以下操作将 `nums` 排序为** 非递减顺序**：

- 将 `nums` 划分为长度为 `k` 的** 连续子数组**。
- **独立地对每个子数组进行循环移动**（左移或右移任意次数）。

返回所有可能的可排序整数 `k` 的和。

**子数组** 是数组中的一个连续、非空元素序列。

 

**示例 1：**

**输入：** nums = `[3,1,2]`

**输出：** 3

**解释：**​​​​​​​

- 对于 `n = 3`，可能的因数是 1 和 3。
- 对于 `k = 1`：每个子数组都只有一个元素。无法通过移动使数组排序。
- 对于 `k = 3`：单个子数组 `[3, 1, 2]` 可以通过左移一次得到 `[1, 2, 3]`，从而将数组排序。
- 只有 `k = 3` 可排序，因此答案是 3。

**示例 2：**

**输入：** nums = `[7,6,5]`

**输出：** 0

**解释：**

- 对于 `n = 3`，可能的因数是 1 和 3。
- 对于 `k = 1`：每个子数组都只有一个元素。无法通过移动使数组排序。
- 对于 `k = 3`：单个子数组 `[7, 6, 5]` 无法通过任何移动排序为非递减顺序。
- 没有任何可排序的 `k`，因此答案是 0。

**示例 3：**

**输入：** nums = `[5,8]`

**输出：** 3

**解释：**​​​​​​​

- 对于 `n = 2`，可能的因数是 1 和 2。
- 由于 `[5, 8]` 本身已经有序，每个因数都可排序。
- 因此答案是 `1 + 2 = 3`。

 

**提示：**

- `1 <= n == nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> First, observe that `k` must divide `n`, since the array is partitioned into subarrays of length `k`. Iterate over all divisors of `n`.

</details>

<details>
<summary>提示 2（點開）</summary>

> Let `s` be the sorted version of the array. For each divisor `k`, check every block `[i, i+k)`.

</details>

<details>
<summary>提示 3（點開）</summary>

> A block can be rotated to match its sorted counterpart if the sorted segment `s[i..i+k-1]` appears as a cyclic rotation of `nums[i..i+k-1]`.

</details>

<details>
<summary>提示 4（點開）</summary>

> You can test this by checking whether the sorted segment exists inside two concatenated copies of the block. If all blocks satisfy this, then `k` is sortable.

</details>

## 標籤

- 官方分類：数组、数学、枚举、排序
- 我的標籤：（解完題後用 `python3 lcdaily.py tag sum-of-sortable-integers 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
