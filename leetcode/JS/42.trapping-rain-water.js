/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  let arr = height, leftMax = arr[0], rightMax = arr[arr.length - 1], len = arr.length, leftArr = [], rightArr = [];
  arr.forEach((item, index) => {
    leftMax = leftMax < item ? item : leftMax;
    leftArr.push(leftMax);
    rightMax = rightMax < arr[len - index - 1] ? arr[len - index - 1] : rightMax;
    rightArr.push(rightMax);
  });
  return rightArr.reverse().reduce((acc, cur, i) => (acc + Math.min(leftArr[i], cur) - arr[i]), 0);
};
// @lc code=end