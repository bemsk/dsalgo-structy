/*
Write a function, bestBridge, that takes in a grid as an argument.
The grid contains water (W) and land (L). There are exactly two islands in the grid.
An island is a vertically or horizontally connected region of land.
Return the minimum length bridge needed to connect the two islands.
A bridge does not need to form a straight line.
*/

const bestBridge = (grid) => {
    // find first island
    // explore water area starting from each coordinate of the first island
    // to second island (set of L not belonging to first island),
    // count the distance (water node count), and find the minimum

    let minBridgeDist = Infinity
    const firstIsland = findIsland(grid) // return set

    for (let coor of firstIsland) {
        const [i, j] = coor.split('-').map((el) => Number(el))
        const neighbors = generateNeighbors(i, j, grid)

        for (let [m, n] of neighbors) {
            const isValidWater = grid[m][n] === 'W'
            if (isValidWater) {
                const minDistanceToNextIsland = exploreMinDistanceToNextIsland(m, n, grid, firstIsland)
                minBridgeDist = minDistanceToNextIsland < minBridgeDist ? minDistanceToNextIsland : minBridgeDist
            }
        }
    }

    return minBridgeDist
}

const exploreMinDistanceToNextIsland = (row, col, grid, firstIsland) => {
    const visited = new Set()
    const coor = generateCoor(row, col)
    const q = [{node: coor, dist: 1}]
    let min = Infinity


    while (q.length > 0) {
        const {node, dist} = q.shift()
        const [i, j] = node.split('-').map((el) => Number(el))

        visited.add(node)

        const neighbors = generateNeighbors(i, j, grid)

        for (let [m, n] of neighbors) {
            const c = generateCoor(m, n)
            if (grid[m][n] === 'W' && !visited.has(c)) q.push({node: c, dist: dist + 1})
            if (grid[m][n] === 'L' && !firstIsland.has(c) && dist < min) min = dist
        }
    }

    return min
}

const findIsland = (grid) => {
    const island = new Set()
    const startingCoordinates = (() => {
        for (let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 'L') {
                    return generateCoor(i, j)
                }
            }
        }
    })()

    const q = [startingCoordinates]

    while (q.length > 0) {
        const visiting = q.shift()
        const [i, j] = visiting.split('-').map((el) => Number(el))

        island.add(visiting)
        const neighbors = generateNeighbors(i, j, grid)

        for (let [m, n] of neighbors) {
            const coor = generateCoor(m, n)
            if (grid[m][n] === 'L' && !island.has(coor)) q.push(coor)
        }
    }

    return island
}

const generateCoor = (i, j) => i.toString() + '-' + j.toString()
const generateNeighbors = (i, j, grid) => {
    const potentialNeighbors = [[i - 1, j], [i + 1, j], [i, j + 1], [i, j - 1]]
    const validNeighbors = potentialNeighbors.filter(([m, n]) => {
        return m >= 0 && n >= 0 && m < grid.length && n < grid[m].length
    })

    return validNeighbors
}

module.exports = bestBridge