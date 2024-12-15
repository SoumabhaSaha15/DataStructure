/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  return nums.length;
};
// @lc code=end