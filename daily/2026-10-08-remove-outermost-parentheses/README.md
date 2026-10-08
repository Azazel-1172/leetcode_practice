# 1021. 删除最外层的括号

> 英文原題：Remove Outermost Parentheses
> 難度：簡單　|　日期：2026-10-08　|　[題目連結](https://leetcode.com/problems/remove-outermost-parentheses/)　·　[中文站](https://leetcode.cn/problems/remove-outermost-parentheses/)

> 翻譯來源：leetcode.cn

## 題目

有效括号字符串为空 `""`、`"(" + A + ")"` 或 `A + B` ，其中 `A` 和 `B` 都是有效的括号字符串，`+` 代表字符串的连接。

- 例如，`""`，`"()"`，`"(())()"` 和 `"(()(()))"` 都是有效的括号字符串。

如果有效字符串 `s` 非空，且不存在将其拆分为 `s = A + B` 的方法，我们称其为**原语（primitive）**，其中 `A` 和 `B` 都是非空有效括号字符串。

给出一个非空有效字符串 `s`，考虑将其进行原语化分解，使得：`s = P_1 + P_2 + ... + P_k`，其中 `P_i` 是有效括号字符串原语。

对 `s` 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 `s` 。

 

**示例 1：**

<pre><strong>输入：</strong>s = "(()())(())"
<strong>输出：</strong>"()()()"
<strong>解释：
</strong>输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。</pre>

**示例 2：**

<pre><strong>输入：</strong>s = "(()())(())(()(()))"
<strong>输出：</strong>"()()()()(())"
<strong>解释：</strong>
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。</pre>

**示例 3：**

<pre><strong>输入：</strong>s = "()()"
<strong>输出：</strong>""
<strong>解释：</strong>
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。</pre>

 

**提示：**

- `1 <= s.length <= 10^5`
- `s[i]` 为 `'('` 或 `')'`
- `s` 是一个有效括号字符串

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Can you find the primitive decomposition? The number of ( and ) characters must be equal.

</details>

## 標籤

- 官方分類：栈、字符串、Bracket Sequences
- 我的標籤：（解完題後用 `python3 lcdaily.py tag remove-outermost-parentheses 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
