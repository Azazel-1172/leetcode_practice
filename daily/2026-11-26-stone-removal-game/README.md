# 3360. 移除石头游戏

> 英文原題：Stone Removal Game
> 難度：簡單　|　日期：2026-11-26　|　[題目連結](https://leetcode.com/problems/stone-removal-game/)　·　[中文站](https://leetcode.cn/problems/stone-removal-game/)

> 翻譯來源：leetcode.cn

## 題目

Alice 和 Bob 在玩一个游戏，他们俩轮流从一堆石头中移除石头，Alice 先进行操作。

- Alice 在第一次操作中移除 **恰好** 10 个石头。
- 接下来的每次操作中，每位玩家移除的石头数 **恰好** 为另一位玩家上一次操作的石头数减 1 。

第一位没法进行操作的玩家输掉这个游戏。

给你一个正整数 `n` 表示一开始石头的数目，如果 Alice 赢下这个游戏，请你返回 `true` ，否则返回 `false` 。

 

**示例 1：**

**输入：**n = 12

**输出：**true

**解释：**

- Alice 第一次操作中移除 10 个石头，剩下 2 个石头给 Bob 。
- Bob 无法移除 9 个石头，所以 Alice 赢下游戏。

**示例 2：**

**输入：**n = 1

**输出：**false

**解释：**

- Alice 无法移除 10 个石头，所以 Alice 输掉游戏。

 

**提示：**

- `1 <= n <= 50`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> The constraints are small enough that a brute-force solution is feasible.

</details>

## 標籤

- 官方分類：数学、模拟
- 我的標籤：（解完題後用 `python3 lcdaily.py tag stone-removal-game 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
