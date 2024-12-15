/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let array = [], sorted = null;
  for (let list = head; list; list = list.next) array.push(list.val);
  array.sort((x, y) => (y - x)).forEach(item => { sorted = new ListNode(item, sorted); });
  return sorted;
};
// @lc code=end

