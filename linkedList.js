// A class used to represent linked list structure
export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Appends node to end of list
    append(value) {
        this.tail = value;
        this.size++;
    }

    // Prepends node to head of list
    prepend(value) {
        this.head = value;
        this.size++;
    }

    // Returns length of nodes (how many exist in list)
    size() {
        return this.size;
    }

    // Returns head node
    head() {
        return this.head;
    }

    // Return tail
    tail() {
        return this.tail;
    }

    // Returns node at specific index
    at(index) {
        let current = this.head;
        let i = 0;

        // We loop through nodes until we reach the specific index
        while (i < index) {
            current = current.nextNode;
            i++;
        }
        return current.value;
    }

    // Removes last Node from list
    pop() {
        // Find the current tail
        if (!this.head) {
            return null; // Returns nothing if list is empty
        }

        if (this.size === 1 ) { // If list contains 1 
            const tail = this.head;
            this.head = null;
            this.size--;
            return tail.value;
        } 

        let current = this.head;
        while (current.next && current.nextNode.nextNode) {
            current = current.nextNode;
        }

        const tail = current.next;
        current.nextNode = null;
        this.size--;

        return tail.value;
    }

    // Returns true if passed value is contained within list, else returns false
    contains(value) {
        if (!this.head) {
            return false;
        }
        if (this.value = value) {
            return true; 
        } else {
            return false; // Edit when tested
        }
    }

    // Returns index of node containing value argument
    find(value) {
        // Add intel here
    }

    // Returns a string of linked list nodes
    toString() {
        let current = this.head;

        while (current !== null) {
            console.log(current.value);
            current = current.nextNode;
        }
    }
}

// A class representing a specific node
export class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }

    addNewValue(data) {
        this.value = data;
    }

    addNewNode(node) {
        this.nextNode = node;
    }
}

