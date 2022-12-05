/*
Write a function, semestersRequired, that takes in a number of courses (n)
and a list of prerequisites as arguments.
Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means
that course A must be taken before course B. Return the minimum number of semesters required
to complete all n courses. There is no limit on how many courses you can take in a single semester,
as long the prerequisites of a course are satisfied before taking it.

Note that given prerequisite [A, B], you cannot take course A and course B
concurrently in the same semester. You must take A in some semester before B.

You can assume that it is possible to eventually complete all courses.
*/

const semestersRequired = (numCourses, prereqs) => {
    const graph = createAdjecencyList(prereqs)

    let rs = 1

    for (let node in graph) {
        const stack = [{n: node, c: 1}]

        while (stack.length > 0) {
            const {n, c} = stack.pop()

            if (c > rs) rs = c

            for (let neighbor of graph[n]) stack.push({n: neighbor, c: c + 1})
        }
    }

    return rs
}

const createAdjecencyList = (edges) => {
    const graph = {}

    for (let [pre, course] of edges) {
        if (!(pre in graph)) graph[pre] = []
        if (!(course in graph)) graph[course] = []

        graph[pre].push(course.toString())
    }

    return graph
}

module.exports = semestersRequired