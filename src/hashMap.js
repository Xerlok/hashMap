/*eslint-disable*/

// It creates LinkedLists and Nodes but for now functions work as if there is only 1 node in each bucket
import LinkedList from "./LinkedList";

export default class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.LoadFactor = 0.75;
    this.buckets = new Array(capacity).fill(null);
    this.size = 0;
  }

  hash(key) {
    let hash = 0;
    if (typeof key === 'string') {
      const PrimeNumber = 31;
      for (let i = 0; i < key.length; i += 1) {
        hash = PrimeNumber * hash + key.charCodeAt(i);
      }
    } else {
      throw new Error("Only strings are supported!")
    }
    return hash % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const newList = new LinkedList();
    newList.prepend(key, value);
    this.buckets[index] = newList;
    this.size += 1;
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) { return null; }
    return this.buckets[index].head.value; // returns only value in a first node for now
  }

  showBuckets() {
    return this.buckets;
  }

  has(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) { return false; }
    return true;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) { return false; }
    this.buckets[index] = [];
    this.size -= 1;
    return true;
  }

  length() {
    return this.size;
  }

  clear() {
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  //  returns an array containing all the keys inside the hash map.
  keys() {
    let keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] === null) {
        keys.push('_empty_');
        continue;
      }
      keys.push(this.buckets[i].head.key);
    }
    return keys;
  }

  //  returns an array containing all the values.
  values() {
    let values = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] === null) {
        values.push('_empty_');
        continue;
      }
      values.push(this.buckets[i].head.value);
    }
    return values;
  }

  // returns an array that contains each key, value pair. 
  entries() {
    let entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] === null) {
        entries.push('_empty_');
        continue
      }
      let pair = [];
      pair.push(this.buckets[i].head.key, this.buckets[i].head.value);
      entries.push(pair);
    }
    return entries;
  }
}
