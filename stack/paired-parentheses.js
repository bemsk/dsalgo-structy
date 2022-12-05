/*
Write a function, pairedParentheses, that takes in a string as an argument.
The function should return a boolean indicating whether or not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.
*/

const pairedParentheses = (str) => {
    const stack = []

    for (let c of str) {
        if (c === ')' && stack.length === 0) return false
        if (c === '(') stack.push(1)
        if (c === ')') stack.pop()
    }

    return stack.length > 0 ? false : true
}

module.exports = pairedParentheses