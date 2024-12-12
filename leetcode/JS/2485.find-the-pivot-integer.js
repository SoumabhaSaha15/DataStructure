/*
 * @lc app=leetcode id=2485 lang=javascript
 *
 * [2485] Find the Pivot Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const pivotInteger = (n) => {
  let leftSide = (n * (n + 1) / 2), rightSide = n, pivot = -1;
  while (n) {
    if (leftSide == rightSide) {
      pivot = n;
      break;
    } else {
      n--;
      rightSide += n;
      leftSide -= (n + 1);
    }
  }
  return pivot;
};
// @lc code=end

