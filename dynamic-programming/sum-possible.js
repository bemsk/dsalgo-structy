/*
Write a function sumPossible that takes in an amount and an array of positive numbers.
The function should return a boolean indicating whether or not it is possible
to create the amount by summing numbers of the array.
You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.
*/

const sumPossible = (amount, numbers, memo={}) => {
    if (amount < 0) return false
    if (amount === 0) return true

    if (amount in memo) return memo[amount]

    for (let n of numbers) {
        memo[amount] = sumPossible(amount - n, numbers, memo)
        if (memo[amount]) return true
    }

    return false
}

module.exports = sumPossible