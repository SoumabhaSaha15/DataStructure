/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const unique = [...new Set(nums)];
  nums.length = unique.length;
  for (let index = 0; index < unique.length; index++) nums[index] = unique[index];
};
// @lc code=end

