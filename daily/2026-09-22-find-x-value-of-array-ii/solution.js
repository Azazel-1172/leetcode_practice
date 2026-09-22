/*
 * 3525. 求出数组的 X 值 II (Find X Value of Array II)
 * https://leetcode.com/problems/find-x-value-of-array-ii/
 * 難度：困難
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function (nums, k, queries) {
    const n = nums.length;

    // 線段樹每個節點存兩樣東西，攤平成兩條陣列（不建物件，省掉配置成本）：
    //   prod[i]        = 這段全部乘起來 % k
    //   cnt[i*k + r]   = 這段有幾個「前綴」的乘積 % k === r
    // cnt 才是答案本身；prod 純粹是為了能合併才存的。
    // 開 4n 是因為 n 不是 2 的次方時樹會長歪，2n 可能不夠。
    const prod = new Int32Array(4 * n);
    const cnt = new Int32Array(4 * n * k);

    // 合併：t[i] = merge(左小孩, 右小孩)
    // 整段的前綴分兩群：
    //   只落在左段的  → 就是左段自己的前綴，原樣照抄
    //   跨進右段的    → 前面掛著整個左段，餘數要先乘上 lp 才是真的
    const pull = (i) => {
        const L = 2 * i, R = 2 * i + 1;
        const lp = prod[L];
        const bi = i * k, bl = L * k, br = R * k;

        for (let r = 0; r < k; r++) cnt[bi + r] = cnt[bl + r];
        // 不同的 r 可能被 lp 乘到同一格（例如 lp === 0 時全部塞進第 0 格），
        // 所以一定要 +=，寫成 = 會被後面的覆蓋掉
        for (let r = 0; r < k; r++) cnt[bi + (lp * r) % k] += cnt[br + r];

        prod[i] = (lp * prod[R]) % k;
    };

    // 葉節點：這段只有一個元素，唯一的前綴就是它自己
    const setLeaf = (i, v) => {
        const m = v % k;
        cnt.fill(0, i * k, i * k + k);
        cnt[i * k + m] = 1;
        prod[i] = m;
    };

    // 節點 i 負責 [lo, hi]，小孩是 2i 與 2i+1。
    // 範圍不存在節點裡，是遞迴時當參數往下傳的。
    const build = (i, lo, hi) => {
        if (lo === hi) { setLeaf(i, nums[lo]); return; }
        const m = (lo + hi) >> 1;
        build(2 * i, lo, m);
        build(2 * i + 1, m + 1, hi);
        pull(i);   // 後序：小孩都蓋好了才輪到自己
    };

    // 單點修改：只往目標那一邊走，回程把路上的節點重算。
    // 沒走到的子樹整個不動 —— 那段本來就沒變，值仍然正確。
    const update = (i, lo, hi, pos, val) => {
        if (lo === hi) { setLeaf(i, val); return; }
        const m = (lo + hi) >> 1;
        if (pos <= m) update(2 * i, lo, m, pos, val);
        else update(2 * i + 1, m + 1, hi, pos, val);
        pull(i);
    };

    // 查詢用的累加器，代表「目前已經拼好的那一段」。
    // 初值是空段：prod = 1、cnt 全 0，跟任何段合併都等於那段本身。
    // 寫 1 % k 是為了 k === 1 的情況（餘數只能是 0，不能留 1）。
    let accProd = 1 % k;
    const acc = new Int32Array(k);
    const tmp = new Int32Array(k);

    // acc = merge(acc, t[i])。因為遞迴保證由左往右拜訪，acc 永遠是左運算元。
    // merge 不可交換（公式裡只用了左邊的 prod），順序反了會默默算錯。
    const absorb = (i) => {
        tmp.fill(0);
        const bi = i * k;
        for (let r = 0; r < k; r++) tmp[(accProd * r) % k] += cnt[bi + r];
        for (let r = 0; r < k; r++) acc[r] += tmp[r];
        accProd = (accProd * prod[i]) % k;
    };

    const query = (i, lo, hi, l, r) => {
        if (r < lo || hi < l) return;            // 完全不相交，沒東西可給
        if (l <= lo && hi <= r) { absorb(i); return; }  // 整段被包住，直接吃掉不再往下
        const m = (lo + hi) >> 1;
        query(2 * i, lo, m, l, r);               // 左邊一定要先拜訪
        query(2 * i + 1, m + 1, hi, l, r);
    };

    build(1, 0, n - 1);

    const res = [];
    for (const [index, value, start, x] of queries) {
        update(1, 0, n - 1, index, value);   // 這個修改是永久的，會留到後面的查詢
        accProd = 1 % k;
        acc.fill(0);
        query(1, 0, n - 1, start, n - 1);    // 移除前綴只影響當筆，就是查 [start, n-1]
        res.push(acc[x]);
    }
    return res;
};
