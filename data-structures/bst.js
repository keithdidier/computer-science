class Node {
    constructor(val) {
      this.data = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    add(val) {
      let node = new Node(val);
      // does the tree exist?
      if (!this.root) {
        this.root = node;
        return;
      } else {
        // yes, exists
        let current = this.root;
        while (current) {
          if (val > current.data) {
            if(!current.right) {
              current.right = node;
              break;
            } else {
              current = current.right;
            }
          } else {
            if(!current.left) {
              current.left = node;
              break;
            } else {
              current = current.left;
            }
          }
        }
      }
    }
  }
  
  let bst = new BST()
  bst.add(6);
  bst.add(5)
  bst.add(7);
  bst.add(8);
  console.log(JSON.stringify(bst, null, 2));