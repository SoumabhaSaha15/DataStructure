/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let sum = 0;
  triangle.forEach((item) => { sum += item.sort((a, b) => a - b).shift(); });
  return sum;
};
// @lc code=end