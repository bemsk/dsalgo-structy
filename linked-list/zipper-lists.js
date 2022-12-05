/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments.
The function should zipper the two lists together into single linked list by alternating nodes.
If one of the linked lists is longer than the other,
the resulting list should terminate with the remaining nodes.
The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
*/

const zipperLists = (head1, head2) => {
    const head = head1
    let tail = head

    let current1 = head1.next
    let current2 = head2
    let index = 0

    while (current1 && current2) {
        if (index % 2 === 0) {
            tail.next = current2
            current2 = current2.next
        } else {
            tail.next = current1
            current1 = current1.next
        }

        tail = tail.next
        index++
    }

    if (current1) tail.next = current1
    if (current2) tail.next = current2

    return head
}

// recursive solution
const _zipperLists = (head1, head2) => {
    if (head1 === null && head2 === null) return null
    if (head1 === null) return head2
    if (head2 === null) return head1

    const next1 = head1.next
    const next2 = head2.next

    head1.next = head2
    head2.next = _zipperLists(next1, next2)

    return head1
}

module.exports = _zipperLists