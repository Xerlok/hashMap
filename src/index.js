/* eslint-disable no-console */

import './styles.css';
import HashMap from './hashMap';

// Usage example
const myHashMap = new HashMap();

myHashMap.set('bird', ` Birds are a group of warm-blooded vertebrates constituting the class Aves,
 characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs,
 a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.`);
myHashMap.set('table', 'A table is an item of furniture with a raised flat top and is supported most commonly by 1 to 4 legs');

console.log(myHashMap.get('bird'));
console.log(myHashMap.get('table'));
console.log(myHashMap.get('kek')); // returns null

console.log(myHashMap.has('bird'));
console.log(myHashMap.has('kek')); // returns false

console.log(myHashMap.keys());
console.log(myHashMap.values());
console.log(myHashMap.entries());
console.log(myHashMap.showBuckets());
