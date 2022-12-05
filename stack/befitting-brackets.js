/*
Write a function, befittingBrackets, that takes in a string as an argument.
The function should return a boolean indicating
whether or not the string contains correctly matched brackets.

You may assume the string contains only characters: ( ) [ ] { }
*/

const befittingBrackets = (str) => {
    const stack = []
    const pair = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ])

    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if (pair.has(char)) stack.push(char)
        if (!pair.has(char)) {
        if (pair.get(stack[stack.length - 1]) === char) stack.pop()
            else return false
        }
    }

    if (stack.length > 0) return false
    else return true
}

module.exports = befittingBrackets