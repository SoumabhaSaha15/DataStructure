/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1; right = nums.length - 1;
    while (left < right) {
      let localSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(localSum - target) < Math.abs(closest - target)) closest = localSum;
      if (localSum > target) right--;
      else left++;
    }
  }
  return closest;
};
// @lc code=end

