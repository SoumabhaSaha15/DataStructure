/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  nums.sort((a,b)=>a-b);
  let numset = [...new Set(nums)];
  return numset.map(item=>({item:item,occ:(nums.lastIndexOf(item)-nums.indexOf(item))})).sort((a,b)=>(a.occ-b.occ)).pop().item;
}
// @lc code=end

