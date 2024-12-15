/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  let top = head, arr = [];
  for (; top; top = top.next) arr.push(top.val);
  top = head;
  for (let i = 0; i < (k % arr.length); i++)  arr.unshift(arr.pop());
  for (let i = 0; top; i++, top = top.next) top.val = arr[i];
  return head;
};
// @lc code=end

