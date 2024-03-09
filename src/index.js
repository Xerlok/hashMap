/* eslint-disable no-console */

import './styles.css';
import HashMap from './hashMap';

// Usage example
const myHashMap = new HashMap();

myHashMap.set('bird', `Birds are a group of warm-blooded vertebrates constituting the class Aves,
 characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate,
 a four-chambered heart, and a strong yet lightweight skeleton.`);

console.log(myHashMap.get('bird'));
