/*
Write a function, insertNode, that takes in the head of a linked list, a value, and an index.
The function should insert a new node with the value into the list at the specified index.
Consider the head of the linked list as index 0.
The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty
and the index is not greater than the length of the input list.
*/
const Node = require('../_bin/linked-list')

const insertNode = (head, value, index) => {
    const insertedNode = new Node(value)

    if (index === 0) {
        insertedNode.next = head
        return insertedNode
    }

    let current = head
    let i = 0

    while (current) {
        if (i === index - 1) {
            insertedNode.next = current.next
            current.next = insertedNode
        }

        current = current.next
        i++
    }

    return head
}

module.exports = insertNode