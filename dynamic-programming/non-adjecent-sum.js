/*
Write a function, nonAdjacentSum, that takes in an array of numbers as an argument.
The function should return the maximum sum of non-adjacent elements in the array.
There is no limit on how many elements can be taken into the sum as long as they are not adjacent.
*/

const nonAdjacentSum = (nums, memo={}) => {
    if (nums.length === 0) return 0

    const numbers = nums.join('-')

    if (numbers in memo) return memo[numbers]

    const first = nums[0] + nonAdjacentSum(nums.slice(2), memo)
    const rest = nonAdjacentSum(nums.slice(1), memo)

    memo[numbers] = Math.max(first, rest)
    return memo[numbers]
}

module.exports = nonAdjacentSum