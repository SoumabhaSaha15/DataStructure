/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = (matrix) => {
  for (var i = 0; i < matrix.length; i++) 
    for (var j = 0; j < i; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  matrix.forEach(element => { element = element.reverse(); });
};
// @lc code=end

