# 2911. 得到 K 个半回文串的最少修改次数

> 英文原題：Minimum Changes to Make K Semi-palindromes
> 難度：困難　|　日期：2026-11-17　|　[題目連結](https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/)　·　[中文站](https://leetcode.cn/problems/minimum-changes-to-make-k-semi-palindromes/)

> 翻譯來源：leetcode.cn

## 題目

给你一个字符串 `s` 和一个整数 `k`，请将 `s` 划分为 `k` 个 **非空子串** ，使得将每个子串变为 **半回文串** 所需的字符修改次数之和最小。

返回所需的*** 最少** 字符修改次数*。

**半回文串 **是一类特殊的字符串：它可以按照某种重复模式拆分后，使每一组都成为 **回文串** 。判断一个字符串是否为半回文串的方法如下：

1. 选择该字符串长度的一个正因数 `d`。其中，`d` 的取值范围是从 `1` 到严格小于字符串长度的所有正因数。对于长度为 `1` 的字符串，根据这一定义，它不存在合法的因数，因为唯一的因数就是其长度本身，而这是不允许的。
2. 对于给定的因数 `d`，将字符串按长度为 `d` 的重复模式分组。具体来说，第 1 组由位置 `1`、`1 + d`、`1 + 2d`、…… 上的字符组成；第 2 组由位置 `2`、`2 + d`、`2 + 2d`、…… 上的字符组成；以此类推。
3. 如果这些分组中的每一组都是回文串，则该字符串被视为半回文串。

以字符串 `"abcabc"` 为例：

- `"abcabc"` 的长度为 `6`。合法的因数有 `1`、`2` 和 `3`。
- 当 `d = 1` 时：整个字符串 `"abcabc"` 构成一组。它不是回文串。
- 当 `d = 2` 时：

  - 第 1 组（位置 `1, 3, 5`）：`"acb"`
  - 第 2 组（位置 `2, 4, 6`）：`"bac"`
  - 这两组都不是回文串。

- 当 `d = 3` 时：

  - 第 1 组（位置 `1, 4`）：`"aa"`
  - 第 2 组（位置 `2, 5`）：`"bb"`
  - 第 3 组（位置 `3, 6`）：`"cc"`
  - 所有分组都是回文串。因此，`"abcabc"` 是一个半回文串。

 

**示例 1：**

**输入：**  s = "abcac", k = 2

**输出：**  1

**解释：** 将 `s` 划分为 `"ab"` 和 `"cac"`。`"cac"` 本身已经是半回文串。将 `"ab"` 改为 `"aa"` 后，它在 `d = 1` 时成为半回文串。

**示例 2：**

**输入：**  s = "abcdef", k = 2

**输出：**  2

**解释：** 将其划分为子串 `"abc"` 和 `"def"`。这两个子串各自都需要修改 1 个字符才能变成半回文串。

**示例 3：**

**输入：**  s = "aabbaa", k = 3

**输出：**  0

**解释：** 将其划分为子串 `"aa"`、`"bb"` 和 `"aa"`。它们都已经是半回文串。

 

**提示：**

- `2 <= s.length <= 200`
- `1 <= k <= s.length / 2`
- `s` 仅由小写英文字母组成。

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Define `dp[i][j]` as the minimum count of letter changes needed to split the suffix of string `s` starting from `s[i]` into `j` valid parts.

</details>

<details>
<summary>提示 2（點開）</summary>

> We have `dp[i][j] = min(dp[x + 1][j - 1] + v[i][x])`. Here `v[i][x]` is the minimum number of letter changes to change substring `s[i..x]` into semi-palindrome.

</details>

<details>
<summary>提示 3（點開）</summary>

> `v[i][j]` can be calculated separately by **brute-force**. We can create a table of `v[i][j]` independently to improve the complexity. Also note that semi-palindrome’s length is at least `2`.

</details>

## 標籤

- 官方分類：双指针、字符串、动态规划
- 我的標籤：（解完題後用 `python3 lcdaily.py tag minimum-changes-to-make-k-semi-palindromes 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
