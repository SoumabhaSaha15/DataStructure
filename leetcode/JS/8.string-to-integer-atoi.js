/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
  let output = parseInt(s.trim());
  if (!Number.isNaN(output)) {
    if (output > 2 ** 31 - 1) return 2 ** 31 - 1;
    else if (output < -(2 ** 31)) return -(2 ** 31);
    else return output;
  } else return 0;
};
// @lc code=end