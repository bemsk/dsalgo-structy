/*
Write a function, shortestPath, that takes in an array of edges for an undirected graph
and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B.
Consider the length as the number of edges in the path, not the number of nodes.
If there is no path between A and B, then return -1
*/

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = createAdjecencyList(edges)
    const visited = new Set()

    const q = [{n: nodeA, dist: 0}]

    while (q.length > 0) {
        const {n, dist} = q.shift()

        if (n === nodeB) return dist
        visited.add(n)

        for (let neighbor of graph[n]) {
            if (!visited.has(neighbor)) q.push({n: neighbor, dist: dist + 1})
        }
    }

    return -1
}

const createAdjecencyList = (edges) => {
    const graph = {}

    for (let [a, b] of edges) {
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

module.exports = shortestPath