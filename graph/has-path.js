/*
Write a function, hasPath, that takes in an object
representing the adjacency list of a directed acyclic graph and two nodes (src, dst).
The function should return a boolean indicating whether or not there exists
a directed path between the source and destination nodes
*/

const hasPath = (graph, src, dst) => {
    const stack = [src]

    while (stack.length > 0) {
        const visiting = stack.pop()

        if (visiting === dst) return true

        for (neighbor of graph[visiting]) {
            stack.push(neighbor)
        }
    }

    return false
}

module.exports = hasPath