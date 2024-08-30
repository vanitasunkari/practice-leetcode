function BinarySearch(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.isEmpty = function () {
    return this.root === null;
  };
  this.insertNode = function (root, value) {
    const node = new BinarySearch(value);
    if (this.isEmpty()) {
      this.root = node;
    }
    if (root < value) {
      if (root.right === null) {
        root.right = null;
      } else {
        insertNode(root.right, value);
      }
    } else {
      if (root.left === null) {
        root.left = null;
      } else {
        insertNode(root.left, value);
      }
    }
  };

  this.insert = function (val) {
    const node = new BinarySearch(val);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, val);
    }
  };

  this.search = function (root, val) {
    console.log(root);
    if (root.value === val) return true;
    if (root.value > val) {
      this.search(root.left, val);
    } else {
      this.search(root.right, val);
    }
  };
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(6);
tree.insert(3);
console.log(tree.search(tree.root, 6));
