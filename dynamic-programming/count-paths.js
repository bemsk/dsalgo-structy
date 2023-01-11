/*
Write a function, countPaths, that takes in a grid as an argument.
In the grid, 'X' represents walls and 'O' represents open spaces.
You may only move down or to the right and cannot pass through walls.
The function should return the number of ways possible to travel
from the top-left corner of the grid to the bottom-right corner.
*/

const countPaths = (grid) => {
    const result = _countPaths(0, 0, grid)

    return result
};

const _countPaths = (row, col, grid, memo={}) => {
    const isFinishSpot = (row, col, grid) => row === grid.length - 1  && col === grid[row].length - 1
    const coor = row + '-' + col

    if (isFinishSpot(row, col, grid)) return 1
    if (coor in memo) return memo[coor]

    const moves = [[row + 1, col], [row, col + 1]]
    const isValidMove = (row, col, grid) => {
        return row >= 0 && col >= 0 && row < grid.length && col < grid[row].length && grid[row][col] !== 'X'
    }

    let pathCount = 0

    for (let [a, b] of moves) {
        if (isValidMove(a, b, grid)) pathCount += _countPaths(a, b, grid, memo)
        else pathCount += 0
    }

    memo[coor] = pathCount

    return pathCount
}

module.exports = countPaths