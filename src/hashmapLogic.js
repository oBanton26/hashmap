import { LinkedList } from "./linkedListLogic";

export class HashMap {
    constructor (loadFactor, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.originalCapacity = capacity;
        this.counter = 0;
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
        if (this.counter > this.loadFactor * this.capacity) {
            // grow the array size
            console.log("You've reached the limit of your hashmap, please expand")
        };

        const hashCode = this.hash(key);
        const bucket = this.array[hashCode];
        const pair = [key, value];

        if (bucket === undefined) {
            this.array[hashCode] = new LinkedList();
            this.array[hashCode].append(pair);
            this.counter++;
        } else {
            if (this.array[hashCode].containsKey(key)) {
                // Replace value when key already assigned
                const index = this.array[hashCode].findKey(key);
                this.array[hashCode].at(index).value = pair;
            } else {
                this.array[hashCode].append(pair);
                this.counter++;
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
            // case where the bucket is empty so undefined
            return false;
        } else if (this.array[hashCode].containsKey(key)){
            return true;
        } else {
            return false;
        };
    };

    remove (key) {
        const hashCode = this.hash(key);
        if (this.has(key)) {
            const index = this.array[hashCode].findKey(key);
            this.array[hashCode].removeAt(index);
            this.counter--;
            return true;
        } else {
            return false;
        };
    };

    length () {
        return this.counter;
    };

    clear () {
        this.array = [...Array(this.originalCapacity)];
        this.counter = 0;
    };

    keys () {
        const keysArray = [];
        for (let bucket of this.array) {
            if (!bucket) {}
            else {
                const bucketSize = bucket.size();
                for (let i=0; i<bucketSize; i++) {
                    keysArray.push(bucket.at(i).value[0]);
                };
            }
        };
        return keysArray;
    };

    values () {
        const valuesArray = [];
        for (let bucket of this.array) {
            if (!bucket) {}
            else {
                const bucketSize = bucket.size();
                for (let i=0; i<bucketSize; i++) {
                    valuesArray.push(bucket.at(i).value[1]);
                };
            }
        };
        return valuesArray;
    }
}