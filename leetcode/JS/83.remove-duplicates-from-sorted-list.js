/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 *@class ListNode 
 * class ListNode {
 *   constructor(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 *   }
 * } 
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  for (let current = head; (current && current.next);) (((current.val === current.next.val) && (current.next = current.next.next)) || (current = current.next));
  return head;
};
// @lc code=end

