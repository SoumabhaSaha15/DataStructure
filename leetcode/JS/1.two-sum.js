/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let indexArray = [], flag = false;
  for (let i = 0; i < (nums.length - 1); i++) {
    for (let j = i + 1; j < nums.length; j++)
      if (target == nums[i] + nums[j]) {
        indexArray = [i, j];
        flag = true;
        break;
      }
    if (flag) break;
  }
  return indexArray;
};
// @lc code=end

