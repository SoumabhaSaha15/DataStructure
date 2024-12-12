/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let str = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  return (str === str.split("").reverse().join(""));
};
// @lc code=end

