/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
  const dp = [...Array(num1.length + num2.length)].fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      //Define
      const prevRemainder = dp[i + j + 1]
      const product = num1[i] * num2[j] + prevRemainder
      const unitsDigit = product % 10
      const carryOver = Math.floor(product / 10)
      //Update
      dp[i + j + 1] = unitsDigit;
      dp[i + j] += carryOver
    }
  }
  //Delete leading-zeroes
  let idx = 0
  while (dp[idx] === 0) dp.shift();
  if (!dp.length) return "0";
  return dp.join("");
};
// @lc code=end

