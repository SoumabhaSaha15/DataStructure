/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;
  let charMap = {}, reverseCharMap = {}, S = '', T = '', flag = true;
  for (let i = 0; i < s.length; i++) {
    if (!charMap[s[i]] && !reverseCharMap[t[i]]) {
      charMap[s[i]] = t[i];
      reverseCharMap[t[i]] = s[i];
    } else if (charMap[s[i]] !== t[i] || reverseCharMap[t[i]] !== s[i]) {
      flag = false;
      break;
    }
  }
  return flag;
};
// @lc code=end