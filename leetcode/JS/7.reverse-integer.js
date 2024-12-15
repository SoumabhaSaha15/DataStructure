/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let limit = (2 ** 31) - 1, rev = 0;
  if (x > limit || x < -(2 ** 31)) return 0;
  for (let i = Math.abs(x); i > 0; i = Math.floor(i / 10)) rev = (rev * 10 + (i % 10));
  return (rev < limit) ? ((x > 0) ? (rev) : (-1 * rev)) : (0);
};
// @lc code=end