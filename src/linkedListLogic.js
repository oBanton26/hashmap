export class LinkedList {
    constructor (head = null) {
        this.head = head;
    };

    append (value) {
        if (this.head == null) {
            this.prepend(value);
        } else {
            let pointer = this.head;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
            };
            pointer.nextNode = new Node(value);
        };
    };

    prepend (value) {
        this.head = new Node(value, this.head);
    };

    size() {
        let counter = 0;
        if (this.head == null) {
            return counter;
        } else {
            let pointer = this.head;
            counter++;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
                counter++;
            }
            return counter;
        };
    };

    tail() {
        if (this.head == null) {
            return null;
        } else {
            let pointer = this.head;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode;
            };
            return pointer;
        };
    };

    at (index) {
        let pointer = this.head;
        if (index === 0) {
            return pointer;
        } else if (index === this.size() - 1) {
            return this.tail();
        } else if (index > this.size() - 1) {
            return 'Index too high, the list is not that long'
        } else if (index < 0) {
            return "The index can't be negative";
        } else {
            for (let i = 1; i <= index; i++) {
                if (pointer.nextNode !== null) {
                    pointer = pointer.nextNode
                };
            };
            return pointer;
        };
    };

    pop() {
        const length = this.size();
        if (length === 0) {
            return;
        } else if (length === 1) {
            this.head = null;
        } else {
            const penultimate = this.at(length - 2);
            penultimate.nextNode = null;
        };
    };

    contains (value) {
        let pointer = this.head;
        if (pointer == null) {
            return false;
        }
        while (pointer !== null) {
            if (pointer.value === value) {
                return true;
            };
            pointer = pointer.nextNode
        };
        return false;
    };

    containsKey (key) {
        let pointer = this.head;
        if (pointer == null) {
            return false;
        }
        while (pointer !== null) {
            if (pointer.value[0] === key) {
                return true;
            };
            pointer = pointer.nextNode
        };
        return false;
    };

    find (value) {
        let pointer = this.head;
        let counter = 0;
        if (pointer == null) {
            return null;
        }
        while (pointer !== null) {
            if (pointer.value === value) {
                return counter;
            };
            pointer = pointer.nextNode;
            counter++;
        };
        return null;
    };
    
    findKey (key) {
        let pointer = this.head;
        let counter = 0;
        if (pointer == null) {
            return null;
        }
        while (pointer !== null) {
            if (pointer.value[0] === key) {
                return counter;
            };
            pointer = pointer.nextNode;
            counter++;
        };
        return null;
    };

    toString () {
        let string = '';
        let pointer = this.head;
        if (pointer === null) {
            return '()';
        };
        while (pointer !== null) {  
            string = string + `( ${pointer.value} ) -> `;
            pointer = pointer.nextNode;
        };
        string = string + 'null'
        return string;
    };

    insertAt (value, index) {
        const length = this.size();
        if (index === 0) {
            this.prepend(value);
        } else if (index === length - 1) {
            this.append(value);
        } else if (index >= length || index < 0) {
            console.log('The index is out of limit');
        } else {
            const currentNodeAtIndex = this.at(index);
            const nodeBeforeIndex = this.at(index-1);
            const insertedNode = new Node(value, currentNodeAtIndex);
            nodeBeforeIndex.nextNode = insertedNode;
        };
    };
    
    removeAt (index) {
        const length = this.size();
        if (index >= length || index < 0) {
            console.log('The index is out of limit');
        } else if (index === 0) {
            const secondNode = this.head.nextNode
            this.head = secondNode;
        } else {
            const nodeBefore = this.at(index - 1);
            const nodeAfter = this.at(index + 1);
            nodeBefore.nextNode = nodeAfter;
        };
    };
};

class Node {
    constructor (value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}