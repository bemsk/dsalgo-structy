/*
Write a function, anagrams, that takes in two strings as arguments.
The function should return a boolean indicating whether or not the strings are anagrams.
Anagrams are strings that contain the same characters, but in any order.
*/

const anagrams = (s1, s2) => {
    if (s1.length !== s2.length) return false

    const charMap = new Map()

    for (let i = 0; i < s1.length; i++) {
        if (charMap.has(s1[i])) charMap.set(s1[i], charMap.get(s1[i]) + 1)
        else (charMap.set(s1[i], 1))

        if (charMap.has(s2[i])) charMap.set(s2[i], charMap.get(s2[i]) - 1)
        else (charMap.set(s2[i], -1))
    }

    for (const [char, count] of charMap) {
        if (count !== 0) return false
    }

    return true
}

module.exports = anagrams