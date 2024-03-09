/*eslint-disable*/

import LinkedList from "./LinkedList";

export default class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = 0.75;
    this.buckets = new Array(capacity).fill(null);
    this.size = 0;
  }

  hash(key) {
    let hash = 0;
    if (typeof key === 'string') {
      const primeNumber = 31;
      for (let i = 0; i < key.length; i += 1) {
        hash = primeNumber * hash + key.charCodeAt(i);
      }
    } else {
      throw new Error("Only strings are supported!")
    }
    return hash % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const newList = new LinkedList();
    newList.prepend(value);
    this.buckets[index] = newList;
    this.size += 1;
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) { return null; }
    return this.buckets[index].head.data; // returns only data in a first node for now
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
    return true;
  }

  
}
