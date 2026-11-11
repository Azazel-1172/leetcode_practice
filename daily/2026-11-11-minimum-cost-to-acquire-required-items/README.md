# 3789. 采购的最小花费

> 英文原題：Minimum Cost to Acquire Required Items
> 難度：中等　|　日期：2026-11-11　|　[題目連結](https://leetcode.com/problems/minimum-cost-to-acquire-required-items/)　·　[中文站](https://leetcode.cn/problems/minimum-cost-to-acquire-required-items/)

> 翻譯來源：leetcode.cn

## 題目

给你五个整数 `cost1`, `cost2`, `costBoth`, `need1` 和 `need2`。

有三种类型的物品可以购买：

- **类型 1** 的物品花费 `cost1`，并仅满足类型 1 的需求 1 个单位。
- **类型 2** 的物品花费 `cost2`，并仅满足类型 2 的需求 1 个单位。
- **类型 3** 的物品花费 `costBoth`，同时满足类型 1 和类型 2 的需求各 1 个单位。

你需要购买足够的物品，使得：

- 满足类型 1 的总需求 **至少** 为 `need1`。
- 满足类型 2 的总需求** 至少** 为 `need2`。

返回满足这些需求的 **最小 **可能总花费。

 

**示例 1：**

**输入：** cost1 = 3, cost2 = 2, costBoth = 1, need1 = 3, need2 = 2

**输出：** 3

**解释：**

购买 3 个类型 3 的物品，总花费为 `3 * 1 = 3`，此时类型 1 的总需求满足 3（`>= need1 = 3`），类型 2 的总需求满足 3（`>= need2 = 2`）。
 任何其他有效的购买方案都会花费更多，因此最小总花费为 3。

**示例 2：**

**输入：** cost1 = 5, cost2 = 4, costBoth = 15, need1 = 2, need2 = 3

**输出：** 22

**解释：**

购买 `need1 = 2` 个类型 1 的物品和 `need2 = 3` 个类型 2 的物品，总花费为 `2 * 5 + 3 * 4 = 10 + 12 = 22`。
 任何其他有效的购买方案都会花费更多，因此最小总花费为 22。

**示例 3：**

**输入：** cost1 = 5, cost2 = 4, costBoth = 15, need1 = 0, need2 = 0

**输出：** 0

**解释：**

由于不需要任何物品（`need1 = need2 = 0`），因此无需购买，总花费为 0。

 

**提示：**

- `1 <= cost1, cost2, costBoth <= 10^6`
- `0 <= need1, need2 <= 10^9`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> First, use `min(costBoth, cost1 + cost2)` for `min(need1, need2)`.

</details>

<details>
<summary>提示 2（點開）</summary>

> For the remaining type 1 requirement `rem1`, use cost `min(costBoth, cost1)` for the rest.

</details>

<details>
<summary>提示 3（點開）</summary>

> Do the same for type 2, using cost `min(costBoth, cost2)`.

</details>

## 標籤

- 官方分類：贪心、数学
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-cost-to-acquire-required-items 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
