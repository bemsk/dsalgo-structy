/*
Write a function, longestStreak, that takes in the head of a linked list as an argument.
The function should return the length of the longest consecutive streak of the same value within the list.
*/

const longestStreak = (head) => {
    let current = head

    let currentValue = null
    let count = 0
    let longest = 0

    while (current) {
        if (current.val !== currentValue) count = 1
        else count += 1

        if (count > longest) longest = count

        currentValue = current.val

        current = current.next
    }

    return longest
}

module.exports = longestStreak