/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let k = 0;
  for (const num of nums)
    if (k < 2 || nums[k - 2] !== num) {
      nums[k] = num;
      k++;
    }
  return k;
};
// @lc code=end