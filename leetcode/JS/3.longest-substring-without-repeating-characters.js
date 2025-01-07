/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let maxLength = 0, start = 0, seen = new Map();
  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (seen.has(char) && seen.get(char) >= start) start = seen.get(char) + 1;
    seen.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};
// @lc code=end

