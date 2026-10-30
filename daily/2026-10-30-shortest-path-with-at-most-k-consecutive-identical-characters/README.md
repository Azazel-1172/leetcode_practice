# 3970. 最多 K 个连续相同字符的最短路径

> 英文原題：Shortest Path With At Most K Consecutive Identical Characters
> 難度：中等　|　日期：2026-10-30　|　[題目連結](https://leetcode.com/problems/shortest-path-with-at-most-k-consecutive-identical-characters/)　·　[中文站](https://leetcode.cn/problems/shortest-path-with-at-most-k-consecutive-identical-characters/)

> 翻譯來源：leetcode.cn

## 題目

给你一个整数 `n`，表示一个** 有向加权** 图中的节点数量，节点编号从 0 到 `n - 1`。该图由二维数组 `edges` 表示，其中 `edges[i] = [u_i, v_i, w_i]` 表示一条从节点 `u_i` 指向节点 `v_i`、权重为 `w_i` 的有向边。

另给定一个长度为 `n` 的字符串 `labels`，其中 `labels[i]` 是分配给节点 `i` 的字符，以及一个整数 `k`。

返回一条从节点 0 到节点 `n - 1` 的路径的** 最小****总边权** ，并要求该路径上所有节点标签按顺序** 拼接** 后，最多包含 `k` 个** 连续相同** 字符。如果不存在有效路径，返回 `-1`。

 

**示例 1：**

**输入：** n = 3, edges = `[[0,1,1],[1,2,1],[0,2,3]]`, labels = "aab", k = 1

**输出：** 3

**解释：**

从节点 0 到节点 2 的最优有效路径如下：

- 使用 `edges[2] = [0, 2, 3]` 到达节点 2，边权 `w_i = 3`。

对应的标签拼接结果为 `"ab"`，满足最多有 `k = 1` 个连续相同字符。因此答案为 3。

**示例 2：**

**输入：** n = 3, edges = `[[0,1,1],[1,2,1],[0,2,3]]`, labels = "aab", k = 2

**输出：** 2

**解释：**

从节点 0 到节点 2 的最优有效路径如下：

- 使用 `edges[0] = [0, 1, 1]` 到达节点 1，边权 `w_i = 1`。
- 使用 `edges[1] = [1, 2, 1]` 到达节点 2，边权 `w_i = 1`。

对应的标签拼接结果为 `"aab"`，满足最多有 `k = 2` 个连续相同字符。因此答案为 2。

**示例 3：**

**输入：** n = 3, edges = `[[0,1,1],[1,2,1]]`, labels = "aaa", k = 2

**输出：** -1

**解释：**

不存在从节点 0 到节点 2 的有效路径，使其满足最多有 `k = 2` 个连续相同字符。因此答案为 `-1`。

 

**提示：**

- `1 <= n == labels.length <= 5 * 10^4`
- `0 <= edges.length <= 5 * 10^4`
- `edges[i] == [u_i, v_i, w_i]`
- `0 <= u_i, v_i <= n - 1`
- `u_i != v_i`
- `1 <= w_i <= 10^4`
- `labels` 由小写英文字母组成
- `1 <= k <= 50`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> The validity of a path depends not only on the current node, but also on how many consecutive times the current node’s label has appeared at the end of the path.

</details>

<details>
<summary>提示 2（點開）</summary>

> Use Dijkstra on states `(node, count)`, where `count` is the current consecutive run length of `labels[node]`.

</details>

<details>
<summary>提示 3（點開）</summary>

> When moving from node `u` to node `v`, the next count becomes `count + 1` if `labels[u] == labels[v]`, otherwise it becomes 1. Ignore transitions where the next count exceeds `k`.

</details>

<details>
<summary>提示 4（點開）</summary>

> The answer is the minimum distance among all states ending at node `n - 1`.

</details>

## 標籤

- 官方分類：图、字符串、最短路、堆（优先队列）
- 我的標籤：（解完題後用 `python3 lcdaily.py tag shortest-path-with-at-most-k-consecutive-identical-characters 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
