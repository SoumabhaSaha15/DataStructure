/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let num = n.toString(10).split("").map(i => parseInt(i)).reduce((acc, cur) => acc + cur ** 2, 0);
  do {
    num = num.toString(10).split("").map(i => parseInt(i)).reduce((acc, cur) => acc + cur ** 2, 0);
    if (num == 1) break;
  } while (num > 9);
  return num == 1;
};
// @lc code=end