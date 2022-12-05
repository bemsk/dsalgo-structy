/*
Write a function, linkedListFind, that takes in the head of a linked list and a target value.
The function should return a boolean indicating whether or not the linked list contains the target.
*/

const linkedListFind = (head, target) => {
    let current = head

    while (current) {
        if (current.val === target) return true

        current = current.next
    }

    return false
}

// recursive solution
const _linkedListFind = (head, target) => {
    if (head === null) return false
    if (head.val === target) return true

    return _linkedListFind(head.next, target)
}

module.exports = linkedListFind