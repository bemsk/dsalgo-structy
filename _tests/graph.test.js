const hasPath = require('../graph/has-path.js')
const undirectedPath = require('../graph/undirected-path')
const connectedComponentsCount = require('../graph/connected-components-count')
const largestComponent = require('../graph/largest-component')
const shortestPath = require('../graph/shortest-path')
const islandCount = require('../graph/island-count')
const minimumIsland = require('../graph/minimum-island')
const closestCarrot = require('../graph/closest-carrot')
const longestPath = require('../graph/longest-path')
const semestersRequired = require('../graph/semesters-required')
const bestBridge = require('../graph/best-bridge')
const hasCycle = require('../graph/has-cycle')
const prereqsPossible = require('../graph/prereqs-possible')
const knightAttack = require('../graph/knight-attack')

describe('has path', () => {
    test('should return a boolean indicating whether or not there exists a directed path between the source and destination nodes', () => {
        const graph = {
            f: ['g', 'i'],
            g: ['h'],
            h: [],
            i: ['g', 'k'],
            j: ['i'],
            k: []
        }

        expect(hasPath(graph, 'f', 'k')).toBe(true)
        expect(hasPath(graph, 'f', 'j')).toBe(false)
        expect(hasPath(graph, 'i', 'h')).toBe(true)

        const graphA = {
            v: ['x', 'w'],
            w: [],
            x: [],
            y: ['z'],
            z: [],
        }

        expect(hasPath(graphA, 'v', 'w')).toBe(true)
        expect(hasPath(graphA, 'v', 'z')).toBe(false)
    })
})

describe('undirected path', () => {
    test('should return a boolean indicating whether or not there exists a path between nodeA and nodeB', () => {
        const edges = [
            ['i', 'j'],
            ['k', 'i'],
            ['m', 'k'],
            ['k', 'l'],
            ['o', 'n']
        ]

        expect(undirectedPath(edges, 'j', 'm')).toBe(true)
        expect(undirectedPath(edges, 'm', 'j')).toBe(true)
        expect(undirectedPath(edges, 'l', 'j')).toBe(true)
        expect(undirectedPath(edges, 'k', 'o')).toBe(false)
        expect(undirectedPath(edges, 'i', 'o')).toBe(false)

        const edgesA = [
            ['b', 'a'],
            ['c', 'a'],
            ['b', 'c'],
            ['q', 'r'],
            ['q', 's'],
            ['q', 'u'],
            ['q', 't'],
        ]

        expect(undirectedPath(edgesA, 'a', 'b')).toBe(true)
        expect(undirectedPath(edgesA, 'a', 'c')).toBe(true)
        expect(undirectedPath(edgesA, 'r', 't')).toBe(true)
        expect(undirectedPath(edgesA, 'r', 'b')).toBe(false)

        const edgesB = [
            ['s', 'r'],
            ['t', 'q'],
            ['q', 'r'],
        ]

        expect(undirectedPath(edgesB, 'r', 't')).toBe(true)
    })
})

describe('connected components count', () => {
    test('should return the number of connected components within the graph', () => {

        expect(connectedComponentsCount({
            0: [8, 1, 5],
            1: [0],
            5: [0, 8],
            8: [0, 5],
            2: [3, 4],
            3: [2, 4],
            4: [3, 2]
        })).toBe(2)

        expect(connectedComponentsCount({
            0: [4,7],
            1: [],
            2: [],
            3: [6],
            4: [0],
            6: [3],
            7: [0],
            8: []
        })).toBe(5)

        expect(connectedComponentsCount({})).toBe(0)
    })
})

describe('largest component', () => {
    test('should return the size of the largest connected component in the graph', () => {

        expect(largestComponent({
            0: ['8', '1', '5'],
            1: ['0'],
            5: ['0', '8'],
            8: ['0', '5'],
            2: ['3', '4'],
            3: ['2', '4'],
            4: ['3', '2']
        })).toBe(4)

        expect(largestComponent({
            0: ['4','7'],
            1: [],
            2: [],
            3: ['6'],
            4: ['0'],
            6: ['3'],
            7: ['0'],
            8: []
        })).toBe(3)

        expect(largestComponent({})).toBe(0)
    })
})

