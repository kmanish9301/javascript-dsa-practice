class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class PalindromeString {
  constructor() {
    this.head = null;
  }

  isPalindrome(data) {
    let str1 = "",
      str2 = "";
    let current = this.head;
    while (current !== null) {
      //   str1 = `${str1}${current.data}`;
      //   str2 = `${current.data}${str2}`;
      // OR
      str1 = str1 + current.data;
      str2 = current.data + str2;

      current = current.next;
    }
    return str1 === str2;
  }
}
// const list = new PalindromeString();
// list.head = new Node(1);
// list.head.next = new Node(2);
// list.head.next.next = new Node(2);
// list.head.next.next.next = new Node(1);
// console.log(list.isPalindrome());

class ReverseLinkList {
  constructor() {
    this.head = null;
  }

  reversedList(data) {
    let str = "";
    let current = this.head;

    while (current !== null) {
      str = current.data + str;

      current = current.next;
    }

    return str;
  }
}

const list = new ReverseLinkList();
list.head = new Node(5);
list.head.next = new Node(4);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(2);
console.log(list.reversedList());
