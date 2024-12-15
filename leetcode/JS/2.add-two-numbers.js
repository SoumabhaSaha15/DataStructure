/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
/**
 * @param {ListNode} L1
 * @param {ListNode} L2
 * @return {ListNode}
 */
var addTwoNumbers = function (L1, L2) {
  let arr1 = [], arr2 = [], result = [], newop = null, carry = 0;
  while (L1 || L2) {
    L1 && (arr1.unshift(L1.val) && (L1 = L1.next));
    L2 && (arr2.unshift(L2.val) && (L2 = L2.next));
  }
  let i = arr1.length - 1, j = arr2.length - 1;
  while (i >= 0 || j >= 0 || carry > 0) {
    const [digit1, digit2] = [(i >= 0 ? arr1[i] : 0), (j >= 0 ? arr2[j] : 0)];
    const sum = digit1 + digit2 + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
    i--, j--;
  }
  result.reverse();
  for (const item of result) newop = new ListNode(item, newop);
  return newop;
};
// @lc code=end