describe('shortest path', () => {
    test('should return the length of the shortest path between A and B', () => {
        const edges = [
            ['w', 'x'],
            ['x', 'y'],
            ['z', 'y'],
            ['z', 'v'],
            ['w', 'v']
        ]

        expect(shortestPath(edges, 'w', 'z')).toBe(2)
        expect(shortestPath(edges, 'y', 'x')).toBe(1)

        const edgesA = [
            ['a', 'c'],
            ['a', 'b'],
            ['c', 'b'],
            ['c', 'd'],
            ['b', 'd'],
            ['e', 'd'],
            ['g', 'f']
        ]

        expect(shortestPath(edgesA, 'a', 'e')).toBe(3)
        expect(shortestPath(edgesA, 'e', 'c')).toBe(2)
        expect(shortestPath(edgesA, 'b', 'g')).toBe(-1)
    })
})

describe('island-count', () => {
    test('should return the number of islands on the grid', () => {
        const gridA = [
            ['W', 'L', 'W', 'W', 'W'],
            ['W', 'L', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'L', 'W'],
            ['W', 'W', 'L', 'L', 'W'],
            ['L', 'W', 'W', 'L', 'L'],
            ['L', 'L', 'W', 'W', 'W'],
        ]

        expect(islandCount(gridA)).toBe(3)

        const gridB = [
            ['L', 'W', 'W', 'L', 'W'],
            ['L', 'W', 'W', 'L', 'L'],
            ['W', 'L', 'W', 'L', 'W'],
            ['W', 'W', 'W', 'W', 'W'],
            ['W', 'W', 'L', 'L', 'L'],
        ]

        expect(islandCount(gridB)).toBe(4)

        const gridC = [
            ['L', 'L', 'L'],
            ['L', 'L', 'L'],
            ['L', 'L', 'L'],
        ]

        expect(islandCount(gridC)).toBe(1)

        const gridD = [
            ['W', 'W'],
            ['W', 'W'],
            ['W', 'W'],
        ]

        expect(islandCount(gridD)).toBe(0)
    })
})

describe('minimum island', () => {
    test('should return the size of the smallest island', () => {
        const gridA = [
            ['W', 'L', 'W', 'W', 'W'],
            ['W', 'L', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'L', 'W'],
            ['W', 'W', 'L', 'L', 'W'],
            ['L', 'W', 'W', 'L', 'L'],
            ['L', 'L', 'W', 'W', 'W'],
        ]

        expect(minimumIsland(gridA)).toBe(2)

        const gridB = [
            ['L', 'W', 'W', 'L', 'W'],
            ['L', 'W', 'W', 'L', 'L'],
            ['W', 'L', 'W', 'L', 'W'],
            ['W', 'W', 'W', 'W', 'W'],
            ['W', 'W', 'L', 'L', 'L'],
        ]

        expect(minimumIsland(gridB)).toBe(1)

        const gridC = [
            ['L', 'L', 'L'],
            ['L', 'L', 'L'],
            ['L', 'L', 'L'],
        ]

        expect(minimumIsland(gridC)).toBe(9)

        const gridD = [
            ['W', 'W'],
            ['L', 'L'],
            ['W', 'W'],
            ['W', 'L']
        ]

        expect(minimumIsland(gridD)).toBe(1)
    })
})

describe('closest carrot', () => {
    test('should return a number representing the length of the shortest path from the starting position to a carrot', () => {
        const grid = [
            ['O', 'O', 'O', 'O', 'O'],
            ['O', 'X', 'O', 'O', 'O'],
            ['O', 'X', 'X', 'O', 'O'],
            ['O', 'X', 'C', 'O', 'O'],
            ['O', 'X', 'X', 'O', 'O'],
            ['C', 'O', 'O', 'O', 'O'],
        ]

        expect(closestCarrot(grid, 1, 2)).toBe(4)

        const gridA = [
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
        ]

        expect(closestCarrot(gridA, 0, 0)).toBe(-1)
    })
})

describe('longest path', () => {
    test('should return the length of the longest path within the graph', () => {
        const graph = {
            a: ['b'],
            b: ['c'],
            c: [],
            e: ['f'],
            f: ['g'],
            g: ['h'],
            h: []
        }

        expect(longestPath(graph)).toBe(3)

        const graphB = {
            a: ['c', 'b'],
            b: ['c'],
            c: [],
            q: ['r'],
            r: ['s', 'u', 't'],
            s: ['t'],
            t: ['u'],
            u: []
        }

        expect(longestPath(graphB)).toBe(4)
    })
})

