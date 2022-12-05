const pairSum = require('../array/pair-sum.js')
const pairProduct = require('../array/pair-product')
const intersection = require('../array/intersection')
const fiveSort = require('../array/five-sort')

describe('pair sum', () => {
    test('should return an array containing a pair of indices whose elements sum to the given target', () => {
        expect(pairSum([3, 2, 5, 4, 1], 8)).toStrictEqual([0, 2])
        expect(pairSum([4, 7, 9, 2, 5, 1], 5)).toStrictEqual([0, 5])
        expect(pairSum([4, 7, 9, 2, 5, 1], 3)).toStrictEqual([3, 5])
        expect(pairSum([1, 6, 7, 2], 13)).toStrictEqual([1, 2])
        expect(pairSum([9, 9], 18)).toStrictEqual([0, 1])
        expect(pairSum([6, 4, 2, 8 ], 12)).toStrictEqual([1, 3])
    })
})

describe('pair product', () => {
    test('should return an array containing a pair of indices whose elements multiply to the given target', () => {
        expect(pairProduct([3, 2, 5, 4, 1], 8)).toStrictEqual([1, 3])
        expect(pairProduct([3, 2, 5, 4, 1], 10)).toStrictEqual([1, 2])
        expect(pairProduct([4, 7, 9, 2, 5, 1], 5)).toStrictEqual([4, 5])
        expect(pairProduct([4, 7, 9, 2, 5, 1], 35)).toStrictEqual([1, 4])
        expect(pairProduct([3, 2, 5, 4, 1], 10)).toStrictEqual([1, 2])
        expect(pairProduct([4, 6, 8, 2], 16)).toStrictEqual([2, 3])
    })
})

describe('intersection', () => {
    test('should return a new array containing elements that are in both of the two arrays', () => {
        const a = []
        const b = []

        for (let i = 0; i < 50000; i++) {
            a.push(i)
            b.push(i)
        }

        expect(intersection([4,2,1,6], [3,6,9,2,10]).sort()).toStrictEqual([2,6])
        expect(intersection([2,4,6], [4,2]).sort()).toStrictEqual([2,4])
        expect(intersection([4,2,1], [1,2,4,6]).sort()).toStrictEqual([1,2,4])
        expect(intersection([0,1,2], [10,11]).sort()).toStrictEqual([])
        expect(intersection(a, b)).toStrictEqual(a)
    })
})

describe('five sort', () => {
    test('should rearrange elements of the array such that all 5s appear at the end', () => {
        const fives = new Array(20000).fill(5)
        const fours = new Array(20000).fill(4)
        const nums = [...fives, ...fours]

        expect(fiveSort([12, 5, 1, 5, 12, 7])).toStrictEqual([12, 7, 1, 12, 5, 5])
        expect(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])).toStrictEqual([2, 2, 10, 6, 1, 5, 5, 5, 5, 5])
        expect(fiveSort([5, 5, 5, 1, 1, 1, 4])).toStrictEqual([4, 1, 1, 1, 5, 5, 5])
        expect(fiveSort([5, 5, 6, 5, 5, 5, 5])).toStrictEqual([6, 5, 5, 5, 5, 5, 5])
        expect(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5])).toStrictEqual([4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5])
        expect(fiveSort(nums)).toStrictEqual([...fours, ...fives])
    })
})

