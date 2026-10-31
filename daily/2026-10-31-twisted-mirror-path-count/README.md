# 3665. 统计镜子反射路径数目

> 英文原題：Twisted Mirror Path Count
> 難度：中等　|　日期：2026-10-31　|　[題目連結](https://leetcode.com/problems/twisted-mirror-path-count/)　·　[中文站](https://leetcode.cn/problems/twisted-mirror-path-count/)

> 翻譯來源：leetcode.cn

## 題目

给你一个 `m x n` 的二进制网格 `grid`，其中：

- `grid[i][j] == 0` 表示一个空格子。
- `grid[i][j] == 1` 表示一面镜子。

一个机器人从网格的左上角 `(0, 0)` 出发，想要到达右下角 `(m - 1, n - 1)`。它只能向 **右 **或向 **下 **移动。如果机器人试图移入一个有镜子的格子，它会在进入该格子前被 **反射**：

- 如果它试图向 **右 **移动进入镜子，它会被转向 **下 **方，并移动到镜子正下方的格子里。
- 如果它试图向 **下 **移动进入镜子，它会被转向 **右 **方，并移动到镜子正右方的格子里。

如果这次反射会导致机器人移动到网格边界之外，则该路径被视为无效，不应被计数。

返回从 `(0, 0)` 到 `(m - 1, n - 1)` 不同的有效路径数量。

由于答案可能非常大，请将其返回对 `10^9 + 7` **取模 **的结果。

**注意**：如果一次反射将机器人移动到一个有镜子的格子，机器人会立即再次被反射。这次反射的方向取决于它进入该镜子的方向：如果它是向右移动进入的，它将被转向下方；如果它是向下移动进入的，它将被转向右方。

 

**示例 1:**

**输入：** grid = `[[0,1,0],[0,0,1],[1,0,0]]`

**输出：** 5

**解释：**

编号 完整路径 1 (0, 0) → (0, 1) [M] → (1, 1) → (1, 2) [M] → (2, 2) 2 (0, 0) → (0, 1) [M] → (1, 1) → (2, 1) → (2, 2) 3 (0, 0) → (1, 0) → (1, 1) → (1, 2) [M] → (2, 2) 4 (0, 0) → (1, 0) → (1, 1) → (2, 1) → (2, 2) 5 (0, 0) → (1, 0) → (2, 0) [M] → (2, 1) → (2, 2)

-

`[M]` 表示机器人试图进入一个有镜子的格子但被反射了。

**示例 2:**

**输入：** grid = `[[0,0],[0,0]]`

**输出：** 2

**解释：**

编号 完整路径 1 (0, 0) → (0, 1) → (1, 1) 2 (0, 0) → (1, 0) → (1, 1)

**示例 3:**

**输入：** grid = `[[0,1,1],[1,1,0]]`

**输出：** 1

**解释：**

编号 完整路径 1 (0, 0) → (0, 1) [M] → (1, 1) [M] → (1, 2) `(0, 0) → (1, 0) [M] → (1, 1) [M] → (2, 1)` 超出边界，因此是无效路径。

 

**提示:**

- `m == grid.length`
- `n == grid[i].length`
- `2 <= m, n <= 500`
- `grid[i][j]` 的值为 `0` 或 `1`。
- `grid[0][0] == grid[m - 1][n - 1] == 0`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Precompute, for each cell and each move (right/down), where you actually land if there’s a mirror next—store these "jump" targets in a `go[i][j][0/1]` table.

</details>

<details>
<summary>提示 2（點開）</summary>

> Let `dp[i][j]` = number of ways to reach (i,j); set `dp[0][0] = 1`, then scan cells in row‑major order and for each `dp[i][j] > 0` add `dp[i][j]` into `dp[x][y]` for both precomputed moves.

</details>

<details>
<summary>提示 3（點開）</summary>

> Always take additions modulo `10^9+7`, and skip any jump target that falls outside the grid.

</details>

## 標籤

- 官方分類：数组、动态规划、矩阵
- 我的標籤：（解完題後用 `python3 lcdaily.py tag twisted-mirror-path-count 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
