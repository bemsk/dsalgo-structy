/*
Write a function, maxPathSum, that takes in a grid as an argument.
The function should return the maximum sum possible by traveling a path from the top-left corner
to the bottom-right corner. You may only travel through the grid by moving down or right.

You can assume that all numbers are non-negative.
*/

const maxPathSum = (grid) => {
    const result = _maxPathSum(0, 0, grid)
    return result
}

const _maxPathSum = (row, col, grid, memo={}) => {
    if (row === grid.length - 1 && col === grid[row].length - 1) return grid[row][col]

    const c = row + '-' + col
    if (c in memo) return memo[c]

    const current = grid[row][col]
    const moves = [[row + 1, col], [row, col + 1]]
    const isValidPath = (row, col, grid) => row >= 0 && col >= 0 && row < grid.length && col < grid[row].length

    let max = -1
    for (let [a, b] of moves) {
        if (isValidPath(a, b, grid)) max = Math.max(max, _maxPathSum(a, b, grid, memo) + current)
    }

    memo[c] = max
    return max
}

module.exports = maxPathSum