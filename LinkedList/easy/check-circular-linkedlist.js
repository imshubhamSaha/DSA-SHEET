class Solution {
  isCircular(head) {
    if (!head) return true;
    let fast = head;
    while (fast) {
      if (head === fast.next) return true;
      fast = fast.next;
    }

    return false;
  }
}
