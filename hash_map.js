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

  return {hash};
}
