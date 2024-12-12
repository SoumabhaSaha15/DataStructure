/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let prev1 = 1, prev2 = 1;
  for (let i = 2; i <= n; i++) {
    let curr = prev1 + prev2;
    [prev2, prev1] = [prev1, curr];
  }
  return prev1;
};
// @lc code=end

