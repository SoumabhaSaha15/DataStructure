/*
 * @lc app=leetcode id=1422 lang=javascript
 *
 * [1422] Maximum Score After Splitting a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const maxScore = (s) => {
  let rightarr = [...s], leftarr = [], max = 0;
  leftarr.push(rightarr.shift());
  while (rightarr.length) {
    let count = leftarr.filter(i => i == '0').length + rightarr.filter(i => i == '1').length;
    max = (max < count) ? count : max;
    leftarr.push(rightarr.shift());
  }
  return max;
};
// @lc code=end

