/*
 * @lc app=leetcode id=2161 lang=javascript
 *
 * [2161] Partition Array According to Given Pivot
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = (nums, pivot) => {
  let small = [], equal = [], big = [];
  for (const element of nums) 
    element < pivot ? small.push(element) : (element === pivot ? equal.push(element) : big.push(element));
  return small.concat(equal).concat(big);
}
// @lc code=end

