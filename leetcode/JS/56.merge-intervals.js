/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  /**
   * @type {number[][]}
  */
  let merged = [];
  /**
   * @param {number[]} it
   * @return {boolean}
  */
  const compareAndMerge = (it) => {
    if (merged.length) {
      let end = merged[merged.length - 1][1];
      if ((end >= it[0] && end < it[1]) || (end == it[1])) return ((merged[merged.length - 1][1] = it[1]) || true); // always retuen true after merging
      else if (merged[merged.length - 1].every((value, index) => value === it[index]) || end > it[1]) return true;
      else return false;
    }
    else return false;
  }
  intervals.sort((a, b) => a[0] - b[0]).forEach((item) => (!compareAndMerge(item) && merged.push(item)));
  return merged;
};
// @lc code=end