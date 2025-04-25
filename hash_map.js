import LinkedList from "./linked_list.js";
import Node from "./node_instance.js";

export default function HashMap(loadFactor = 0.75, capacity = 16) {
  let buckets = Array.from({length: capacity}, (e) => null);

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  function set(key, value) {
    let index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else if (buckets[index] === null) {
      buckets[index] = new LinkedList();
      buckets[index].append(new Node(value));
    } else {
      buckets[index].append(value);
    }
  }

  return {set};
}
