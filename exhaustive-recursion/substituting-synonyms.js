/*
Write a function, substitutingSynonyms, that takes in a sentence and an object as arguments.
The object contains words as keys whose values are arrays containing synonyms.
The function should return an array containing all possible sentences
that can be formed by substituting words of the sentence with their synonyms.

You may return the possible sentences in any order, as long as you return all of them.
*/

const substituteSynonyms = (sentence, synonyms) => {
    const words = sentence.split(' ')
    const subList = subs(words, synonyms)

    return subList.map((sub) => sub.join(' '))
}

const subs = (words, synonyms) => {
    if (words.length === 0) return [[]]

    const first = words[0]
    const rest = words.slice(1)
    const alts = subs(rest, synonyms)

    if (!(first in synonyms)) return alts.map((alt) => [first, ...alt])

    let result = []
    for (let syn of synonyms[first]) {
        result = result.concat(alts.map((alt) => [syn, ...alt]))
    }

    return result
}

module.exports = substituteSynonyms