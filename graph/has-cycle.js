/*
Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph.
The function should return a boolean indicating whether or not the graph contains a cycle.
*/

const hasCycle = (graph) => {
    let black = new Set() // completed

    for (let node in graph) {
        let grey = new Set() // in progress
        const stack = [node]

        while (stack.length > 0) {
            const visiting = stack.pop()

            if (black.has(visiting)) continue

            if (grey.has(visiting)) return true

            grey.add(visiting)

        // end of path
            if (graph[visiting].length === 0) {
                black = new Set([...black, ...grey])
                grey = new Set([])
            }

            for (let neighbor of graph[visiting]) {
                stack.push(neighbor)
            }
        }
    }

    return false
}

module.exports = hasCycle