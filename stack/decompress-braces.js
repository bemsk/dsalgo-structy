/*
Write a function, decompressBraces, that takes in a compressed string as an argument.
The function should return the string decompressed.

The compression format of the input string is 'n{subString}',
where the subString within braces should be repeated n times.

You may assume that every number n is guaranteed to be an integer between 1 through 9.

You may assume that the input is valid and the decompressed string will only contain alphabetic characters.
*/

const decompressBraces = (s) => {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{') stack.push(i)
        if (s[i] === '}' && stack.length === 1) {
            const openParenIndex = stack.pop()
            const pre = s.slice(0, openParenIndex - 1)
            const post = s.slice(i + 1)
            const decompress = s.slice(openParenIndex + 1, i)
            const multiplier = Number(s[openParenIndex - 1])

            const newString = pre + decompress.repeat(multiplier) + post
            return decompressBraces(newString)
        }

        if (s[i] === '}' && stack.length > 1) stack.pop()
    }

    return s
}

module.exports = decompressBraces