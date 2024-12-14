/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
const swapPairs = (head) => {
  let current = head, arr = [], pop = 0;
  for (; current; current = current.next) arr.push(current.val);
  if (arr.length == 1) return head;
  else if (arr.length % 2 == 0) {
    arr = arr.reverse();
    for (let i = 0; i < arr.length; i += 2) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    arr.forEach(item => { current = new ListNode(item, current); });
    return current;
  }
  else {
    current = new ListNode(arr.pop(), current);
    arr = arr.reverse();
    for (let i = 0; i < arr.length; i += 2) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    arr.forEach(item => { current = new ListNode(item, current); });
    return current;
  }
};
// @lc code=end

