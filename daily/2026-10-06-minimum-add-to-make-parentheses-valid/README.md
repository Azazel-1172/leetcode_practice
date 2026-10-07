# 921. 使括号有效的最少添加

> 英文原題：Minimum Add to Make Parentheses Valid
> 難度：中等　|　日期：2026-10-06　|　[題目連結](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)　·　[中文站](https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/)

> 翻譯來源：leetcode.cn

## 題目

只有满足下面几点之一，括号字符串才是有效的：

- 它是一个空字符串，或者
- 它可以被写成 `AB` （`A` 与 `B` 连接）, 其中 `A` 和 `B` 都是有效字符串，或者
- 它可以被写作 `(A)`，其中 `A` 是有效字符串。

给定一个括号字符串 `s` ，在每一次操作中，你都可以在字符串的任何位置插入一个括号

- 例如，如果 `s = "()))"` ，你可以插入一个开始括号为 `"(()))"` 或结束括号为 `"())))"` 。

返回 *为使结果字符串 `s` 有效而必须添加的最少括号数*。

 

**示例 1：**

```

**输入：**s = "())"
**输出：**1
```

**示例 2：**

```

**输入：**s = "((("
**输出：**3
```

 

**提示：**

- `1 <= s.length <= 1000`
- `s` 只包含 `'('` 和 `')'` 字符。

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 標籤

- 官方分類：栈、贪心、字符串、Bracket Sequences
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-add-to-make-parentheses-valid 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
