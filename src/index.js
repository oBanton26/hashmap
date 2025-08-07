import { HashMap } from "./hashmapLogic.js";

const test = new HashMap(0.75, 16);

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
test.set('apple', 'reeed')
test.set('turd', 'brown')

console.log(test.array);
console.log(test.values());
console.log(test.length())