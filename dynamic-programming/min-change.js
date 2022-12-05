/*
Write a function minChange that takes in an amount and an array of coins.
The function should return the minimum number of coins required to create the amount.
You may use each coin as many times as necessary.

If it is not possible to create the amount, then return -1.
*/

const minChange = (amount, coins) => {
    const result = _minChange(amount, coins)

    if (result === Infinity) return -1
    else return result
}

const _minChange = (amount, coins, memo={}) => {
    if (amount === 0) return 0
    if (amount < 0) return Infinity
    if (amount in memo) return memo[amount]

    let min = Infinity

    for (let c of coins) {
        min = Math.min(min, _minChange(amount - c, coins, memo) + 1)
    }

    memo[amount] = min
    return min
}

module.exports = minChange