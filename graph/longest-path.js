/*
Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph.
The function should return the length of the longest path within the graph.
A path may start and end at any two nodes.
The length of a path is considered the number of edges in the path, not the number of nodes.
*/

const longestPath = (graph) => {
    let longest = 0

    for (let node in graph) {
        const stack = [{n: node, dist: 0}]

        while (stack.length > 0) {
            const {n, dist} = stack.pop()

            if (dist > longest) longest = dist

            for (let neighbor of graph[n]) {
                stack.push({n: neighbor, dist: dist + 1})
            }
        }
    }

    return longest
}

module.exports = longestPath