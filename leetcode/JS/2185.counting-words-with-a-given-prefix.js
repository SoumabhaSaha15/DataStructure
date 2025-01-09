/*
 * @lc app=leetcode id=2185 lang=javascript
 *
 * [2185] Counting Words With a Given Prefix
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = (words, pref) => words.filter(word => word.startsWith(pref)).length;
// @lc code=end

