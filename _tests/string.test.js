const uncompress = require('../string/uncompress')
const compress = require('../string/compress')
const anagrams = require('../string/anagrams')
const mostFrequentChar = require('../string/most-frequent-char')

describe('uncompress string', () => {
    test('should return an uncompressed version of a string', () => {
        expect(uncompress('2c3a1t')).toBe('ccaaat')
        expect(uncompress('4s2b')).toBe('ssssbb')
        expect(uncompress('2p1o5p')).toBe('ppoppppp')
        expect(uncompress('3n12e2z')).toBe('nnneeeeeeeeeeeezz')
        expect(uncompress('127y')).toBe('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
    })
})

describe('compress string', () => {
    test('should return a compressed version of a string', () => {
        expect(compress('ccaaatsss')).toBe('2c3at3s')
        expect(compress('ssssbbz')).toBe('4s2bz')
        expect(compress('ppoppppp')).toBe('2po5p')
        expect(compress('nnneeeeeeeeeeeezz')).toBe('3n12e2z')
        expect(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')).toBe('127y')
    })
})

describe('anagrams', () => {
    test('should return a boolean indicating wether or not the strings are anagrams', () => {
        expect(anagrams('restful', 'fluster')).toBe(true)
        expect(anagrams('cats', 'tocs')).toBe(false)
        expect(anagrams('monkeyswrite', 'newyorktimes')).toBe(true)
        expect(anagrams('paper', 'reapa')).toBe(false)
        expect(anagrams('elbow', 'below')).toBe(true)
        expect(anagrams('tax', 'taxi')).toBe(false)
        expect(anagrams('taxi', 'tax')).toBe(false)
        expect(anagrams('night', 'thing')).toBe(true)
        expect(anagrams('abbc', 'aabc')).toBe(false)
        expect(anagrams('po', 'popp')).toBe(false)
        expect(anagrams('pp', 'oo')).toBe(false)
    })
})

describe('most frequent char in a string', () => {
    test('should return the most frequent char of a string', () => {
        expect(mostFrequentChar('bookeeper')).toBe('e')
        expect(mostFrequentChar('david')).toBe('d')
        expect(mostFrequentChar('abby')).toBe('b')
        expect(mostFrequentChar('mississippi')).toBe('i')
        expect(mostFrequentChar('potato')).toBe('o')
        expect(mostFrequentChar('eleventennine')).toBe('e')
        expect(mostFrequentChar('riverbed')).toBe('r')
    })
})
