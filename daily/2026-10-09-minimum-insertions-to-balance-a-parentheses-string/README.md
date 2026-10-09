# 1541. 平衡括号字符串的最少插入次数

> 英文原題：Minimum Insertions to Balance a Parentheses String
> 難度：中等　|　日期：2026-10-09　|　[題目連結](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/)　·　[中文站](https://leetcode.cn/problems/minimum-insertions-to-balance-a-parentheses-string/)

> 翻譯來源：leetcode.cn

## 題目

给你一个括号字符串 `s` ，它只包含字符 `'('` 和 `')'` 。一个括号字符串被称为平衡的当它满足：

- 任何左括号 `'('` 必须对应两个连续的右括号 `'))'` 。
- 左括号 `'('` 必须在对应的连续两个右括号 `'))'` 之前。

比方说 `"())"`， `"())(())))"` 和 `"(())())))"` 都是平衡的， `")()"`， `"()))"` 和 `"(()))"` 都是不平衡的。

你可以在任意位置插入字符 '(' 和 ')' 使字符串平衡。

请你返回让 `s` 平衡的最少插入次数。

 

**示例 1：**

<pre><strong>输入：</strong>s = "(()))"
<strong>输出：</strong>1
<strong>解释：</strong>第二个左括号有与之匹配的两个右括号，但是第一个左括号只有一个右括号。我们需要在字符串结尾额外增加一个 ')' 使字符串变成平衡字符串 "(())))" 。</pre>

**示例 2：**

<pre><strong>输入：</strong>s = "())"
<strong>输出：</strong>0
<strong>解释：</strong>字符串已经平衡了。</pre>

**示例 3：**

<pre><strong>输入：</strong>s = "))())("
<strong>输出：</strong>3
<strong>解释：</strong>添加 '(' 去匹配最开头的 '))' ，然后添加 '))' 去匹配最后一个 '(' 。</pre>

**示例 4：**

<pre><strong>输入：</strong>s = "(((((("
<strong>输出：</strong>12
<strong>解释：</strong>添加 12 个 ')' 得到平衡字符串。</pre>

**示例 5：**

<pre><strong>输入：</strong>s = ")))))))"
<strong>输出：</strong>5
<strong>解释：</strong>在字符串开头添加 4 个 '(' 并在结尾添加 1 个 ')' ，字符串变成平衡字符串 "(((())))))))" 。</pre>

 

**提示：**

- `1 <= s.length <= 10^5`
- `s` 只包含 `'('` 和 `')'` 。

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Use a stack to keep opening brackets. If you face single closing ')' add 1 to the answer and consider it as '))'.

</details>

<details>
<summary>提示 2（點開）</summary>

> If you have '))' with empty stack, add 1 to the answer, If after finishing you have x opening remaining in the stack, add 2x to the answer.

</details>

## 標籤

- 官方分類：栈、贪心、字符串、Bracket Sequences
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-insertions-to-balance-a-parentheses-string 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
