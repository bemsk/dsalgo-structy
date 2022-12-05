/*
Write a function, connectedComponentsCount,
that takes in the adjacency list of an undirected graph.
The function should return the number of connected components within the graph.
*/

const connectedComponentsCount = (graph) => {
    let count = 0
    let visited = new Set()

    // change everything to string, so not confuse the key of the graph (which is a string)
    // and its neighbor (which is a number)
    for (let node in graph) {
        graph[node] = graph[node].map((el) => el.toString())
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            visited = new Set([...traverseIsland(graph, node), ...visited])
            count++
        }
    }

    return count
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

module.exports = connectedComponentsCount