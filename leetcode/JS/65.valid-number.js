/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const infinityArray = ["-Infinity", "Infinity", "+Infinity"];
var isNumber = function (s) {
  var parsed = parseFloat(s);
  return !(infinityArray.includes(s) || parsed != s || Number.isNaN(parsed));
};
// @lc code=end

