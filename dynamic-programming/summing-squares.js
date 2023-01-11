/*
Write a function, summingSquares, that takes a target number as an argument.
The function should return the minimum number of perfect squares that sum to the target.
A perfect square is a number of the form (i*i) where i >= 1.

For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.
*/

const summingSquares = (n) => {
    return _summingSquares(n)
};

const _summingSquares = (n, memo={}) => {
    if (n < 0) return Infinity
    if (n === 0 || n === 1) return n

    if (n in memo) return memo[n]

    let i = 2
    let min = Infinity

    while (i * i <= n) {
        min = Math.min(min, 1 + _summingSquares(n - (i * i)))
        i++
    }

    memo[n] = min
    return min
}

module.exports = summingSquares