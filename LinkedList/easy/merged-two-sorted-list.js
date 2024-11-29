/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const res = new ListNode();
  let prev = res;

  let temp1 = list1;
  let temp2 = list2;

  while (temp1 && temp2) {
    const newNode =
      temp1.val < temp2.val ? new ListNode(temp1.val) : new ListNode(temp2.val);
    prev.next = newNode;
    prev = newNode;
    if (temp1.val < temp2.val) temp1 = temp1.next;
    else temp2 = temp2.next;
  }

  while (temp1) {
    const newNode = new ListNode(temp1.val);
    prev.next = newNode;
    prev = newNode;
    temp1 = temp1.next;
  }

  while (temp2) {
    const newNode = new ListNode(temp2.val);
    prev.next = newNode;
    prev = newNode;
    temp2 = temp2.next;
  }

  return res.next;
};
