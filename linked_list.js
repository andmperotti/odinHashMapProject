import NodeInstance from "./node_instance.js";

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  //adds a new node containing value to the end of the list
  append(value) {
    if (this.head === null) {
      this.head = new NodeInstance(value);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new NodeInstance(value);
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    if (this.head === null) {
      this.head = new NodeInstance(value);
    } else {
      let previousFirstNode = this.head;
      this.head = new NodeInstance(value);
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

  //returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    if (this.head === null) {
      return false;
    } else {
      let tempNode = this.head;
      while (tempNode.value !== value && tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      if (tempNode.value === value) {
        return true;
      } else {
        return false;
      }
    }
  }

  //returns the index of the node containing value, or null if not found.
  find(value) {
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      let indexCount = 0;
      while (currentNode.next !== null && currentNode.value !== value) {
        indexCount++;
        currentNode = currentNode.next;
      }
      if (currentNode.value === value) {
        return indexCount;
      } else {
        return null;
      }
    }
  }

  //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    if (this.head === null) {
      return null;
    } else {
      let stringArr = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        stringArr.push(`(${currentNode.value}) -> `);
        currentNode = currentNode.next;
      }
      stringArr.push("null");
      return stringArr.join("");
    }
  }

  //that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (this.head === null && index > 0) {
      console.log("index greater than current amount of nodes");
    } else if (index === 0 && this.head === null) {
      this.head = new NodeInstance(value);
    } else if (index === 0 && this.head.next !== null) {
      let prevNode = this.head;
      this.head = new NodeInstance(value);
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
        let newNode = new NodeInstance(value);
        prevNode.next = newNode;
        newNode.next = currentNode;
      } else if (currentIndex + 1 === index) {
        currentNode.next = new NodeInstance(value);
        currentNode.next.next = null;
      } else {
        console.log("index greater than current amount of nodes");
      }
    }
  }
  //trying to add a node to the back isn't working

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
