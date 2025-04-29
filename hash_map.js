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
      buckets[index].append(key, value);
    } else if (buckets[index] !== null) {
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
  //this is wrong, just because a hash map has an index that could be for a key argument does not mean the key is in the hashmap

  //takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
  function remove(key) {
    //loop through, until you find a node that has the key and value, remove that node by setting the previous nodes next to the found nodes next
    let index = hash(key);
    //edge case check
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
      //else we'll check if the bucket !== null because that would mean it does not hold an instance of a linkedList and won't be able to use the containsKey method to check if the key is found in the bucket's linked list
    } else if (buckets[index] !== null && buckets[index].containsKey(key)) {
      //if removing the only node in the linked list then set the bucket === null
      if (
        buckets[index].head.key === key &&
        buckets[index].head.next === null
      ) {
        buckets[index] = null;
      } else {
        //else, there's more than one node in the linked list, remove the specific node
        //if first node
        if (buckets[index].head.key === key) {
          buckets[index].head = buckets[index].head.next;
        } else {
          //if any other node
          let currentNode = buckets[index].head;
          let prevNode;
          while (currentNode.key !== key) {
            prevNode = currentNode;
            currentNode = currentNode.next;
          }
          //remove specific key node by setting previous node next to the targeted nodes next node or null in case the targeted node was the last node
          if (currentNode.next !== null) {
            prevNode.next = currentNode.next;
          } else {
            prevNode.next = null;
          }
        }
      }
      //need to return true after taking action
      return true;
    } else {
      //otherwise if it can't find the key in the hash map, return false
      return false;
    }
  }

  //returns the number of stored keys in the hash map.
  function length() {
    //iterate over each bucket summing the returned values of linkedList.size which returns the size of the linked list in that bucket, add those returned counts into nodeTotal variable and return that expression when done iterating
    let nodeTotal = 0;
    for (let bucket of buckets) {
      if (bucket !== null) {
        nodeTotal += bucket.size();
      }
    }
    return nodeTotal;
  }

  //removes all entries in the hash map.
  function clear() {
    //iterate over each bucket and set their value === to null, which is the value they'd hold before set() is invoked which saves a linked list in the bucket
    buckets = buckets.map((bucket) => (bucket = null));
    console.log("All entries deleted");
  }

  //returns an array containing all the keys inside the hash map.
  function keys() {
    //build an array
    //iterate over each bucket
    //iterate over each node in the bucket (linked list)
    //add key values to array
    //add inner arrays elements to outer array
    //return outer array
    let hashKeys = [];
    for (let bucket of buckets) {
      if (bucket !== null) {
        let bucketKeys = [];
        let tempNode = bucket.head;
        //iterate until no nodes, pushing each nodes key
        while (tempNode !== null) {
          bucketKeys.push(tempNode.key);
          tempNode = tempNode.next;
        }
        //overwrite the hashKeys array with the concat'ed version (concat returns a new array, it does not modify)
        hashKeys = hashKeys.concat(bucketKeys);
      }
    }
    return hashKeys;
  }

  //returns an array containing all the values.
  function values() {
    //same as above method code, but with tempNode.value targeted instead of tempNode.key
    let hashValues = [];
    for (let bucket of buckets) {
      if (bucket !== null) {
        let bucketValues = [];
        let tempNode = bucket.head;
        //iterate until no nodes, pushing each nodes key
        while (tempNode !== null) {
          bucketValues.push(tempNode.value);
          tempNode = tempNode.next;
        }
        //overwrite the hashValues array with the concat'ed version (concat returns a new array, it does not modify)
        hashValues = hashValues.concat(bucketValues);
      }
    }
    return hashValues;
  }

  //returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
  function entries() {
    //very similar to above, but change the value being pushed into an array built of the key then value
    let hashEntries = [];
    for (let bucket of buckets) {
      if (bucket !== null) {
        let bucketEntries = [];
        let tempNode = bucket.head;
        //iterate until no nodes, pushing each nodes key
        while (tempNode !== null) {
          bucketEntries.push(`[${tempNode.key}, ${tempNode.value}]`);
          tempNode = tempNode.next;
        }
        hashEntries = hashEntries.concat(bucketEntries);
      }
    }
    return hashEntries;
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

//going to have to check load factor each time something is added
