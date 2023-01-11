/*
Write a function, addLists, that takes in the head of two linked lists, each representing a number.
The nodes of the linked lists contain digits as values.
The nodes in the input lists are reversed;
this means that the least significant digit of the number is the head.
The function should return the head of a new linked listed representing the sum of the input lists.
The output list should have its digits reversed as well
*/
const Node = require('../_bin/linked-list')

const addLists = (head1, head2) => {
    let current1 = head1
    let current2 = head2

    let head = new Node(null)
    let tail = head
    let remainder = 0

    while (current1 || current2) {
        let sum = remainder
        let nextNode = new Node(null)

        if (current1) {
            sum += current1.val
            current1 = current1.next
        }
        if (current2) {
            sum += current2.val
            current2 = current2.next
        }

        if (sum === 10) {
            remainder = 1
            nextNode.val = 0
        } else {
            remainder = Math.floor(sum/10)
            nextNode.val = sum % 10
        }

        tail.next = nextNode
        tail = tail.next
    }

    while (remainder > 0) {
        if (remainder === 10) {
            tail.next = new Node(0)
            remainder = 1
            tail = tail.next
        } else if (remainder > 10) {
            tail.next = new Node(remainder % 10)
            remainder = Math.floor(remainder/10)
            tail = tail.next
        } else {
            tail.next = new Node(remainder)
            remainder = 0
            tail = tail.next
        }
    }

    return head.next
}

module.exports = addLists