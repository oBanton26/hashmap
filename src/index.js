import { HashMap } from "./hashmapLogic.js";

const hashMap = new HashMap(0.8, 16);

hashMap.set('Zoe', 'fart');
hashMap.set('Ulysse', 'shit');
hashMap.set('Ulysse', 'shiiit');
hashMap.set('Oez', 'chat');
hashMap.set('Oez', 'chate');
console.log(hashMap.array);
console.log(hashMap.entries)