/*
 * 3524. 求陣列的 X 值 I (Find X Value of Array I)
 * https://leetcode.com/problems/find-x-value-of-array-i/
 * 難度：中等
 */

class Solution {
public:
    vector<long long> resultArray(vector<int>& nums, int k) {
        // ans[r] = 乘積 % k == r 的子陣列總數。
        // 子陣列最多有 n(n+1)/2 ≈ 5e9 個，超過 int 上限，必須用 long long
        vector<long long> ans(k, 0);
        // cur[r] = 「以目前這一格結尾」且乘積 % k == r 的子陣列數，每輪都會整個換掉
        vector<long long> cur(k, 0);

        for (int n : nums) {
            // 先取餘數，r * v 最大只到 (k-1)^2 = 16。
            // 若寫成 r * n，n 可到 1e9，乘起來會溢位 int
            int v = n % k;
            vector<long long> next(k, 0);

            // 以上一格結尾的子陣列，各自在後面接上 nums[i]，
            // 餘數從 r 變成 (r * v) % k。不同的 r 可能撞到同一格，所以要累加
            for (int r = 0; r < k; ++r) {
                next[(r * v) % k] += cur[r];
            }
            // 再補上「只有 nums[i] 自己」這個長度 1 的子陣列
            next[v] += 1;

            cur = next;
            // cur 下一輪就會被覆蓋，先把這一格的成果併進總帳
            for (int r = 0; r < k; ++r) ans[r] += cur[r];
        }

        return ans;
    }
};
