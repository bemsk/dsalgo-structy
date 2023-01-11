/*
Write a function, createLinkedList, that takes in an array of values as an argument.
The function should create a linked list containing each element of the array as the values of the nodes.
The function should return the head of the linked list.
*/

const Node = require('../_bin/linked-list')

const createLinkedList = (values) => {
    const dummyHead = new Node(null)
    let current = dummyHead

    for (let v of values) {
        current.next = new Node(v)
        current = current.next
    }

    return dummyHead.next
}

module.exports = createLinkedList