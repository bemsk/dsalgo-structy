/*
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.
The function should return the total sum of all values in the linked list.
*/

const sumList = (head) => {
    let result = 0
    let current = head

    while (current) {
        result += current.val
        current = current.next
    }

    return result
}

// recursive solution
const _sumList = (head) => {
    if (head === null) return 0

    return head.val + _sumList(head.next)
}

module.exports = sumList