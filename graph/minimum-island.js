/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls.
W represents water and L represents land. The function should return the size of the smallest island.
An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
*/

const minimumIsland = (grid) => {
    let visited = new Set()
    let min = Infinity

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const coor = generateStringCoordinates(i, j)

            if (!visited.has(coor) && grid[i][j] === 'L') {
                const island = exploreIsland(grid, coor)

                min = island.size < min ? island.size : min
                visited = new Set([...island, ...visited])
            }
        }
    }

    return min
}

const exploreIsland = (grid, start) => {
    const visited = new Set()
    const q = [start]

    while (q.length > 0) {
        const visiting = q.shift()
        const [i, j] = visiting.split('-').map((el) => Number(el))
        const neighbors = [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]

        visited.add(visiting)

        for (let [m, n] of neighbors) {
            const coor = generateStringCoordinates(m, n)
            const isValidLand = isInBound(m, n, grid) && !visited.has(coor) && grid[m][n] === 'L'

            if (isValidLand) q.push(coor)
        }
    }

    return visited
}

const isInBound = (i, j, grid) => {
    return i >= 0 && j >= 0 && i < grid.length && j < grid[i].length
}

const generateStringCoordinates = (i, j) => i.toString() + '-' + j.toString()

module.exports = minimumIsland