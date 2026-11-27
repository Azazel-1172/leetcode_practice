# 3946. 购买最多物品数目 I

> 英文原題：Maximum Number of Items From Sale I
> 難度：中等　|　日期：2026-11-27　|　[題目連結](https://leetcode.com/problems/maximum-number-of-items-from-sale-i/)　·　[中文站](https://leetcode.cn/problems/maximum-number-of-items-from-sale-i/)

> 翻譯來源：leetcode.cn

## 題目

给你一个二维整数数组 `items`，其中 `items[i] = [factor_i, price_i]` 表示下标为 `i` 的物品。同时给你一个整数 `budget`。

每种物品都有无限个可供购买。你可以购买任意数量的任意物品，但购买物品的总花费最多为 `budget`。

购买物品后，你可以根据以下规则获得免费的物品：

- 如果你购买了若干个物品 `i`，所有满足 `j != i` 且 `factor_i` 可以整除 `factor_j` 的物品 `j` ，你都能** 免费** 获得一份。
- 重复购买物品 `i` **不能** 再获取额外的免费物品。
- 如果免费物品 `j` 是通过购买不同种类的物品获得的，那么同一种物品 `j` 可以被免费获得多次。

返回你在购买物品花费最多为 `budget` 的前提下，能够获得的 **物品最大总数 **，包括购买的物品和免费的物品。

 

**示例 1：**

**输入：** items = `[[6,2],[2,6],[3,4]]`, budget = 9

**输出：** 4

**解释：**

- 你可以购买 2 个物品 0 和 1 个物品 2，总花费为 `2 * 2 + 4 = 8`，不超过 `budget = 9`。
- 购买物品 2 可以免费获得 1 个物品 0，因为 `factor_2 = 3` 可以整除 `factor_0 = 6`。
- 你最终拥有 3 个购买的物品和 1 个免费物品，总共 4 个物品。

**示例 2：**

**输入：** items = `[[2,4],[3,2],[4,1],[6,4],[12,4]]`, budget = 8

**输出：** 10

**解释：**

- 你可以购买 1 个物品 0、1 个物品 1 以及 2 个物品 2，总花费为 `4 + 2 + 2 * 1 = 8`。
- 购买物品 0 可以免费获得物品 2、3 和 4 各 1 个。
- 购买物品 1 可以免费获得物品 3 和 4 各 1 个。
- 购买物品 2 可以免费获得 1 个物品 4。
- 因此，你获得了 6 个免费物品。你最终拥有 4 个购买的物品和 6 个免费物品，总共 10 个物品。

 

**提示：**

- `1 <= items.length <= 1000`
- `items[i] = [factor_i, price_i]`
- `1 <= factor_i, price_i <= 1500`
- `1 <= budget <= 1500`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Precompute for every possible factor `f`, how many items have a factor divisible by `f`.

</details>

<details>
<summary>提示 2（點開）</summary>

> Buying the first copy of item `i` is special: it gives the purchased copy plus one free copy of every other item whose factor is divisible by `factor_i`.

</details>

<details>
<summary>提示 3（點開）</summary>

> Buying more copies of the same item does not create more free copies, so after the first copy, each extra purchase only adds one item copy.

</details>

<details>
<summary>提示 4（點開）</summary>

> This suggests a knapsack-style DP over item types and remaining budget, where each item can either be skipped, bought for the first time, or bought additional times after it has already been activated.

</details>

## 標籤

- 官方分類：贪心、数组、动态规划
- 我的標籤：（解完題後用 `python3 lcdaily.py tag maximum-number-of-items-from-sale-i 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
