/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => nums.includes(target) ? nums.indexOf(target) : (() => { nums.push(target); return nums.sort((a,b)=>(a-b)).indexOf(target); })();
// @lc code=end

