/*
Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column.
In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots.
The function should return a number representing the length of the shortest path
from the starting position to a carrot. You may move up, down, left, or right,
but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.
*/

const closestCarrot = (grid, startRow, startCol) => {
    const visited = new Set()
    const start = generateStringCoordinates(startRow, startCol)
    const q = [{c: start, dist: 0}]

    while (q.length > 0) {
        const {c, dist} = q.shift()
        const [i, j] = c.split('-').map((el) => Number(el))

        if (grid[i][j] === 'C') return dist

        const neighbors = [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]

        for (let [m, n] of neighbors) {
            const coor = generateStringCoordinates(m, n)
            const isValidSpace = isInBound(m, n, grid) && !visited.has(coor) && grid[m][n] !== 'X'

            if (isValidSpace) {
                visited.add(coor)
                q.push({c: coor, dist: dist + 1})
            }
        }
    }

    return -1
}

const isInBound = (i, j, grid) => i >= 0 && j >= 0 && i < grid.length && j < grid[i].length

const generateStringCoordinates = (i, j) => i.toString() + '-' + j.toString()

module.exports = closestCarrot