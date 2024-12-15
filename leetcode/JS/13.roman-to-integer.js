/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const [current,next] = [romanMap[s[i]],romanMap[s[i + 1]]];
    total += (next && current < next) ? (-current) : (current);
  }
  return total;
};
// @lc code=end

