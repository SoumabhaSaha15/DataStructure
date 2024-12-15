/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let newlist = null, finalList = null;
  for (let curr = head; curr; curr = curr.next) newlist = new ListNode(curr.val, newlist);
  for (let i = 1; newlist; newlist = newlist.next, i++) if (i != n) finalList = new ListNode(newlist.val, finalList);
  return finalList;
};
// @lc code=end