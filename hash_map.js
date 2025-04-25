export default class HashMap {
  constructor(loadFactor, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
  }

  //using the provided hashing function from the lesson, but added a modulos step so we create 16 'buckets' for data in our hash map
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }
}
