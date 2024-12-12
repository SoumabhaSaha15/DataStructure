/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let result = "", carry = 0, i = a.length - 1, j = b.length - 1;
  for (; (i >= 0 || j >= 0 || carry > 0); i--, j--) {
    let bitA = i >= 0 ? parseInt(a[i]) : 0;
    let bitB = j >= 0 ? parseInt(b[j]) : 0;
    let sum = bitA + bitB + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  return result;
}
// @lc code=end

