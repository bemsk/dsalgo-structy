const fib = require('../dynamic-programming/fib')
const tribonacci = require('../dynamic-programming/tribonacci')
const sumPossible = require('../dynamic-programming/sum-possible')
const minChange = require('../dynamic-programming/min-change')
const countPaths = require('../dynamic-programming/count-paths')
const maxPathSum = require('../dynamic-programming/max-path-sum')
const nonAdjecentSum = require('../dynamic-programming/non-adjecent-sum')
const summingSquares = require('../dynamic-programming/summing-squares')
const countingChange = require('../dynamic-programming/counting-change')
const arrayStepper = require('../dynamic-programming/array-stepper')
const maxPalinSubsequence = require('../dynamic-programming/max-palin-subsequence')
const overlapSubsequence = require('../dynamic-programming/overlap-subsequence')
const canConcat = require('../dynamic-programming/can-concat')
const quickestConcat = require('../dynamic-programming/quickest-concat')
const knightlyNumber = require('../dynamic-programming/knightly-number')

describe('fib', () => {
    test('should return nth number of the fibonacci sequence', () => {
        expect(fib(0)).toBe(0)
        expect(fib(1)).toBe(1)
        expect(fib(2)).toBe(1)
        expect(fib(3)).toBe(2)
        expect(fib(4)).toBe(3)
        expect(fib(5)).toBe(5)
        expect(fib(35)).toBe(9227465)
        expect(fib(46)).toBe(1836311903)
    })
})

describe('tribonacci', () => {
    test('should returns the n-th number of the Tribonacci sequence', () => {
        expect(tribonacci(0)).toBe(0)
        expect(tribonacci(1)).toBe(0)
        expect(tribonacci(2)).toBe(1)
        expect(tribonacci(5)).toBe(4)
        expect(tribonacci(7)).toBe(13)
        expect(tribonacci(14)).toBe(927)
        expect(tribonacci(20)).toBe(35890)
        expect(tribonacci(37)).toBe(1132436852)
    })
})

describe('sum possible', () => {
    test('should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array', () => {
        expect(sumPossible(8, [5, 12, 4])).toBe(true)
        expect(sumPossible(15, [6, 2, 10, 19])).toBe(false)
        expect(sumPossible(13, [6, 2, 1])).toBe(true)
        expect(sumPossible(103, [6, 20, 1])).toBe(true)
        expect(sumPossible(12, [])).toBe(false)
        expect(sumPossible(12, [12])).toBe(true)
        expect(sumPossible(0, [])).toBe(true)
        expect(sumPossible(271, [10, 8, 265, 24])).toBe(false)
        expect(sumPossible(2017, [4, 2, 10])).toBe(false)
        expect(sumPossible(13, [3, 5])).toBe(true)
    })
})

describe('min change', () => {
    test('should return the minimum number of coins required to create the amount', () => {
        expect(minChange(8, [1, 5, 4, 12])).toBe(2)
        expect(minChange(13, [1, 9, 5, 14, 30])).toBe(5)
        expect(minChange(23, [2, 5, 7])).toBe(4)
        expect(minChange(102, [1, 5, 10, 25])).toBe(6)
        expect(minChange(200, [1, 5, 10, 25])).toBe(8)
        expect(minChange(2017, [4, 2, 10])).toBe(-1)
        expect(minChange(271, [10, 8, 265, 24])).toBe(-1)
        expect(minChange(0, [4, 2, 10])).toBe(0)
        expect(minChange(0, [])).toBe(0)
    })
})

describe('count paths', () => {
    test('should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner', () => {
        const grid = [
            ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
            ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
            ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
            ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
        ]

        expect(countPaths(grid)).toBe(3190434)

        const gridA = [
            ["O", "O", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "X"],
            ["X", "O", "O", "O", "O", "O"],
            ["X", "X", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "X"],
        ]

        expect(countPaths(gridA)).toBe(0)

        const gridB = [
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
        ]

        expect(countPaths(gridB)).toBe(40116600)
    })
})

describe('max path sum', () => {
    test('should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner', () => {
        const grid = [
            [1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 1, 1, 6, 1, 1, 5, 1, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 5, 1, 1, 1, 1, 0, 1, 1, 1, 1],
            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1],
            [2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]

        expect(maxPathSum(grid)).toBe(56)

        const gridA = [
          [1, 2, 8, 1],
          [3, 10, 12, 10],
          [4, 0, 6, 3],
        ]

        expect(maxPathSum(gridA)).toBe(39)
    })
})

describe('non adjecent sum', () => {
    test('should return the maximum sum of non-adjacent elements in the array', () => {

        expect(nonAdjecentSum([2, 4, 5, 12, 7])).toBe(16)
        expect(nonAdjecentSum([7, 5, 5, 12])).toBe(19)
        expect(nonAdjecentSum([7, 5, 5, 12, 17, 29])).toBe(48)
        expect(nonAdjecentSum([
            72, 62, 10,  6, 20, 19, 42,
            46, 24, 78, 30, 41, 75, 38,
            23, 28, 66, 55, 12, 17, 9,
            12, 3, 1, 19, 30, 50, 20
        ])).toBe(488)
        expect(nonAdjecentSum([
            72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
            30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
            83, 80, 56, 68,  6, 22, 56, 96, 77, 98,
            61, 20,  0, 76, 53, 74,  8, 22, 92, 37,
            30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
            72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
            42
        ])).toBe(1465)
    })
})

