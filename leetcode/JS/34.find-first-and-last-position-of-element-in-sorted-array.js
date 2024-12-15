/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const notFound = [-1, -1];
const searchRange = (nums, target) =>  nums.includes(target) ? [nums.indexOf(target), nums.lastIndexOf(target)] : notFound;
// @lc code=end

