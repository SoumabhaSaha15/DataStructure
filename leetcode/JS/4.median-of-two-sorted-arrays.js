/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  nums1 = nums1.concat(nums2).sort((x, y) => (x - y));
  return (nums1.length % 2 == 0) ? (nums1[nums1.length / 2] + nums1[(nums1.length / 2 - 1)]) / 2 : (nums1[Math.floor(nums1.length / 2)]);
};
// @lc code=end