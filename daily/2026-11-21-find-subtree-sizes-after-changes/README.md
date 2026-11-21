# 3331. 修改后子树的大小

> 英文原題：Find Subtree Sizes After Changes
> 難度：中等　|　日期：2026-11-21　|　[題目連結](https://leetcode.com/problems/find-subtree-sizes-after-changes/)　·　[中文站](https://leetcode.cn/problems/find-subtree-sizes-after-changes/)

> 翻譯來源：leetcode.cn

## 題目

给你一棵 `n` 个节点且根节点为编号 0 的树，节点编号为 `0` 到 `n - 1` 。这棵树用一个长度为 `n` 的数组 `parent` 表示，其中 `parent[i]` 是第 `i` 个节点的父亲节点的编号。由于节点 0 是根，`parent[0] == -1` 。

给你一个长度为 `n` 的字符串 `s` ，其中 `s[i]` 是节点 `i` 对应的字符。

对于节点编号从 `1` 到 `n - 1` 的每个节点 `x` ，我们 **同时** 执行以下操作 **一次** ：

- 找到距离节点 `x` **最近** 的祖先节点 `y` ，且 `s[x] == s[y]` 。
- 如果节点 `y` 不存在，那么不做任何修改。
- 否则，将节点 `x` 与它父亲节点之间的边 **删除** ，在 `x` 与 `y` 之间连接一条边，使 `y` 变为 `x` 新的父节点。

请你返回一个长度为 `n` 的数组 `answer` ，其中 `answer[i]` 是 **最终** 树中，节点 `i` 为根的 子树 的 **大小** 。

 

**示例 1：**

**输入：**parent = `[-1,0,0,1,1,1]`, s = "abaabc"

**输出：**`[6,3,1,1,1,1]`

**解释：**

![](https://assets.leetcode.com/uploads/2024/08/15/graphex1drawio.png)

节点 3 的父节点从节点 1 变为节点 0 。

**示例 2：**

**输入：**parent = `[-1,0,4,0,1]`, s = "abbba"

**输出：**`[5,2,1,1,1]`

**解释：**

![](https://assets.leetcode.com/uploads/2024/08/20/exgraph2drawio.png)

以下变化会同时发生：

- 节点 4 的父节点从节点 1 变为节点 0 。
- 节点 2 的父节点从节点 4 变为节点 1 。

 

**提示：**

- `n == parent.length == s.length`
- `1 <= n <= 10^5`
- 对于所有的 `i >= 1` ，都有 `0 <= parent[i] <= n - 1` 。
- `parent[0] == -1`
- `parent` 表示一棵合法的树。
- `s` 只包含小写英文字母。

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Perform a depth-first search on the tree, starting from the root.

</details>

<details>
<summary>提示 2（點開）</summary>

> During the DFS, keep track of the most recent node where each character from 'a' to 'z' has been seen.

</details>

## 標籤

- 官方分類：树、深度优先搜索、数组、哈希表、字符串
- 我的標籤：（解完題後用 `python3 lcdaily.py tag find-subtree-sizes-after-changes 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
