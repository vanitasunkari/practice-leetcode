//Input: l1 = [2,4,3], l2 = [5,6,4]
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
function addTwoNumbers(l1, l2) {
  let carry = 0,
    sum = 0;
  const list = new ListNode(0);
  let curr = list;
  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }
    curr.next = new ListNode(sum);
    sum = carry;
    carry = 0;
    curr = curr.next;
  }
  return list.next;
}
