/*
Write a function, getNodeValue, that takes in the head of a linked list and an index.
The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null
*/

const getNodeValue = (head, index) => {
    let current = head
    let i = 0

    while (current) {
        if (i === index) return current.val
        current = current.next
        i++
    }

    return null
}

// recursive solution
const _getNodeValue = (head, index) => {
    if (head === null) return null
    if (index === 0) return head.val

    return _getNodeValue(head.next, index - 1)
}

module.exports = getNodeValue