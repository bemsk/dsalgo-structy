/*
Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
The function should return the size of the largest connected component in the graph
*/

const largestComponent = (graph) => {
    let visited = new Set()
    let largest = 0

    for (let node in graph) {
        if (!visited.has(node)) {
            const island = traverseIsland(graph, node)
            largest = island.size > largest ? island.size : largest
            visited = new Set([...island, ...visited])
        }
    }

  return largest
}

const traverseIsland = (graph, src) => {
    const visited = new Set()
    const stack = [src]

    while (stack.length > 0) {
        const visiting = stack.pop()

        visited.add(visiting)

        for (let neighbor of graph[visiting]) {
            if (!visited.has(neighbor)) stack.push(neighbor)
        }
    }

    return visited
}

module.exports = largestComponent