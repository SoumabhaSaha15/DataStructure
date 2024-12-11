/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if(strs.length == 1) return strs[0];
  let arr = strs.sort((x, y) => (x.length - y.length));
  let word = arr.shift();
  let finalPrefix = '';
  for (let prefix = word; prefix.length > 0; prefix = prefix.slice(0, -1))
    if (arr.every(item => item.startsWith(prefix))) {
      finalPrefix = prefix;
      break;
    }
  return finalPrefix;

};
// @lc code=end

