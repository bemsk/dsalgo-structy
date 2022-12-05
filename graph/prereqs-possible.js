/*
Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments.
Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B]
means that course A must be taken before course B.

The function should return a boolean indicating whether or not it is possible to complete all courses.
*/

const prereqsPossible = (numCourses, prereqs) => {
    const graph = createAdjecencyList(prereqs)

    let completed = new Set()

    for (let node in graph) {
        let inProgress = new Set()
        const stack = [node]

        while (stack.length > 0) {
            const current = stack.pop()

            if (completed.has(current)) continue
            if (inProgress.has(current)) return false

            inProgress.add(current)

            if (graph[current].length === 0) {
                completed = new Set([...completed, ...inProgress])
                inProgress = new Set()
            }

            for (let neighbor of graph[current]) {
                stack.push(neighbor)
            }
        }
    }

    return true
}

const createAdjecencyList = (edges) => {
    const graph = {}

    for (let [pre, course] of edges) {
        if (!(pre in graph)) graph[pre] = []
        if (!(course in graph)) graph[course] = []

        graph[pre].push(course)
    }

    return graph
}

module.exports = prereqsPossible
