/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * 
 */
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  let arr = [], finalList = null;
  lists.forEach(item => { for (let L = item; L; L = L.next) arr.push(L.val); });
  arr.sort((x, y) => (y - x)).forEach(item => { finalList = new ListNode(item, finalList) });
  return finalList;
};
// @lc code=end