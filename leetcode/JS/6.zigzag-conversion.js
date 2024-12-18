/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows==1) return s;
  let rows = Array.from({ length: numRows }).fill(''), counter = 0, increment = true;
  for (const char of s) {
    rows[counter]+=(char);
    if (increment) {
      counter++;
      if(counter == rows.length){
        counter-=2;
        increment = false;
      }
    } else {
      counter --;
      if (counter == -1){
        counter+=2;
        increment = true;
      }
    }
  }
  return rows.join("");
};
// @lc code=end

