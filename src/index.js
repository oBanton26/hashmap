import { HashMap } from "./hashmapLogic.js";

const hashMap = new HashMap(0.8, 16);

hashMap.set('Zoe', 'fart');
hashMap.set('Zoe', 'farttt');
hashMap.set('Ulysse', 'shit');
hashMap.set('Oez', 'chat');
console.log(hashMap.remove('Zoe'));
console.log(hashMap.remove('Oezz'));
console.log(hashMap.array);
console.log(hashMap.entries)