/*
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments.
The function should merge the two lists together into single sorted linked list.
The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.
*/

const mergeLists = (head1, head2) => {
    let head = null
    let current1 = null
    let current2 = null

    if (head1.val < head2.val) {
        head = head1
        current1 = head1.next
        current2 = head2
    } else {
        head = head2
        current1 = head2.next
        current2 = head1
    }

    let tail = head

    while (current1 && current2) {
        if (current1.val < current2.val) {
            tail.next = current1
            current1 = current1.next
        } else {
            tail.next = current2
            current2 = current2.next
        }

        tail = tail.next
    }

    if (current1) tail.next = current1
    if (current2) tail.next = current2

    return head
}

module.exports = mergeLists