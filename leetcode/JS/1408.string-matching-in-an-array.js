/*
 * @lc app=leetcode id=1408 lang=javascript
 *
 * [1408] String Matching in an Array
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = (words) => {
  const result = [];
  for (let i = 0; i < words.length; i++)
    for (let j = 0; j < words.length; j++)
      if (i !== j && words[j].includes(words[i])) {
        result.push(words[i]);
        break;
      }
  return result;
};
// @lc code=end

