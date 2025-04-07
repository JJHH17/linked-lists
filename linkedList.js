// A class used to represent linked list structure
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Appends node to end of list
    append(value) {
        this.tail = value;
    }

    // Prepends node to head of list
    prepend(value) {
        this.head = value;
    }

    // Returns length of nodes (how many exist in list)
    size() {
        let total =  this.tail + this.head;
        return total;
    }

    // Returns head node
    head() {
        return this.head;
    }

    // Return tail
    tail() {
        return this.tail;
    }

    // Returns item at given index
    at(index) {
        if (this.value = index) {
            return this.value;
        } else {
            this.nextNode;
        }
    }

    // Removes last element from list

}

// A class representing a specific node
class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }

    addNewValue(data) {
        this.value = data;
    }

    addNewNode(node) {
        this.nextNode = this.nextNode;
    }
}

