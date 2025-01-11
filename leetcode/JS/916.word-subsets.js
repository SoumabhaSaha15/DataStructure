/*
 * @lc app=leetcode id=916 lang=javascript
 *
 * [916] Word Subsets
 */

// @lc code=start
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
const wordSubsets = (words1, words2) => {
  const getMaxFrequencies = (words) => {
    const maxFreq = new Array(26).fill(0); // For 'a' to 'z'
    for (const word of words) {
      const freq = new Array(26).fill(0);
      for (const char of word) freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      for (let i = 0; i < 26; i++) maxFreq[i] = Math.max(maxFreq[i], freq[i]);
    }
    return maxFreq;
  };
  const maxFreq = getMaxFrequencies(words2);
  // Step 2: Check if each word in words1 is universal
  const isUniversal = (word) => {
    const freq = new Array(26).fill(0);
    for (const char of word) freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    for (let i = 0; i < 26; i++) if (freq[i] < maxFreq[i]) return false;
    return true;
  };
  const result = [];
  for (const word of words1) if (isUniversal(word)) result.push(word);
  return result;
}
// @lc code=end

