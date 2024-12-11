/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  let carry = 0;
  for (let index = digits.length - 1; index >= 0; index--) {
    digits[index]++;
    if (digits[index] >= 10) {
      carry = digits[index] / 10;
      digits[index] %= 10;
    } else {
      carry = 0;
      break;
    }
  }
  if (carry > 0) digits.unshift(carry);
  return digits;
};
// @lc code=end

