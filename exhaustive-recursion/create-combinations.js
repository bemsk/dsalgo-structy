/*
Write a function, createCombinations, that takes in an array and a length as arguments.
The function should return a 2D array representing all of the combinations of the specifized length.

The items within the combinations and the combinations themselves may be returned in any order.

You may assume that the input array contains unique elements and 1 <= k <= items.length.
*/

const createCombinations = (items, k) => {
    if (k === 0) return [[]]
    if (k > items.length) return []

    const first = items[0]
    const leftCombs = createCombinations(items.slice(1), k - 1)
    const rightCombs = createCombinations(items.slice(1), k)

    const leftWithFirst = []
    for (let comb of leftCombs) {
        leftWithFirst.push([first, ...comb])
    }

    return [...leftWithFirst, ...rightCombs]
}

module.exports = createCombinations