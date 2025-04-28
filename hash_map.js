import LinkedList from "./linked_list.js";
import Node from "./node_instance.js";

export default function HashMap(loadFactor = 0.75, capacity = 16) {
  let buckets = Array.from({length: capacity}, (e) => null);

  //"takes a key and produces a hash code with it. We already implemented a fairly good hasNoh function in the previous lesson"... I've used that one here
  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
    }
    // IMPORTANT!!!!! this modulo operation is needed for when argument values are too large, this might be done incorrectly by me, so maybe come back to this later.
    return hashCode;
  }

  //takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten, and we can say that we update the key’s value (e.g. Carlos is our key but it is called twice: once with value I am the old value., and once with value I am the new value.. Following this logic, Carlos should contain only the latter value).
  function set(key, value) {
    let index = hash(key);
    //if index is > buckets.length then there has been some kind of an error and you should return an error
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else if (buckets[index] === null) {
      //if the value at the bucket for this hashed data is === null, then create a linkedList and add a node to it
      buckets[index] = new LinkedList();
      buckets[index].append(new Node(key, value));
    } else {
      //otherwise there is a linked list at that bucket and we want to just add a node to the end of the linked list
      buckets[index].append(value);
    }
    //"it’s important to grow buckets exactly as they are being expanded"
  }

  //takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  //wouldn't that just give the first nodes value at that bucket?
  function get(key) {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else if (buckets.index) {
      //if value is found
      return buckets.index;
    } else {
      //if value isn't found
      return null;
    }
  }

  //takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  function has(key) {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else if (buckets.index !== null) {
      //if there is a value stored at the prospective bucket, return true
      return true;
    } else {
      return false;
    }
  }

  //takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
  function remove(key) {
    //loop through, until you find a node that has the key and value, remove that node by setting the previous nodes next to the found nodes next
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else if (buckets.index) {
      //remove specific node in the hash map, aka replace its linked list with a new linked list
      buckets.index = new LinkedList();
    } else {
      //otherwise if it can't find the key value pair in the hash map, return false
      return false;
    }
  }

  return {set};
}

//going to have to check load factor each time something is added
