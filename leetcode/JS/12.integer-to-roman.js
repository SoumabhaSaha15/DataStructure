/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = [{ number: 1000, roman: "M" }, { number: 900, roman: "CM" }, { number: 500, roman: "D" }, { number: 400, roman: "CD" }, { number: 100, roman: "C" }, { number: 90, roman: "XC" }, { number: 50, roman: "L" }, { number: 40, roman: "XL" }, { number: 10, roman: "X" }, { number: 9, roman: "IX" }, { number: 5, roman: "V" }, { number: 4, roman: "IV" }, { number: 1, roman: "I" }]
  let str = '';
  map.forEach(item => {
    while (num >= item.number) {
      str += item.roman;
      num -= item.number;
    }
  });
  return str;
};
// @lc code=end

