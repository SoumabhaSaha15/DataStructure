/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
  let maxLength = 0;
  const stack = [-1]; // Initialize stack with a base index.
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i); // Push the index of '(' onto the stack.
    else {
      stack.pop(); // Pop the top index for ')'.
      if (stack.length === 0) stack.push(i); // Push the current index as the new base.
      else maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
    }
  }
  return maxLength;
};
// @lc code=end