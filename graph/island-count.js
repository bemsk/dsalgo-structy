/*
Write a function, islandCount, that takes in a grid containing Ws and Ls.
W represents water and L represents land.
The function should return the number of islands on the grid.
An island is a vertically or horizontally connected region of land.
*/

const islandCount = (grid) => {
    let visited = new Set()
    let count = 0

    //travel the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const coor = generateStringCoordinates(i, j)
            const type = grid[i][j]
            const isExplorable = !visited.has(coor) && type === 'L'

            if (isExplorable) { //explore island
                const island = exploreIsland(grid, coor)
                visited = new Set([...island, ...visited])
                count++
            }
        }
    }

    return count
}

const generateStringCoordinates = (i, j) => {
    return i.toString() + '-' + j.toString()
}

const isInBound = (i, j, grid) => {
    return i >= 0 && j >= 0 && i < grid.length && j <= grid[i].length
}

const exploreIsland = (grid, start) => {
    const visited = new Set()
    const q = [start]

    while (q.length > 0) {
        const visiting = q.shift()
        const [i, j] = visiting.split('-').map((el) => Number(el))
        const neighbors = [[i - 1, j], [i + 1, j], [i, j + 1], [i, j - 1]]

        visited.add(visiting)

        for (let [m, n] of neighbors) {
            const coor = generateStringCoordinates(m, n)
            const isValidLand = isInBound(m, n, grid) && grid[m][n] === 'L' && !visited.has(coor)
            if (isValidLand) q.push(coor)
        }
    }

    return visited
}

module.exports = islandCount