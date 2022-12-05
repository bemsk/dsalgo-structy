/*
Write a function fib that takes in a number argument, n,
and returns the n-th number of the Fibonacci sequence.

The 0-th number of the sequence is 0.

The 1-st number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous two numbers.
*/

const fib = (n, memo={}) => {
    if (n === 0 || n === 1) return n

    if (n in memo) return memo[n]

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

    return memo[n]
}

module.exports = fib