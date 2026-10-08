/*
 * 856. 括号的分数 (Score of Parentheses)
 * https://leetcode.com/problems/score-of-parentheses/
 * 難度：中等
 */

class Solution {
public:
    // 解法一：stack，時間 O(n)，空間 O(n)
    int scoreOfParentheses(string s) {
        // 每一格 = 一層括號目前累積的分數；先放一格給最外層
        vector<int> st = {0};

        for (char c : s) {
            if (c == '(') {
                // 開新的一層
                st.push_back(0);
            } else {
                // 這層結束：內部是空的 "()" 得 1，否則 "(A)" 得 2 * A
                int v = st.back();
                st.pop_back();
                // 算完交給上一層；同層兄弟用 += 累加，就是 "AB" = A + B
                st.back() += max(2 * v, 1);
            }
        }

        return st[0];
    }

    // 解法二：depth，時間 O(n)，空間 O(1)
    int scoreOfParenthesesDepth(string s) {
        // 2 * (A + B) = 2A + 2B，把 ×2 一路分配下去，
        // 最後只剩每個 "()" 乘上 2^(外面包的層數)
        int ans = 0;
        int depth = 0;

        for (int i = 0; i < (int)s.size(); i++) {
            if (s[i] == '(') {
                depth++;
            } else {
                depth--;
                // 只有緊接在 '(' 後面的 ')' 才是 "()"，此時 depth 就是外層數。
                // 其他 ')' 的 ×2 已經算進 depth 裡了，不用另外處理
                if (s[i - 1] == '(') {
                    ans += 1 << depth;
                }
            }
        }

        return ans;
    }
};
