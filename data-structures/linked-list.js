class Node {
    constructor(val) {
      this.data = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // add to the list
    add(val) {
      let node = new Node(val);
      // check if list exists
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
  
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      // if it does, we'll get to the end of of the list to append new node
    }
  
    remove(val) {
      // transverse the linked list
      let current = this.head;
      let previous = null;
      while (current.data !== val) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    // remove from list
  }
  let list = new LinkedList();
  list.add(6);
  list.add(8);
  list.add(10);
  list.add(12);
  list.remove(8);
  console.log(JSON.stringify(list, null, 2));