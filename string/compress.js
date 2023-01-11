/*
Write a function, compress, that takes in a string as an argument.
The function should return a compressed version of the string
where consecutive occurrences of the same characters are compressed into the number of occurrences
followed by the character. Single character occurrences should not be changed.

ex:
'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.
*/

const compress = (s) => {
    let result = ""

    let i = 0
    let j = 0

    while (j <= s.length) {
        if (s[j] !== s[i]) {
            if (j - i === 1) result += s[i]
            else result += (j - i) + s[i]
            i = j
        }
        j++
    }

  return result
}

module.exports = compress