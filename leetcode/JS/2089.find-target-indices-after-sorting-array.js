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
const targetIndices = (nums, target) => nums.sort((a, b) => (a - b)).map((item, index) => (item === target ? index : -1)).filter(item => item !== -1);
// @lc code=end

