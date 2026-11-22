# 2124. 检查是否所有 A 都在 B 之前

> 英文原題：Check if All A's Appears Before All B's
> 難度：簡單　|　日期：2026-11-22　|　[題目連結](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/)　·　[中文站](https://leetcode.cn/problems/check-if-all-as-appears-before-all-bs/)

> 翻譯來源：leetcode.cn

## 題目

给你一个 **仅** 由字符 `'a'` 和 `'b'` 组成的字符串  `s` 。如果字符串中 **每个** * *`'a'` 都出现在 **每个*** *`'b'`* *之前，返回 `true` ；否则，返回 `false` 。

 

**示例 1：**

<pre><strong>输入：</strong>s = "aaabbb"
<strong>输出：</strong>true
<strong>解释：</strong>
'a' 位于下标 0、1 和 2 ；而 'b' 位于下标 3、4 和 5 。
因此，每个 'a' 都出现在每个 'b' 之前，所以返回 true 。</pre>

**示例 2：**

<pre><strong>输入：</strong>s = "abab"
<strong>输出：</strong>false
<strong>解释：</strong>
存在一个 'a' 位于下标 2 ，而一个 'b' 位于下标 1 。
因此，不能满足每个 'a' 都出现在每个 'b' 之前，所以返回 false 。</pre>

**示例 3：**

<pre><strong>输入：</strong>s = "bbb"
<strong>输出：</strong>true
<strong>解释：</strong>
不存在 'a' ，因此可以视作每个 'a' 都出现在每个 'b' 之前，所以返回 true 。</pre>

 

**提示：**

- `1 <= s.length <= 100`
- `s[i]` 为 `'a'` 或 `'b'`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> You can check the opposite: check if there is a ‘b’ before an ‘a’. Then, negate and return that answer.

</details>

<details>
<summary>提示 2（點開）</summary>

> s should not have any occurrences of “ba” as a substring.

</details>

## 標籤

- 官方分類：字符串
- 我的標籤：（解完題後用 `python3 lcdaily.py tag check-if-all-as-appears-before-all-bs 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
