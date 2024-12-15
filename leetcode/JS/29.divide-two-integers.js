/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let x = parseInt(dividend / divisor);
  if (x > ((2 ** 31) - 1)) x--;
  return x;
};
// @lc code=end

