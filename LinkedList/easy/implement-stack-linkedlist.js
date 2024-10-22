class MyStack {
  // class StackNode{
  //     constructor(a){
  //         this.data = a;
  //         this.next = null;
  //     }
  // }
  constructor() {
    this.top = null;
  }

  /**
   * @param {number} a
   */

  // Function to push an integer into the stack.
  push(a) {
    const newNode = new StackNode(a);
    newNode.next = this.top;
    this.top = newNode;
  }

  /**
   */

  // Function to remove an item from top of the stack.
  pop() {
    if (!this.top) return -1;
    const popped = this.top.data;
    this.top = this.top.next;
    return popped;
  }
}
/**
 * Time Complexity --> constant
 * Space Complexity --> o(n)
 */
