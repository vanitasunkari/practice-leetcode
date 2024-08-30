// Function-based implementation of Node
function Node(value) {
  this.value = value;
  this.next = null;
}

// Function-based implementation of LinkedList
function LinkedList() {
  this.size = 0;
  this.head = null;

  this.isEmpty = function () {
    return this.size === 0;
  };

  this.getSize = function () {
    return this.size;
  };

  this.prependNode = function (val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  };

  this.print = function () {
    let curr = this.head,
      listValues = "";
    while (curr) {
      listValues += curr.value;
      curr = curr.next;
    }
    console.log(listValues);
  };

  this.append = function (val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  };

  this.insert = function (val, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prependNode(val);
    } else {
      const node = new Node(val);
      let prev = this.head;
      for (i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  };

  this.remove = function (index) {
    let removeNode;
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
  };

  this.search = function (val) {
    if (this.isEmpty()) return -1;
    let curr = this.head;
    while (curr) {
      if (curr.value === val) return 1;
      curr = curr.next;
    }
    return -1;
  };

  this.reverse = function () {
    if (this.isEmpty()) return;
    if (this.getSize === 1) return this.head;
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  };
}

const list = new LinkedList();
console.log(list.prependNode(4));
console.log(list.prependNode(5));
console.log(list.insert(7, 0));
console.log(list.insert(6, 2));
console.log(list.reverse());
console.log(list.print());
