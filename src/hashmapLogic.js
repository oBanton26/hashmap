import { LinkedList } from "./linkedListLogic";

export class HashMap {
    constructor (loadFactor, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.entries = 0;
        this.array = [...Array(this.capacity)];
    };

    hash (key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        const maxInt = 1e9 + 9;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % maxInt;
        };

        return hashCode % this.capacity;
    };

    set (key, value) {
        if (this.entries > this.loadFactor * this.capacity) {
            // grow the array size
            console.log("You've reached the limit of your hashmap, please expand")
        };

        const hashCode = this.hash(key);
        const bucket = this.array[hashCode];
        const pair = [key, value];

        if (bucket === undefined) {
            this.array[hashCode] = new LinkedList();
            this.array[hashCode].append(pair);
            this.entries++;
        } else {
            if (this.array[hashCode].containsKey(key)) {
                // Replace value when key already assigned
                const index = this.array[hashCode].findKey(key);
                this.array[hashCode].at(index).value = pair;
            } else {
                this.array[hashCode].append(pair);
                this.entries++;
            };
        };
    };

    get (key) {
        const hashCode = this.hash(key);
        if (this.has(key)) {
            const index = this.array[hashCode].findKey(key);
            const value = this.array[hashCode].at(index).value;
            return value[1];
        } else {
            return null;
        }
    }

    has (key) {
        const hashCode = this.hash(key);
        if (!this.array[hashCode]) {
            return false;
        } else if (this.array[hashCode].containsKey(key)){
            return true;
        } else {
            return false;
        }
    }
}

class KeyValuePair {
    constructor (key, value) {
        this.key = key;
        this.value = value;
    };
}