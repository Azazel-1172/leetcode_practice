/*
 * 1658. 将 x 减到 0 的最小操作数 (Minimum Operations to Reduce X to Zero)
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * 難度：中等
 */

function minOperations(nums: number[], x: number): number {
    const n = nums.length;

    // 反過來想：拿走的是前綴 + 後綴，留下的是中間一段連續子陣列。
    // 成功時拿走的總和剛好是 x，所以留下那段的總和一定是 sum - x。
    let total = 0;
    for (const v of nums) total += v;
    const target = total - x;

    // 全部拿光也扣不完 x
    if (target < 0) return -1;

    // 找總和 === target 的最長窗口；-1 代表還沒找到任何一段
    let maxLen = -1;
    let windowSum = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        windowSum += nums[right];

        // 全是正數：丟掉左邊一定讓總和變小，所以超過就一直收縮。
        // target >= 0，windowSum > target 時窗口一定非空，left 不會跑過 right + 1
        while (windowSum > target) {
            windowSum -= nums[left];
            left++;
        }

        // 找到也不停，後面可能有更長的。
        // target === 0 時窗口會縮成空的（left === right + 1），長度自然是 0
        if (windowSum === target) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    // 留下越長，拿走越少
    return maxLen === -1 ? -1 : n - maxLen;
};
