const pairedParentheses = require('../stack/paired-parentheses')
const befittingBrackets = require('../stack/befitting-brackets')
const decompressBraces = require('../stack/decompress-braces')
const nestingScore = require('../stack/nesting-score')

describe('paired parentheses', () => {
    test('should return a boolean indicating whether or not the string has well-formed parentheses', () => {
        expect(pairedParentheses("(david)((abby))")).toBe(true)
        expect(pairedParentheses("()rose(jeff")).toBe(false)
        expect(pairedParentheses(")(")).toBe(false)
        expect(pairedParentheses("()")).toBe(true)
        expect(pairedParentheses("(((potato())))")).toBe(true)
        expect(pairedParentheses("(())(water)()")).toBe(true)
        expect(pairedParentheses("(())(water()()")).toBe(false)
        expect(pairedParentheses("")).toBe(true)
        expect(pairedParentheses("))()")).toBe(false)
    })
})

describe('befitting brackets', () => {
    test('should return a boolean indicating whether or not the string contains correctly matched brackets', () => {
        expect(befittingBrackets('(){}[](())')).toBe(true)
        expect(befittingBrackets('({[]})')).toBe(true)
        expect(befittingBrackets('[][}')).toBe(false)
        expect(befittingBrackets('{[]}({}')).toBe(false)
        expect(befittingBrackets('[]{}(}[]')).toBe(false)
        expect(befittingBrackets('[]{}()[]')).toBe(true)
        expect(befittingBrackets(']{}')).toBe(false)
        expect(befittingBrackets('')).toBe(true)
        expect(befittingBrackets('{[(}])')).toBe(false)
    })
})

describe('decompress brackets', () => {
    test('should return the string decompressed', () => {
        expect(decompressBraces("2{q}3{tu}v")).toBe('qqtututuv')
        expect(decompressBraces("ch3{ao}")).toBe('chaoaoao')
        expect(decompressBraces("2{y3{o}}s")).toBe('yoooyooos')
        expect(decompressBraces("z3{a2{xy}b}")).toBe('zaxyxybaxyxybaxyxyb')
        expect(decompressBraces("2{3{r4{e}r}io}")).toBe('reeeerreeeerreeeerioreeeerreeeerreeeerio')
        expect(decompressBraces("go3{spinn2{ing}s}")).toBe('gospinningingsspinningingsspinningings')
        expect(decompressBraces("2{l2{if}azu}l")).toBe('lififazulififazul')
        expect(decompressBraces("3{al4{ec}2{icia}}")).toBe('alececececiciaiciaalececececiciaiciaalececececiciaicia')
    })
})

describe('nesting score', () => {
    test('should return the score of the string according to the following rules', () => {
        expect(nestingScore("[]")).toBe(1)
        expect(nestingScore("[][][]")).toBe(3)
        expect(nestingScore("[[]]")).toBe(2)
        expect(nestingScore("[[][]]")).toBe(4)
        expect(nestingScore("[[][][]]")).toBe(6)
        expect(nestingScore("[[][]][]")).toBe(5)
        expect(nestingScore("[][[][]][[]]")).toBe(7)
        expect(nestingScore("[[[[[[[][]]]]]]][]")).toBe(129)
    })
})