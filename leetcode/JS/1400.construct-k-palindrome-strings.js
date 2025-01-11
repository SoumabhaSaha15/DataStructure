/*
 * @lc app=leetcode id=1400 lang=javascript
 *
 * [1400] Construct K Palindrome Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const canConstruct = (s, k) => {
  if (k > s.length) return false; // Not enough characters to create k palindromes
  // Count the frequency of each character
  const freq = new Array(26).fill(0);
  for (const char of s) freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  // Count the number of characters with odd frequencies
  let oddCount = 0;
  for (const count of freq) if (count % 2 !== 0) oddCount++;
  // To form k palindromes, oddCount must not exceed k
  return oddCount <= k;
};
// @lc code=end

