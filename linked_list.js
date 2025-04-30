import NodeInstance from "./node_instance.js";

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  //adds a new node containing key and value to the end of the list
  append(key, value) {
    if (this.head === null) {
      this.head = new NodeInstance(key, value);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new NodeInstance(key, value);
    }
  }

  // adds a new node containing key and value to the start of the list
  prepend(key, value) {
    if (this.head === null) {
      this.head = new NodeInstance(key, value);
    } else {
      let previousFirstNode = this.head;
      this.head = new NodeInstance(key, value);
      this.head.next = previousFirstNode;
    }
  }

  //returns the total number of nodes in the list
  size() {
    let nodeCount = 0;
    let tempNode = this.head;
    while (tempNode !== null) {
      nodeCount++;
      tempNode = tempNode.next;
    }
    return nodeCount;
  }

  //returns the first node in the list
  getHead() {
    return this.head;
  }

  //returns the last node in the list
  tail() {
    if (this.head === null) {
      return null;
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      return tempNode;
    }
  }

  //returns the node at the given index
  at(index) {
    if (this.head === null) {
      return null;
    } else {
      let counter = 0;
      let tempNode = this.head;
      while (tempNode !== null && counter !== index) {
        counter++;
        tempNode = tempNode.next;
      }
      if (counter === index) {
        return tempNode;
      } else {
        return null;
      }
    }
  }

  //removes the last element from the list
  pop() {
    if (this.head === null) {
      return;
    } else if (this.head.next === null) {
      this.head = null;
    } else {
      let prevNode;
      let tempNode = this.head;
      while (tempNode.next !== null) {
        prevNode = tempNode;
        tempNode = tempNode.next;
      }
      prevNode.next = null;
    }
  }

  //returns true if the passed in key and value is in the list and otherwise returns false.
  contains(key, value) {
    if (this.head === null) {
      return false;
    } else {
      let tempNode = this.head;
      while (
        tempNode.value !== value &&
        tempNode.key !== key &&
        tempNode.next !== null
      ) {
        tempNode = tempNode.next;
      }
      if (tempNode.value === value && tempNode.key === key) {
        return true;
      } else {
        return false;
      }
    }
  }

  //accessory function for remove method, called on a bucket looks at head node if head exists, or loops through the linked list in the bucket to find if a node exists with a given key
  containsKey(key) {
    //if bucket is === null, or if somehow an empty linked list is in the bucket with head===null, return false
    if (this.head === null) {
      return false;
    } else {
      let tempNode = this.head;
      //if the first nodes key===key, return true
      if (tempNode.key === key) {
        return true;
      }
      //otherwise loop until we find the node.key===key or we hit the end of the linked list
      while (tempNode.next !== null && tempNode.key !== key) {
        tempNode = tempNode.next;
      }
      //if key found in a node return true, else return false
      if (tempNode.key === key) {
        return true;
      } else {
        return false;
      }
    }
  }

  //returns the index of the node containing key and value, or null if not found.
  find(key, value) {
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      let indexCount = 0;
      while (
        currentNode.next !== null &&
        currentNode.key !== key &&
        currentNode.value !== value
      ) {
        indexCount++;
        currentNode = currentNode.next;
      }
      if (currentNode.value === value && currentNode.key === key) {
        return indexCount;
      } else {
        return null;
      }
    }
  }

  //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( key : value ) -> ( key : value ) -> ( key : value ) -> null
  toString() {
    if (this.head === null) {
      return null;
    } else {
      let stringArr = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        stringArr.push(`(${currentNode.key} : ${currentNode.value}) -> `);
        currentNode = currentNode.next;
      }
      stringArr.push("null");
      return stringArr.join("");
    }
  }

  //that inserts a new node with the provided value at the given index.
  insertAt(key, value, index) {
    if (this.head === null && index > 0) {
      console.log("index greater than current amount of nodes");
    } else if (index === 0 && this.head === null) {
      this.head = new NodeInstance(key, value);
    } else if (index === 0 && this.head.next !== null) {
      let prevNode = this.head;
      this.head = new NodeInstance(key, value);
      this.head.next = prevNode;
    } else {
      let currentNode = this.head;
      let currentIndex = 0;
      let prevNode;
      while (currentIndex !== index && currentNode.next !== null) {
        prevNode = currentNode;
        currentIndex++;
        currentNode = currentNode.next;
      }
      if (currentIndex === index) {
        let newNode = new NodeInstance(key, value);
        prevNode.next = newNode;
        newNode.next = currentNode;
      } else if (currentIndex + 1 === index) {
        currentNode.next = new NodeInstance(key, value);
        currentNode.next.next = null;
      } else {
        console.log(
          "index greater than current amount of nodes, you can use append if you'd like to add a node to the end."
        );
      }
    }
  }

  //that removes the node at the given index.
  removeAt(index) {
    if (this.head === null) {
      console.log("list is empty already");
    } else if (index === 0 && this.head.next === null) {
      this.head = null;
    } else {
      let currentNode = this.head;
      let indexCount = 0;
      let prevNode;
      while (currentNode.next !== null && indexCount !== index) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        indexCount++;
      }
      if (index === 0 && indexCount === 0) {
        this.head = currentNode.next;
      } else if (indexCount === index) {
        prevNode.next = currentNode.next;
      } else {
        console.log("no nodes currently at that index");
      }
    }
  }
}
