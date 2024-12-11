/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const LN = new ListNode();
  let list = LN;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      list.next = list2;
      list2 = list2.next;
    } else {
      list.next = list1;
      list1 = list1.next;
    }
    list = list.next;
  }
  list.next = list1 ? list1 : list2;
  return LN.next;
};
// @lc code=end

