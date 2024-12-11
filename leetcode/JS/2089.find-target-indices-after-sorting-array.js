/*
 * @lc app=leetcode id=2089 lang=javascript
 *
 * [2089] Find Target Indices After Sorting Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let arr = [];
  nums.sort((a, b) => (a - b)).forEach((item, index) => { if (item === target) arr.push(index); });
  return arr
};
// @lc code=end

