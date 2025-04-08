// Linked list class
export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Appends node to end of list (unless a head doesn't exist)
    append(value) {
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.nextNode = node;
            this.tail = node;
        }
        this.length++;
    }

    // Prepends node to head
    prepend(value) {
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }
        this.length++;
    }

    // Returns the size/total number of nodes
    size() {
        console.log(this.length);
    }

    // Returns the head/first element
    getHead() {
        console.log(this.head);
    }

    // Returns tail/last element
    getTail() {
        console.log(this.tail);
    }

    // Returns element at specific index
    at(index) {
        let current = this.head;
        let i = 0;

        while (i < index) {
            current = current.nextNode;
            i++; 
        }
        console.log(current.value);
        // Add error handling/index handling for this
    }

    // Removes tail/last element from list
    pop() {
        if (!this.head) {
            return undefined;
        }

        let temp = this.head;
        let pre = this.head;

        while (temp.nextNode) {
            pre = temp;
            temp = temp.nextNode;
        }

        this.tail = pre;
        this.tail.nextNode = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    // Returns true if value is detected in list, else returns false
    contains(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return true; // Meaning value was found
            }
            current = current.nextNode;
        }
        return false; // False if value is not found
    }

    // Returns index of node containing value, else null if not existing
    find(value) {
        let current = this.head;
        let i = -1;

        while(current) {
            ++i;
            if (current.value === value) console.log(i);

            current = current.nextNode;
        }
        return -1;
    }
    
    // Presents nodes in list to a string 
    toString() {
        let current = this.head;

        while(current) {
            console.log(`(${current.value}) ->`);

            current = current.nextNode;
        }
        console.log("null");
    }

    // Inserts a node at a given index
    insertAt(value, index) {
        let node = this.head;
        if (index === 0) {
            value.nextNode = node;
            this.head = value;
            return;
        }

        while(--index){
            if (node.nextNode !== null) {
                node = node.nextNode;
            } else {
                throw Error("index is out of bounds");
            }
        }
        let tempValue = node.nextNode;
        node.nextNode = value;
        value.nextNode = tempValue;
    }

    // Removes node at a given index
    removeAt(index) {
        let node = this.head; 
        if (index === 0) {
            if(node !== null) {
                node = node.nextNode;
                this.head = node;
            }
        } else {
            return "Index out of bounds";
            return;
        }
        while (--index) {
            if (node.nextNode !== null) {
                node = node.nextNode;
            } else {
                return "Index out of bounds";
            }
        }
        node.nextNode = node.nextNode.nextNode;
    }
}


// node class
export class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}