// Linked list class
export class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // Appends node to end of list
    append(value) {
        let newNode = new Node();
        newNode.addValue(value);

        if (this.head === null) {
            this.head = newNode;
            this.length ++;
        } else {
            this.tail += newNode;
            this.length ++;
        }
    }
}

// Node class
export class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }

    addValue(data) {
        this.value = data;
    }

    addNextNode(node) {
        this.nextNode = node;
    }
}