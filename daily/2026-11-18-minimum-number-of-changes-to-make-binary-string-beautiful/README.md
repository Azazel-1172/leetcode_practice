# 2914. 使二进制字符串变美丽的最少修改次数

> 英文原題：Minimum Number of Changes to Make Binary String Beautiful
> 難度：中等　|　日期：2026-11-18　|　[題目連結](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/)　·　[中文站](https://leetcode.cn/problems/minimum-number-of-changes-to-make-binary-string-beautiful/)

> 翻譯來源：leetcode.cn

## 題目

给你一个长度为偶数下标从 **0** 开始的二进制字符串 `s` 。

如果可以将一个字符串分割成一个或者更多满足以下条件的子字符串，那么我们称这个字符串是 **美丽的** ：

- 每个子字符串的长度都是 **偶数** 。
- 每个子字符串都 **只** 包含 `1` 或 **只** 包含 `0` 。

你可以将 `s` 中任一字符改成 `0` 或者 `1` 。

请你返回让字符串 `s` 美丽的** 最少** 字符修改次数。

 

**示例 1：**

<pre><strong>输入：</strong>s = "1001"
<strong>输出：</strong>2
<strong>解释：</strong>我们将 s[1] 改为 1 ，且将 s[3] 改为 0 ，得到字符串 "1100" 。
字符串 "1100" 是美丽的，因为我们可以将它分割成 "11|00" 。
将字符串变美丽最少需要 2 次修改。</pre>

**示例 2：**

<pre><strong>输入：</strong>s = "10"
<strong>输出：</strong>1
<strong>解释：</strong>我们将 s[1] 改为 1 ，得到字符串 "11" 。
字符串 "11" 是美丽的，因为它已经是美丽的。
将字符串变美丽最少需要 1 次修改。</pre>

**示例 3：**

<pre><strong>输入：</strong>s = "0000"
<strong>输出：</strong>0
<strong>解释：</strong>不需要进行任何修改，字符串 "0000" 已经是美丽字符串。</pre>

 

**提示：**

- `2 <= s.length <= 10^5`
- `s` 的长度为偶数。
- `s[i]` 要么是 `'0'` ，要么是 `'1'` 。

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> For any valid partition, since each part consists of an even number of the same characters, we can further partition each part into lengths of exactly `2`.

</details>

<details>
<summary>提示 2（點開）</summary>

> After noticing the first hint, we can decompose the whole string into disjoint blocks of size `2` and find the minimum number of changes required to make those blocks beautiful.

</details>

## 標籤

- 官方分類：字符串
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-number-of-changes-to-make-binary-string-beautiful 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
