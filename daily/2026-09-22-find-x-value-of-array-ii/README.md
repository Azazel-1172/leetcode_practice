# 3525. 求出数组的 X 值 II

> 英文原題：Find X Value of Array II
> 難度：困難　|　日期：2026-09-22　|　[題目連結](https://leetcode.com/problems/find-x-value-of-array-ii/)　·　[中文站](https://leetcode.cn/problems/find-x-value-of-array-ii/)

> 翻譯來源：leetcode.cn

## 題目

给你一个由 **正整数 **组成的数组 `nums` 和一个 **正整数** `k`。同时给你一个二维数组 `queries`，其中 `queries[i] = [index_i, value_i, start_i, x_i]`。

你可以对 `nums` 执行 **一次 **操作，移除 `nums` 的任意 **后缀 **，使得 `nums` 仍然**非空**。

给定一个 `x`，`nums` 的 **x值 **定义为执行以上操作后剩余元素的 **乘积 **除以 `k` 的 **余数 **为 `x` 的方案数。

对于 `queries` 中的每个查询，你需要执行以下操作，然后确定 `x_i` 对应的 `nums` 的 **x值**：

- 将 `nums[index_i]` 更新为 `value_i`。仅这个更改在接下来的所有查询中保留。
- **移除 **前缀 `nums[0..(start_i - 1)]`（`nums[0..(-1)]` 表示 **空前缀 **）。

返回一个长度为 `queries.length` 的数组 `result`，其中 `result[i]` 是第 `i` 个查询的答案。

数组的一个 **前缀 **是从数组开始位置到任意位置的子数组。

数组的一个 **后缀 **是从数组中任意位置开始直到结束的子数组。

**子数组 **是数组中一段连续的元素序列。

**注意**：操作中所选的前缀或后缀可以是 **空的 **。

**注意**：x值在本题中与问题 I 有不同的定义。

 

**示例 1：**

**输入：** nums = `[1,2,3,4,5]`, k = 3, queries = `[[2,2,0,2],[3,3,3,0],[0,1,0,1]]`

**输出：** `[2,2,2]`

**解释：**

- 对于查询 0，`nums` 变为 `[1, 2, 2, 4, 5]` 。移除空前缀后，可选操作包括：

  - 移除后缀 `[2, 4, 5]` ，`nums` 变为 `[1, 2]`。
  - 不移除任何后缀。`nums` 保持为 `[1, 2, 2, 4, 5]`，乘积为 80，对 3 取余为 2。

- 对于查询 1，`nums` 变为 `[1, 2, 2, 3, 5]` 。移除前缀 `[1, 2, 2]` 后，可选操作包括：

  - 不移除任何后缀，`nums` 为 `[3, 5]`。
  - 移除后缀 `[5]` ，`nums` 为 `[3]`。

- 对于查询 2，`nums` 保持为 `[1, 2, 2, 3, 5]` 。移除空前缀后。可选操作包括：

  - 移除后缀 `[2, 2, 3, 5]`。`nums` 为 `[1]`。
  - 移除后缀 `[3, 5]`。`nums` 为 `[1, 2, 2]`。

**示例 2：**

**输入：** nums = `[1,2,4,8,16,32]`, k = 4, queries = `[[0,2,0,2],[0,2,0,1]]`

**输出：** `[1,0]`

**解释：**

- 对于查询 0，`nums` 变为 `[2, 2, 4, 8, 16, 32]`。唯一可行的操作是：

  - 移除后缀 `[2, 4, 8, 16, 32]`。

- 对于查询 1，`nums` 仍为 `[2, 2, 4, 8, 16, 32]`。没有任何操作能使余数为 1。

**示例 3：**

**输入：** nums = `[1,1,2,1,1]`, k = 2, queries = `[[2,1,0,1]]`

**输出：** `[5]`

 

**提示：**

- `1 <= nums[i] <= 10^9`
- `1 <= nums.length <= 10^5`
- `1 <= k <= 5`
- `1 <= queries.length <= 2 * 10^4`
- `queries[i] == [index_i, value_i, start_i, x_i]`
- `0 <= index_i <= nums.length - 1`
- `1 <= value_i <= 10^9`
- `0 <= start_i <= nums.length - 1`
- `0 <= x_i <= k - 1`

## 白話翻譯

給定正整數陣列 `nums` 和正整數 `k`。

對 `queries` 裡的每一筆 `[index, value, start, x]`：

1. `nums[index] = value` ← **永久**，之後每一筆查詢都看得到
2. 看 `nums[start..n-1]` 這段 ← **暫時**，只影響這一筆
3. 枚舉它的所有非空前綴（共 `n - start` 個）
4. 數出「乘積 % k == x」的有幾個 ← 這就是這筆的答案

回傳長度 `q` 的答案陣列。

> 題目的「移除後綴、使 nums 仍非空」＝ 枚舉前綴 `nums[start..j]`，j 從 start 到 n-1。
> 「x值」是題目自創詞，等同 `x值(陣列, k, x) = 符合「乘積 % k == x」的前綴個數`，
> 注意與問題 I 的定義不同。

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Use a segment tree to efficiently maintain and merge product prefix information for the array `nums`.

</details>

<details>
<summary>提示 2（點開）</summary>

> In each segment tree node, store a frequency count of prefix product remainders for every `x` in the range [0, k - 1].

</details>

<details>
<summary>提示 3（點開）</summary>

> For each query, update `nums[index]` to `value`, then merge the segments corresponding to `nums[start..n - 1]` to compute the `x-value` for `xi`.

</details>

## 標籤

- 官方分類：线段树、数组、数学
- 我的標籤：（解完題後用 `python3 lcdaily.py tag find-x-value-of-array-ii 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
