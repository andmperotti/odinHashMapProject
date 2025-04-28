import LinkedList from "./linked_list.js";
import Node from "./node_instance.js";

export default function HashMap(loadFactor = 0.75, capacity = 16) {
  let buckets = Array.from({length: capacity}, (e) => null);

  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % buckets.length;
    }
    // IMPORTANT!!!!! this modulo operation is needed for when argument values are too large, this might be done incorrectly by me, so maybe come back to this later.
    return hashCode;
  }

  function set(key, value) {
    let index = hash(key);
    //if index is > buckets.length then there has been some kind of an error and you should return an error
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else if (buckets[index] === null) {
      //if the value at the bucket for this hashed data is === null, then create a linkedList and add a node to it
      buckets[index] = new LinkedList();
      buckets[index].append(new Node(value));
    } else {
      //otherwise there is a linked list at that bucket and we want to just add a node to the end of the linked list
      buckets[index].append(value);
    }
  }
  //it’s important to grow buckets exactly as they are being expanded.

  return {set};
}
