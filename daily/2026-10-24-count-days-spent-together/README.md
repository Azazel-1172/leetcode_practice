# 2409. 统计共同度过的日子数

> 英文原題：Count Days Spent Together
> 難度：簡單　|　日期：2026-10-24　|　[題目連結](https://leetcode.com/problems/count-days-spent-together/)　·　[中文站](https://leetcode.cn/problems/count-days-spent-together/)

> 翻譯來源：leetcode.cn

## 題目

Alice 和 Bob 计划分别去罗马开会。

给你四个字符串 `arriveAlice` ，`leaveAlice` ，`arriveBob` 和 `leaveBob` 。Alice 会在日期 `arriveAlice` 到 `leaveAlice` 之间在城市里（**日期为闭区间**），而 Bob 在日期 `arriveBob` 到 `leaveBob` 之间在城市里（**日期为闭区间**）。每个字符串都包含 5 个字符，格式为 `"MM-DD"` ，对应着一个日期的月和日。

请你返回 Alice和 Bob 同时在罗马的天数。

你可以假设所有日期都在 **同一个** 自然年，而且 **不是** 闰年。每个月份的天数分别为：`[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]` 。

 

**示例 1：**

<pre><strong>输入：</strong>arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
<strong>输出：</strong>3
<strong>解释：</strong>Alice 从 8 月 15 号到 8 月 18 号在罗马。Bob 从 8 月 16 号到 8 月 19 号在罗马，他们同时在罗马的日期为 8 月 16、17 和 18 号。所以答案为 3 。</pre>

**示例 2：**

<pre><strong>输入：</strong>arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
<strong>输出：</strong>0
<strong>解释：</strong>Alice 和 Bob 没有同时在罗马的日子，所以我们返回 0 。</pre>

 

**提示：**

- 所有日期的格式均为 `"MM-DD"` 。
- Alice 和 Bob 的到达日期都 **早于或等于** 他们的离开日期。
- 题目测试用例所给出的日期均为 **非闰年** 的有效日期。

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> For a given day, determine if Alice or Bob or both are in Rome.

</details>

<details>
<summary>提示 2（點開）</summary>

> Brute force all 365 days for both Alice and Bob.

</details>

## 標籤

- 官方分類：数学、字符串
- 我的標籤：（解完題後用 `python3 lcdaily.py tag count-days-spent-together 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
