/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1
    .filter((_, i) => i < m)
    .concat(nums2.filter((_, i) => i < n))
    .sort((a, b) => (a - b))
    .forEach((_, i, arr) => { nums1[i] = arr[i]; });
};
// @lc code=end

