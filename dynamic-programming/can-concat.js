/*
Write a function, canConcat, that takes in a string and an array of words as arguments.
The function should return boolean indicating whether or not it is possible
to concatenate words of the array together to form the string.

You may reuse words of the array as many times as needed.
*/

const canConcat = (s, words, memo={}) => {
    if (s in memo) return memo[s]
    if (s.length === 0) return true

    for (let w of words) {
        const firstSubstr = s.slice(0, w.length)

        if (firstSubstr === w && canConcat(s.slice(w.length), words, memo)) {
            memo[s] = true
            return true
        }
    }

    memo[s] = false
    return false
}

module.exports = canConcat