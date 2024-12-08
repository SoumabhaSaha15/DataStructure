"use strict";
// ListNode Class
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Linked List Class
class LinkedList {
    head;
    size;
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // Add a node at the end
    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    // Add a node at the beginning
    prepend(value) {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    // Remove a node by value
    remove(value) {
        if (!this.head)
            return;
        // If the head node needs to be removed
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }
    // Search for a node by value
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value)
                return true;
            current = current.next;
        }
        return false;
    }
    // Display the list
    print() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
    // Get the size of the list
    getSize() {
        return this.size;
    }
    // Check if the list is empty
    isEmpty() {
        return this.size === 0;
    }
}
// Example Usage
const list = new LinkedList();
debugger;
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30
list.prepend(5);
list.print(); // Output: 5 -> 10 -> 20 -> 30
list.remove(20);
list.print(); // Output: 5 -> 10 -> 30
console.log("Is 10 in the list?", list.search(10)); // Output: true
console.log("List size:", list.getSize()); // Output: 3
console.log("Is list empty?", list.isEmpty()); // Output: false
