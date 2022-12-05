/*
Write a function, arrayStepper, that takes in an array of numbers as an argument.
You start at the first position of the array.
The function should return a boolean
indicating whether or not it is possible to reach the last position of the array.
When situated at some position of the array,
you may take a maximum number of steps based on the number at that position.
*/

const arrayStepper = (nums, i = 0, memo={}) => {
    if (i >= nums.length - 1) return true

    if (i in memo) return memo[i]

    const maxStep = nums[i]

    for (let j = 1; j <= maxStep; j++) {
        const result = arrayStepper(nums, i + j, memo)

        if (result) {
            memo[i] = true
            return true
        }
    }

    memo[i] = false

    return false
}

module.exports = arrayStepper