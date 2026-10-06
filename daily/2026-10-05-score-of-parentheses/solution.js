/*
 * 856. 括号的分数 (Score of Parentheses)
 * https://leetcode.com/problems/score-of-parentheses/
 * 難度：中等
 */

/**
 * 解法一：stack，時間 O(n)，空間 O(n)
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    // 每一格 = 一層括號目前累積的分數；先放一格給最外層
    const stack = [0];

    for (const c of s) {
        if (c === '(') {
            // 開新的一層
            stack.push(0);
        } else {
            // 這層結束：內部是空的 "()" 得 1，否則 "(A)" 得 2 * A
            const v = stack.pop();
            // 算完交給上一層；同層兄弟用 += 累加，就是 "AB" = A + B
            stack[stack.length - 1] += Math.max(2 * v, 1);
        }
    }

    return stack[0];
};

/**
 * 解法二：depth，時間 O(n)，空間 O(1)
 * @param {string} s
 * @return {number}
 */
var scoreOfParenthesesDepth = function(s) {
    // 2 * (A + B) = 2A + 2B，把 ×2 一路分配下去，
    // 最後只剩每個 "()" 乘上 2^(外面包的層數)
    let ans = 0;
    let depth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            depth++;
        } else {
            depth--;
            // 只有緊接在 '(' 後面的 ')' 才是 "()"，此時 depth 就是外層數。
            // 其他 ')' 的 ×2 已經算進 depth 裡了，不用另外處理
            if (s[i - 1] === '(') {
                ans += 1 << depth;
            }
        }
    }

    return ans;
};
