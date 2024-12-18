/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (s.length < 2) return s;
  let start = 0, maxLength = 0;
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // Length of the palindrome
  }
  for (let i = 0; i < s.length; i++) {
    // Odd-length palindrome
    const len1 = expandAroundCenter(i, i);
    // Even-length palindrome
    const len2 = expandAroundCenter(i, i + 1);
    const len = Math.max(len1, len2);
    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return s.substring(start, start + maxLength);
};
// @lc code=end