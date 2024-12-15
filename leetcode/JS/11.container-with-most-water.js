/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (arr) => {
  let max = 0, test, i = 0, j = arr.length - 1;
  while (j > i) {
    test = arr[i];
    if (test > arr[j]) test = arr[j];
    test = (j - i) * test;
    if (max < test) max = test;
    if (arr[i] < arr[j]) i++;
    else j--;
  }
  return max;
};
// @lc code=end