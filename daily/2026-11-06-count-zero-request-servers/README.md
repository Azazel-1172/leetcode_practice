# 2747. 统计没有收到请求的服务器数目

> 英文原題：Count Zero Request Servers
> 難度：中等　|　日期：2026-11-06　|　[題目連結](https://leetcode.com/problems/count-zero-request-servers/)　·　[中文站](https://leetcode.cn/problems/count-zero-request-servers/)

> 翻譯來源：leetcode.cn

## 題目

给你一个整数 `n` ，表示服务器的总数目，再给你一个下标从 **0** 开始的 **二维** 整数数组 `logs` ，其中 `logs[i] = [server_id, time]` 表示 id 为 `server_id` 的服务器在 `time` 时收到了一个请求。

同时给你一个整数 `x` 和一个下标从 **0** 开始的整数数组 `queries`  。

请你返回一个长度等于 `queries.length` 的数组 `arr` ，其中 `arr[i]` 表示在时间区间 `[queries[i] - x, queries[i]]` 内没有收到请求的服务器数目。

注意时间区间是个闭区间。

 

**示例 1：**

<pre><strong>输入：</strong>n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]
<strong>输出：</strong>[1,2]
<strong>解释：</strong>
对于 queries[0]：id 为 1 和 2 的服务器在区间 [5, 10] 内收到了请求，所以只有服务器 3 没有收到请求。
对于 queries[1]：id 为 2 的服务器在区间 [6,11] 内收到了请求，所以 id 为 1 和 3 的服务器在这个时间段内没有收到请求。</pre>

**示例 2：**

<pre><strong>输入：</strong>n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2, queries = [3,4]
<strong>输出：</strong>[0,1]
<strong>解释：</strong>
对于 queries[0]：区间 [1, 3] 内所有服务器都收到了请求。
对于 queries[1]：只有 id 为 3 的服务器在区间 [2,4] 内没有收到请求。</pre>

 

**提示：**

- `1 <= n <= 10^5`
- `1 <= logs.length <= 10^5`
- `1 <= queries.length <= 10^5`
- `logs[i].length == 2`
- `1 <= logs[i][0] <= n`
- `1 <= logs[i][1] <= 10^6`
- `1 <= x <= 10^5`
- `x < queries[i] <= 10^6`

## 白話翻譯

（用自己的話重寫一次題目在問什麼：輸入是什麼、每一步要做什麼、答案是什麼）

## 提示 Hints （中文站未翻譯，以下為英文原文）

<details>
<summary>提示 1（點開）</summary>

> Can we use sorting and two-pointer approach here?

</details>

<details>
<summary>提示 2（點開）</summary>

> Sort the queries array and logs array based on time in increasing order.

</details>

<details>
<summary>提示 3（點開）</summary>

> For every window of size x, use sliding window and two-pointer approach to find the answer to the queries.

</details>

## 標籤

- 官方分類：数组、哈希表、排序、滑动窗口
- 我的標籤：（解完題後用 `python3 lcdaily.py tag count-zero-request-servers 遞迴 二元樹` 補上）

## 解題筆記

### 思路

（寫下你的想法）

### 複雜度

- 時間：O(?)
- 空間：O(?)

### 踩到的坑


## 面試官問答

（解完題後在 Claude Code 執行 `/lc-interview` 產生）
