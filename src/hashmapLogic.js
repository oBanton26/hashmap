export class HashMap {
    constructor (loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
    };

    hash (key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        const maxInt = 1e9 + 9;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % maxInt;
        };

        return hashCode;
    };
}