describe('summing squares', () => {
    test('should return the minimum number of perfect squares that sum to the target', () => {
        expect(summingSquares(8)).toBe(2)
        expect(summingSquares(9)).toBe(1)
        expect(summingSquares(12)).toBe(3)
        expect(summingSquares(1)).toBe(1)
        expect(summingSquares(31)).toBe(4)
        expect(summingSquares(50)).toBe(2)
        expect(summingSquares(68)).toBe(2)
        expect(summingSquares(87)).toBe(4)
    })
})

describe('counting change', () => {
    test('should return the number of different ways it is possible to make change for the given amount using the coins', () => {
        expect(countingChange(4, [1, 2, 3])).toBe(4)
        expect(countingChange(8, [1, 2, 3])).toBe(10)
        expect(countingChange(24, [5, 7, 3])).toBe(5)
        expect(countingChange(13, [2, 6, 12, 10])).toBe(0)
        expect(countingChange(512, [1, 5, 10, 25])).toBe(20119)
        expect(countingChange(1000, [1, 5, 10, 25])).toBe(142511)
        expect(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(1525987916)
    })
})

describe('array stepper', () => {
    test('should return a boolean indicating whether or not it is possible to reach the last position of the array', () => {
        expect(arrayStepper([2, 4, 2, 0, 0, 1])).toBe(true)
        expect(arrayStepper([2, 3, 2, 0, 0, 1])).toBe(false)
        expect(arrayStepper([3, 1, 3, 1, 0, 1])).toBe(true)
        expect(arrayStepper([4, 1, 5, 1, 1, 1, 0, 4])).toBe(true)
        expect(arrayStepper([4, 1, 2, 1, 1, 1, 0, 4])).toBe(false)
        expect(arrayStepper([1, 1, 1, 1, 1, 0])).toBe(true)
        expect(arrayStepper([1, 1, 1, 1, 0, 0])).toBe(false)
        expect(arrayStepper([
            31, 30, 29, 28, 27,
            26, 25, 24, 23, 22,
            21, 20, 19, 18, 17,
            16, 15, 14, 13, 12,
            11, 10, 9, 8, 7, 6,
            5, 3, 2, 1, 0, 0, 0
        ])).toBe(false)
    })
})

describe('max palin subsequence', () => {
    test('should return the length of the longest subsequence of the string that is also a palindrome', () => {
        expect(maxPalinSubsequence("luwxult")).toBe(5)
        expect(maxPalinSubsequence("xyzaxxzy")).toBe(6)
        expect(maxPalinSubsequence("lol")).toBe(3)
        expect(maxPalinSubsequence("boabcdefop")).toBe(3)
        expect(maxPalinSubsequence("z")).toBe(1)
        expect(maxPalinSubsequence("chartreusepugvicefree")).toBe(7)
        expect(maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty")).toBe(15)
        expect(maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe")).toBe(31)
    })
})

describe('overlap subsequence', () => {
    test('should return the length of the longest overlapping subsequence.', () => {
        expect(overlapSubsequence("dogs", "daogt")).toBe(3)
        expect(overlapSubsequence("xcyats", "criaotsi")).toBe(4)
        expect(overlapSubsequence("xfeqortsver", "feeeuavoeqr")).toBe(5)
        expect(overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave")).toBe(11)
        expect(overlapSubsequence(
            "mumblecorebeardleggingsauthenticunicorn",
            "succulentspughumblemeditationlocavore"
        )).toBe(15)
    })
})

describe('can concat', () => {
    test('should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string', () => {
        expect(canConcat("oneisnone", ["one", "none", "is"])).toBe(true)
        expect(canConcat("oneisnone", ["on", "e", "is"])).toBe(false)
        expect(canConcat("oneisnone", ["on", "e", "is", "n"])).toBe(true)
        expect(canConcat("foodisgood", ["is", "g", "ood", "f"])).toBe(true)
        expect(canConcat("santahat", ["santah", "hat"])).toBe(false)
        expect(canConcat("santahat", ["santah", "san", "hat", "tahat"])).toBe(true)
        expect(canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"])).toBe(false)
        expect(canConcat("fooisgood", ["foo", "is", "g", "ood", "f"])).toBe(true)
    })
})

describe('quickest concat', () => {
    test('should return the minimum number of words needed to build the string by concatenating words of the array', () => {
        expect(quickestConcat('caution', ['ca', 'ion', 'caut', 'ut'])).toBe(2)
        expect(quickestConcat('caution', ['ion', 'caut', 'caution'])).toBe(1)
        expect(quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond'])).toBe(4)
        expect(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy', 'ch'])).toBe(3)
        expect(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy'])).toBe(-1)
        expect(quickestConcat('uuuuuu', ['u', 'uu', 'uuu', 'uuuu'])).toBe(2)
        expect(quickestConcat('rongbetty', ['wrong', 'bet'])).toBe(-1)
        expect(quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu'])).toBe(7)
    })
})

describe('knightly number', () => {
    test('should return the number of different ways the knight can move to the target in exactly m moves', () => {
        expect(knightlyNumber(8, 2, 4, 4, 5, 5)).toBe(2)
        expect(knightlyNumber(8, 2, 7, 1, 7, 1)).toBe(3)
        expect(knightlyNumber(8, 2, 5, 4, 5, 4)).toBe(8)
        expect(knightlyNumber(8, 3, 5, 2, 4, 4)).toBe(21)
        expect(knightlyNumber(20, 6, 18, 7, 10, 15)).toBe(60)
        expect(knightlyNumber(20, 12, 8, 3, 9, 14)).toBe(98410127)
        expect(knightlyNumber(8, 2, 0, 0, 1, 1)).toBe(0)
    })
})