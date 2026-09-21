---
description: 把 LeetCode 題目資料夾裡的 README 翻成台灣繁體中文（不需要 API key）
argument-hint: "[題目 slug 或資料夾名，省略則翻最新一題]"
allowed-tools: Bash, Read, Edit, Write, Glob
---

把 LeetCode 題目翻譯成台灣工程師讀得順的繁體中文。目標題目：$1（若為空，取 `daily/` 底下日期最新、且 `meta.json` 的 `translated` 為 false 的那一題）。

## 步驟

1. 用 `ls daily/` 找到目標資料夾，讀取它的 `README.md` 與 `meta.json`。
2. 若 `meta.json` 的 `translated` 已經是 `true`，直接回報「已翻譯過」並停止，除非使用者明確要求重翻。
3. 就地改寫 `README.md`：
   - `# <編號>. <標題>` 的標題翻成中文，並保留 `> 英文原題：...` 那一行。
   - 把 `> ⚠️ 沒有取得中文翻譯，以下為英文原文。` 換成 `> 翻譯來源：Claude Code`。
   - 翻譯「## 題目」整段，以及每一則 Hint 的內文。
   - 「## 標籤」的「官方分類」翻成中文（Array→陣列、Dynamic Programming→動態規劃 DP 等）。
   - 「## 解題筆記」以下的空白模板原樣保留，不要動。
4. 更新 `meta.json`：`translated` 設為 `true`、`translateSource` 設為 `"Claude Code"`、
   `topicTags` 換成翻好的中文標籤（`topicTagsEn` 保持不動）。
5. 執行 `python3 lcdaily.py sync` 重建根目錄總覽。
6. 回報翻了哪一題，一行就好。

## 翻譯規則

- **保留不翻**：程式碼、變數與函式名稱（`nums`、`k`、`dp[i][r]`）、範例的 Input / Output 資料本身、
  數學式與運算子、複雜度表示法。行內 `code` 標記要保留。
- **可以翻**：Example / Input / Output / Explanation / Constraints / Note 這些標題字，
  以及所有敘述性的句子。
- **術語用台灣業界講法**：陣列 array、字串 string、雜湊表 hash table、堆疊 stack、佇列 queue、
  鏈結串列 linked list、二元樹 binary tree、二元搜尋樹 BST、堆積 heap、遞迴 recursion、
  回溯 backtracking、動態規劃 DP、貪婪 greedy、雙指標 two pointers、滑動視窗 sliding window、
  二分搜尋 binary search、前綴和 prefix sum、子陣列 subarray、前綴 prefix、後綴 suffix、
  時間複雜度 time complexity。第一次出現的關鍵術語可以附英文，例如「動態規劃（DP）」。
- **不要用中國大陸用語**：陣列不是数组、迴圈不是循环、最佳化不是优化、指標不是指针、字串不是字符串。
- 語意通順優先，不要逐字直譯。LeetCode 原文的粗體強調（`**non-empty**`）要保留在對應的中文詞上。
- Markdown 結構（標題層級、清單、`<details>` 摺疊區塊、程式碼圍欄）完全不動。
