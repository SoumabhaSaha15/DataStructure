/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const bracket = "[{()}]", Valid = ["[]", "{}", "()"];
var isValid = (string) => {
  let  str = [];
  for (let index = 0; index < string.length; index++)
    if (bracket.includes(string[index])) {
      str.push(string[index]);
      if ((str.length>=2)&&Valid.includes((str[str.length-2]+str[str.length-1]))) 
        str.splice(str.length-2,2);
    }
  return !str.length;
};
// @lc code=end

