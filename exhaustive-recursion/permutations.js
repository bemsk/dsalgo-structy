/*
Write a function, permutations, that takes in an array an argument. The function should return a 2D array where each subarray represents one of the possible permutations of the array.

The subarrays may be returned in any order.

You may assume that the input array contains unique elements.
*/

const permutations = (items) => {
    if (items.length === 0) return [[]]

    const first = items[0]
    const rest = permutations(items.slice(1))
    const comb = []

    for (let r of rest) {
        for (let i = 0; i <= r.length; i++) {
            const pre = r.slice(0, i)
            const post = r.slice(i)
            comb.push([...pre, first, ...post])
        }
    }

    return comb
}

module.exports = permutations