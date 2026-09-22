/*
 * 3525. 求出数组的 X 值 II (Find X Value of Array II)
 * https://leetcode.com/problems/find-x-value-of-array-ii/
 * 難度：困難
 */

class Solution {
    int n, k;
    // 線段樹每個節點存兩樣東西，攤平成兩條陣列（不建物件，省掉配置成本）：
    //   prod[i]      = 這段全部乘起來 % k
    //   cnt[i*k + r] = 這段有幾個「前綴」的乘積 % k == r
    // cnt 才是答案本身；prod 純粹是為了能合併才存的。
    vector<int> prod, cnt;

    // 合併：t[i] = merge(左小孩, 右小孩)
    // 整段的前綴分兩群：
    //   只落在左段的  → 就是左段自己的前綴，原樣照抄
    //   跨進右段的    → 前面掛著整個左段，餘數要先乘上 lp 才是真的
    void pull(int i) {
        int L = 2 * i, R = 2 * i + 1;
        int lp = prod[L];
        int bi = i * k, bl = L * k, br = R * k;

        for (int r = 0; r < k; ++r) cnt[bi + r] = cnt[bl + r];
        // 不同的 r 可能被 lp 乘到同一格（例如 lp == 0 時全部塞進第 0 格），
        // 所以一定要 +=，寫成 = 會被後面的覆蓋掉
        for (int r = 0; r < k; ++r) cnt[bi + (lp * r) % k] += cnt[br + r];

        prod[i] = lp * prod[R] % k;
    }

    // 葉節點：這段只有一個元素，唯一的前綴就是它自己。
    // v 可到 1e9，但先取餘後 lp * r 最大只到 (k-1)^2 = 16，不會溢位 int
    void setLeaf(int i, int v) {
        int m = v % k;
        fill(cnt.begin() + i * k, cnt.begin() + i * k + k, 0);
        cnt[i * k + m] = 1;
        prod[i] = m;
    }

    // 節點 i 負責 [lo, hi]，小孩是 2i 與 2i+1。
    // 範圍不存在節點裡，是遞迴時當參數往下傳的。
    void build(int i, int lo, int hi, vector<int>& a) {
        if (lo == hi) { setLeaf(i, a[lo]); return; }
        int m = (lo + hi) / 2;
        build(2 * i, lo, m, a);
        build(2 * i + 1, m + 1, hi, a);
        pull(i);   // 後序：小孩都蓋好了才輪到自己
    }

    // 單點修改：只往目標那一邊走，回程把路上的節點重算。
    // 沒走到的子樹整個不動 —— 那段本來就沒變，值仍然正確。
    void update(int i, int lo, int hi, int pos, int val) {
        if (lo == hi) { setLeaf(i, val); return; }
        int m = (lo + hi) / 2;
        if (pos <= m) update(2 * i, lo, m, pos, val);
        else          update(2 * i + 1, m + 1, hi, pos, val);
        pull(i);
    }

    // 查詢用的累加器，代表「目前已經拼好的那一段」
    int accProd;
    vector<int> acc, tmp;

    // acc = merge(acc, t[i])。因為遞迴保證由左往右拜訪，acc 永遠是左運算元。
    // merge 不可交換（公式裡只用了左邊的 prod），順序反了會默默算錯。
    void absorb(int i) {
        fill(tmp.begin(), tmp.end(), 0);
        int bi = i * k;
        for (int r = 0; r < k; ++r) tmp[accProd * r % k] += cnt[bi + r];
        for (int r = 0; r < k; ++r) acc[r] += tmp[r];
        accProd = accProd * prod[i] % k;
    }

    void query(int i, int lo, int hi, int l, int r) {
        if (r < lo || hi < l) return;                      // 完全不相交，沒東西可給
        if (l <= lo && hi <= r) { absorb(i); return; }     // 整段被包住，直接吃掉不再往下
        int m = (lo + hi) / 2;
        query(2 * i, lo, m, l, r);                         // 左邊一定要先拜訪
        query(2 * i + 1, m + 1, hi, l, r);
    }

public:
    vector<int> resultArray(vector<int>& nums, int k_, vector<vector<int>>& queries) {
        n = nums.size();
        k = k_;
        // 開 4n 是因為 n 不是 2 的次方時樹會長歪，2n 可能不夠
        prod.assign(4 * n, 0);
        cnt.assign(4 * n * k, 0);
        acc.assign(k, 0);
        tmp.assign(k, 0);
        build(1, 0, n - 1, nums);

        vector<int> res;
        res.reserve(queries.size());
        for (auto& q : queries) {
            int index = q[0], value = q[1], start = q[2], x = q[3];
            update(1, 0, n - 1, index, value);   // 這個修改是永久的，會留到後面的查詢
            // 初值是空段：prod = 1、cnt 全 0，跟任何段合併都等於那段本身。
            // 寫 1 % k 是為了 k == 1 的情況（餘數只能是 0，不能留 1）
            accProd = 1 % k;
            fill(acc.begin(), acc.end(), 0);
            query(1, 0, n - 1, start, n - 1);    // 移除前綴只影響當筆，就是查 [start, n-1]
            res.push_back(acc[x]);
        }
        return res;
    }
};
