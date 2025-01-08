/*
 * @lc app=leetcode id=3042 lang=javascript
 *
 * [3042] Count Prefix and Suffix Pairs I
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
const countPrefixSuffixPairs = (words) => {
  let count = 0;  
  for (let i = 0; i < words.length; i++)
    for (let j = i+0; j < words.length; j++)
      if (i !== j && words[j].startsWith(words[i]) && words[j].endsWith(words[i])) count++;
  return count;
};
// @lc code=end

