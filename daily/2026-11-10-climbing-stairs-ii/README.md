# 3693. 爬楼梯 II

> 英文原題：Climbing Stairs II
> 難度：中等　|　日期：2026-11-10　|　[題目連結](https://leetcode.com/problems/climbing-stairs-ii/)　·　[中文站](https://leetcode.cn/problems/climbing-stairs-ii/)

> 翻譯來源：leetcode.cn

## 題目

你正在爬一个有 `n + 1` 级台阶的楼梯，台阶编号从 `0` 到 `n`。

你还得到了一个长度为 `n` 的 **下标从 1 开始** 的整数数组 `costs`，其中 `costs[i]` 是第 `i` 级台阶的成本。

从第 `i` 级台阶，你 **只能** 跳到第 `i + 1`、`i + 2` 或 `i + 3` 级台阶。从第 `i` 级台阶跳到第 `j` 级台阶的成本定义为： `costs[j] + (j - i)^2`

你从第 0 级台阶开始，初始 `cost = 0`。

返回到达第 `n` 级台阶所需的 **最小** 总成本。

 

****示例 1:****

**输入：**n = 4, costs = `[1,2,3,4]`

**输出：**13

**解释：**

一个最优路径是 `0 → 1 → 2 → 4`

跳跃 成本计算 成本 0 → 1 `costs[1] + (1 - 0)^2 = 1 + 1` 2 1 → 2 `costs[2] + (2 - 1)^2 = 2 + 1` 3 2 → 4 `costs[4] + (4 - 2)^2 = 4 + 4` 8

因此，最小总成本为 `2 + 3 + 8 = 13`

****示例 2:****

**输入：**n = 4, costs = `[5,1,6,2]`

**输出：**11

**解释：**

一个最优路径是 `0 → 2 → 4`

跳跃 成本计算 成本 0 → 2 `costs[2] + (2 - 0)^2 = 1 + 4` 5 2 → 4 `costs[4] + (4 - 2)^2 = 2 + 4` 6

因此，最小总成本为 `5 + 6 = 11`

****示例 3:****

**输入：**n = 3, costs = `[9,8,3]`

**输出：**12

**解释：**

最优路径是 `0 → 3`，总成本 = `costs[3] + (3 - 0)^2 = 3 + 9 = 12`

 

**提示:**

- `1 <= n == costs.length <= 10^5`
- `1 <= costs[i] <= 10^4`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Use dynamic programming where `dp[j]` represents the minimum cost to reach step `j`.

</details>

<details>
<summary>提示 2（點開）</summary>

> From step `i`, you can jump to `i+1`, `i+2`, or `i+3`. Transition depends only on the previous three states.

</details>

<details>
<summary>提示 3（點開）</summary>

> `dp[j] = min(dp[i] + costs[j] + (j - i)^2)` for all `i` in {`j-1`, `j-2`, `j-3`}.

</details>

<details>
<summary>提示 4（點開）</summary>

> Initialize `dp[0] = 0` and compute up to `dp[n]`; the answer is `dp[n]`.

</details>

## 標籤

- 官方分類：Array、Dynamic Programming
- 我的標籤：（解完題後用 `python3 lcdaily.py tag climbing-stairs-ii 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
