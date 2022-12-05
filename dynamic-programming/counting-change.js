/*
Write a function, countingChange, that takes in an amount and an array of coins.
The function should return the number of different ways it is possible to make change
for the given amount using the coins.

You may reuse a coin as many times as necessary.
*/

const countingChange = (amount, coins, i = 0, memo={}) => {
    if (i === coins.length) return 0

    const key = amount + '-' + i

    if (key in memo) return memo[key]

    let count = 0
    let qty = 0

    while (true) {
        const result = amount - (coins[i] * qty)

        if (result === 0) count ++
        if (result <= 0) break

        count += countingChange(result, coins, i + 1, memo)
        qty++
    }

    memo[key] = count

    return count
}

module.exports = countingChange