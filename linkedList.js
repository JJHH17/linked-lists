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

    // Returns the head element
    getHead() {
        console.log(this.head);
    }

    getTail() {
        console.log(this.tail);
    }
}


// node class
export class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}