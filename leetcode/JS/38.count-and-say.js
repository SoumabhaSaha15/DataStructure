/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  if (n === 1) return "1";
  const prev = countAndSay(n - 1);
  let result = "", count = 1;
  for (let i = 0; i < prev.length; i++) {
    if (i + 1 < prev.length && prev[i] === prev[i + 1]) count++;
    else {
      result += count + prev[i];
      count = 1;
    }
  }
  return result;
};
// @lc code=end

