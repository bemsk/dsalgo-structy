/*
Write a function, uncompress, that takes in a string as an argument.
The input string will be formatted into multiple groups according to the following pattern:

<number><char>
ex: '2c' or '3a'

The function should return an uncompressed version of the string
where each 'char' of a group is repeated 'number' times consecutively.
You may assume that the input string is well-formed according to the previously mentioned pattern.
*/

const uncompress = (s) => {
    let i = 0
    let j = 0

    let result = ""

    while (j < s.length) {
        if (s[j].match(/[A-Z]/i)) {
            const n = Number(s.slice(i, j))

            result += s[j].repeat(n)
            i = j + 1
            j += 1
        } else {
            j++
        }
    }

    return result
}

uncompress('2c3a1t')
uncompress('4s2b')
uncompress('2p1o5p')
uncompress('3n12e2z')
uncompress('127y')

module.exports = uncompress