# 3947. 购买最多物品数目 II

> 英文原題：Maximum Number of Items From Sale II
> 難度：中等　|　日期：2026-11-28　|　[題目連結](https://leetcode.com/problems/maximum-number-of-items-from-sale-ii/)　·　[中文站](https://leetcode.cn/problems/maximum-number-of-items-from-sale-ii/)

> 翻譯來源：leetcode.cn

## 題目

给你一个二维整数数组 `items`，其中 `items[i] = [factor_i, price_i]` 表示下标为 `i` 的物品。同时给你一个整数 `budget`。

每种物品都有无限个可供购买。你可以购买任意数量的任意物品，但购买物品的总花费最多为 `budget`。

购买物品后，你可以根据以下规则获得免费的物品：

- 购买的每一份物品 `i` **最多 **可以让你获得 **一份** 免费的其他物品 `j`。
- 免费物品必须满足 `i != j` 且 `factor_i` 可以整除 `factor_j`。
- 对于每个有序对 `(i, j)`，无论你购买了多少个物品 `i`，你从物品 `i` 的购买中 **最多只能一次 **免费获得物品 `j`。
- 如果免费物品 `j` 是通过购买不同种类的物品获得的，那么同一种物品 `j` 可以被免费获得多次。

返回你在购买物品花费最多为 `budget` 的前提下，能够获得的 **物品最大总数 **，包括购买的物品和免费的物品。

 

**示例 1：**

**输入：** items = `[[1,6],[2,4],[3,5]]`, budget = 19

**输出：** 5

**解释：**

- 你可以购买 2 个物品 0 和 1 个物品 1，总花费为 `2 * 6 + 4 = 16`，不超过 `budget = 19`。
- 购买的其中 1 个物品 0 可以免费获得 1 个物品 1，因为 `factor_0 = 1` 可以整除 `factor_1 = 2`。
- 购买的另一个物品 0 可以免费获得 1 个物品 2，因为 `factor_0 = 1` 可以整除 `factor_2 = 3`。
- 你最终拥有 3 个购买的物品和 2 个免费物品，总共 5 个物品。

**示例 2：**

**输入：** items = `[[2,8],[1,10],[6,6],[4,12],[5,20],[5,17]]`, budget = 35

**输出：** 7

**解释：**

- 你可以购买 2 个物品 0、1 个物品 1 以及 1 个物品 2，总花费为 `2 * 8 + 10 + 6 = 32`，不超过 `budget = 35`。
- 购买的其中 1 个物品 0 可以免费获得 1 个物品 2，因为 `factor_0 = 2` 可以整除 `factor_2 = 6`。
- 购买的另一个物品 0 可以免费获得 1 个物品 3，因为 `factor_0 = 2` 可以整除 `factor_3 = 4`。
- 购买的 1 个物品 1 可以免费获得 1 个物品 2，因为 `factor_1 = 1` 可以整除 `factor_2 = 6`。
- 购买物品 2 没有获得免费物品，因为 `factor_2 = 6` 不能整除任何其他物品的 factor。
- 你最终拥有 4 个购买的物品和 3 个免费物品，总共 7 个物品。

 

**提示：**

- `1 <= items.length <= 10^5`
- `items[i] = [factor_i, price_i]`
- `1 <= factor_i <= items.length`
- `1 <= price_i <= 10^9`
- `1 <= budget <= 10^9`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> For each item `i`, compute `gain[i]` = number of other items `j` such that `factor[i]` divides `factor[j]`. This can be done by counting factors and iterating over multiples.

</details>

<details>
<summary>提示 2（點開）</summary>

> If you buy `c` copies of item `i`, it contributes `c + min(c, gain[i])` total copies, because only the first `gain[i]` purchased copies can be matched to distinct free items.

</details>

<details>
<summary>提示 3（點開）</summary>

> View purchases as marginal units: for item `i`, the first `gain[i]` copies have value `2` each, and all later copies have value `1` each.

</details>

<details>
<summary>提示 4（點開）</summary>

> Since extra value-1 copies should always be bought from the cheapest item, the main task is to choose the cheapest useful value-2 marginal units. Sort item types by price and process their `gain[i]` boosted copies in batches rather than expanding them one by one.

</details>

## 標籤

- 官方分類：贪心、数组、排序、堆（优先队列）
- 我的標籤：（解完題後用 `python3 lcdaily.py tag maximum-number-of-items-from-sale-ii 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
