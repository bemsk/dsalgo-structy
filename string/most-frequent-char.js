const mostFrequentChar = (s) => {
    const charMap = new Map()

    for (let c of s) {
        if (charMap.has(c)) charMap.set(c, charMap.get(c) + 1)
        else charMap.set(c, 1)
    }

    let mostFrequent = null

    for (const [char, count] of charMap) {
        if (mostFrequent === null || count > charMap.get(mostFrequent)) mostFrequent = char
    }

  return mostFrequent
}

module.exports = mostFrequentChar