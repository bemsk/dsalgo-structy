/*
Write a function, undirectedPath, that takes in an array of edges for an undirected graph
and two nodes (nodeA, nodeB). The function should return a boolean indicating
whether or not there exists a path between nodeA and nodeB
*/

const createAdjecencyList = (edges) => {
    const graph = {}

    for (let [a, b] of edges) {
        if (a in graph) graph[a].push(b)
        else graph[a] = [b]

        if (b in graph) graph[b].push(a)
        else graph[b] = [a]
    }

    return graph
}

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = createAdjecencyList(edges)
    const visited = new Set()

    const stack = [nodeA]

    while (stack.length > 0) {
        const visiting = stack.pop()

        visited.add(visiting)
        if (visiting === nodeB) return true

        for (let neighbor of graph[visiting]) {
            if (!visited.has(neighbor)) stack.push(neighbor)
        }
    }

    return false
}

module.exports = undirectedPath