/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const str = x.toString();
  return (str.split("").reverse().join("")===str);
};
// @lc code=end

