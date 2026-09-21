/*
 * 3524. 求陣列的 X 值 I (Find X Value of Array I)
 * https://leetcode.com/problems/find-x-value-of-array-i/
 * 難度：中等
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {
    // ans[r] = 乘積 % k === r 的子陣列總數
    const ans = new Array(k).fill(0);
    // cur[r] = 「以目前這一格結尾」且乘積 % k === r 的子陣列數，每輪都會整個換掉
    let cur = new Array(k).fill(0);

    for (const n of nums) {
        // 先取餘數，r * v 最大只到 (k-1)^2 = 16，不會溢位
        const v = n % k;
        const next = new Array(k).fill(0);

        // 以上一格結尾的子陣列，各自在後面接上 nums[i]，
        // 餘數從 r 變成 (r * v) % k。不同的 r 可能撞到同一格，所以要累加
        for (let r = 0; r < k; r++) {
            next[(r * v) % k] += cur[r];
        }
        // 再補上「只有 nums[i] 自己」這個長度 1 的子陣列
        next[v] += 1;

        cur = next;
        // cur 下一輪就會被覆蓋，先把這一格的成果併進總帳
        for (let r = 0; r < k; r++) ans[r] += cur[r];
    }

    return ans;
};
