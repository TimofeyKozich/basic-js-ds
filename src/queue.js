const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.size === 0) {
      this.head = new ListNode(value);
    } else {
      let currentElement = this.head;
      while(currentElement.next) {
        currentElement = currentElement.next;
      }
      currentElement.next = new ListNode(value);
    }
    this.size += 1;
  }

  dequeue() {
    let topElement = this.head;
    this.head = topElement.next;
    this.size -= 1;
    return topElement.value;
  }
}

module.exports = {
  Queue
};
