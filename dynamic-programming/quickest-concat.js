/*
Write a function, quickestConcat, that takes in a string and an array of words as arguments.
The function should return the minimum number of words needed
to build the string by concatenating words of the array.

You may use words of the array as many times as needed.
*/

const quickestConcat = (s, words) => {
    const result = _quickestConcat(s, words)

    if (result === Infinity) return -1
    return result
};

const _quickestConcat = (s, words, memo={}) => {
    if (s in memo) return memo[s]
    if (s.length === 0) return 0

    let min = Infinity

    for (let w of words) {
        if (s.startsWith(w)) {
            min = Math.min(min, 1 + _quickestConcat(s.slice(w.length), words, memo))
        }
    }

    memo[s] = min
    return min
}

module.exports = quickestConcat