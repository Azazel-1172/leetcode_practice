# 3863. 将一个字符串排序的最小操作次数

> 英文原題：Minimum Operations to Sort a String
> 難度：中等　|　日期：2026-10-21　|　[題目連結](https://leetcode.com/problems/minimum-operations-to-sort-a-string/)　·　[中文站](https://leetcode.cn/problems/minimum-operations-to-sort-a-string/)

> 翻譯來源：leetcode.cn

## 題目

给你一个由小写英文字母组成的字符串 `s`。

在一次操作中，你可以选择 `s` 的任意 **子字符串**（但 **不能** 是整个字符串），并将其按 **非降序字母顺序** 进行 **排序**。

返回使 `s` 按 **非降序** 排列所需的 **最小** 操作次数。如果无法做到，则返回 -1。

 

**示例 1：**

**输入：** s = "dog"

**输出：** 1

**解释：**

- 将子字符串 `"og"` 排序为 `"go"`。
- 现在，`s = "dgo"`，已按升序排列。因此，答案是 1。

**示例 2：**

**输入：** s = "card"

**输出：** 2

**解释：**

- 将子字符串 `"car"` 排序为 `"acr"`，得到 `s = "acrd"`。
- 将子字符串 `"rd"` 排序为 `"dr"`，得到 `s = "acdr"`，已按升序排列。因此，答案是 2。

**示例 3：**

**输入：** s = "gf"

**输出：** -1

**解释：**

- 在给定提示下，无法对 `s` 进行排序。因此，答案是 -1。

 

**提示：**

- `1 <= s.length <= 10^5`
- `s` 仅由小写英文字母组成。

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> If `s` is already sorted, answer is `0`.

</details>

<details>
<summary>提示 2（點開）</summary>

> Let `mn` be the minimum char and `mx` be the maximum char; if `mn` appears at the beginning (not whole string) or `mx` appears at the end (not whole string), answer is `1`.

</details>

<details>
<summary>提示 3（點開）</summary>

> If `s` cannot be transformed into a sorted string, return `-1`.

</details>

<details>
<summary>提示 4（點開）</summary>

> If no `mn` exists in any proper prefix and no `mx` exists in any proper suffix, answer is `3`; otherwise answer is `2`

</details>

## 標籤

- 官方分類：字符串
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-operations-to-sort-a-string 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
