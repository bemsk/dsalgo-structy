/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument.
The function should return an array containing all values of the nodes in the linked list.
*/

const linkedListValues = (head) => {
    const result = []

    let current = head

    while (current) {
        result.push(current.val)
        current = current.next
    }

    return result
}

// recursive solution
const _linkedListValues = (head) => {
    if (head === null) return []

    return [head.val].concat(_linkedListValues(head.next))
}

module.exports = linkedListValues