describe('semester required', () => {
    test('should return the minimum number of semesters required to complete all n courses', () => {
        const prereqs = [
            [4, 3],
            [3, 2],
            [2, 1],
            [1, 0],
            [5, 2],
            [5, 6],
        ]

        expect(semestersRequired(7, prereqs)).toBe(5)

        const prereqsA = []

        expect(semestersRequired(12, prereqsA)).toBe(1)
    })
})

describe('best bridge', () => {
    test('should return the minimum length bridge needed to connect the two islands', () => {
        const grid = [
            ["W", "L", "W", "W", "W", "W", "W", "W"],
            ["W", "L", "W", "W", "W", "W", "W", "W"],
            ["W", "W", "W", "W", "W", "W", "W", "W"],
            ["W", "W", "W", "W", "W", "W", "W", "W"],
            ["W", "W", "W", "W", "W", "W", "W", "W"],
            ["W", "W", "W", "W", "W", "W", "L", "W"],
            ["W", "W", "W", "W", "W", "W", "L", "L"],
            ["W", "W", "W", "W", "W", "W", "W", "L"],
        ]

        expect(bestBridge(grid)).toBe(8)

        const gridB = [
            ["W", "W", "W", "W", "W", "W", "W", "W"],
            ["W", "W", "W", "W", "W", "W", "W", "W"],
            ["W", "W", "W", "W", "W", "W", "W", "W"],
            ["W", "W", "W", "W", "W", "L", "W", "W"],
            ["W", "W", "W", "W", "L", "L", "W", "W"],
            ["W", "W", "W", "W", "L", "L", "L", "W"],
            ["W", "W", "W", "W", "W", "L", "L", "L"],
            ["L", "W", "W", "W", "W", "L", "L", "L"],
            ["L", "L", "L", "W", "W", "W", "W", "W"],
            ["W", "W", "W", "W", "W", "W", "W", "W"],
        ]

        expect(bestBridge(gridB)).toBe(3)
    })
})

describe('has cycle', () => {
    test('should return a boolean indicating whether or not the graph contains a cycle', () => {
        expect(hasCycle({
            a: ["b", "c"],
            b: ["c"],
            c: ["d"],
            d: [],
        })).toBe(false)

        expect(hasCycle({
            q: ["r", "s"],
            r: ["t", "u"],
            s: [],
            t: [],
            u: [],
            v: ["w"],
            w: [],
            x: ["w"],
        })).toBe(false)

        expect(hasCycle({
            a: ["b", "c"],
            b: [],
            c: [],
            e: ["f"],
            f: ["e"],
        })).toBe(true)
    })
})

describe('prereqs possible', () => {
    test('should return a boolean indicating whether or not it is possible to complete all courses', () => {
        const prereqs = [
            [1, 0],
            [0, 6],
            [2, 0],
            [0, 5],
            [3, 7],
            [4, 3],
        ]
        expect(prereqsPossible(8, prereqs)).toBe(true)

        const prereqsA = [
            [1, 0],
            [0, 6],
            [2, 0],
            [0, 5],
            [3, 7],
            [7, 4],
            [4, 3],
        ]
        expect(prereqsPossible(8, prereqsA)).toBe(false)

        const prereqsB = [[6, 36]]
        expect(prereqsPossible(2, prereqsB)).toBe(true)
    })
})

describe('knight attack', () => {
    test('should return a number representing the minimum number of moves required for the knight to land ontop of the pawn', () => {
        expect(knightAttack(8, 1, 1, 2, 2)).toBe(2)
        expect(knightAttack(8, 1, 1, 2, 3)).toBe(1)
        expect(knightAttack(8, 0, 3, 4, 2)).toBe(3)
        expect(knightAttack(8, 0, 3, 5, 2)).toBe(4)
        expect(knightAttack(24, 4, 7, 19, 20)).toBe(10)
        expect(knightAttack(100, 21, 10, 0, 0)).toBe(11)
        expect(knightAttack(3, 0, 0, 1, 2)).toBe(1)
        expect(knightAttack(3, 0, 0, 1, 1)).toBe(null)
    })
})