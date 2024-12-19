/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums =>  nums.reduce((acc,cur)=>acc^cur,0);
// @lc code=end