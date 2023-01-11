const Node = require('../_bin/binary-tree')

const depthFirstValues = require('../binary-tree/depth-first-values')
const breadthFirstValues = require('../binary-tree/breadth-first-values')
const treeSum = require('../binary-tree/tree-sum')
const treeIncludes = require('../binary-tree/tree-includes')
const treeMinValue = require('../binary-tree/tree-min-value')
const maxPathSum = require('../binary-tree/max-path-sum')
const pathFinder = require('../binary-tree/path-finder')
const treeValueCount = require('../binary-tree/tree-value-count')
const howHigh = require('../binary-tree/how-high')
const bottomRightValue = require('../binary-tree/bottom-right-value')
const allTreePaths = require('../binary-tree/all-tree-paths')
const treeLevels = require('../binary-tree/tree-levels')
const levelAverages = require('../binary-tree/level-averages')
const leafList = require('../binary-tree/leaf-list')

describe('depth first value', () => {
    test('should return an array containing all values of the tree in depth-first order', () => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        const d = new Node('d')
        const e = new Node('e')
        const f = new Node('f')

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(depthFirstValues(a)).toStrictEqual(['a', 'b', 'd', 'e', 'c', 'f'])

        const a1 = new Node('a')
        const b1 = new Node('b')
        const c1 = new Node('c')
        const d1 = new Node('d')
        const e1 = new Node('e')
        const f1 = new Node('f')
        const g1 = new Node('g')

        a1.left = b1
        a1.right = c1
        b1.left = d1
        b1.right = e1
        c1.right = f1
        e1.left = g1

        expect(depthFirstValues(a1)).toStrictEqual(['a', 'b', 'd', 'e', 'g', 'c', 'f'])

        const a3 = new Node('a')
        const b3 = new Node('b')
        const c3 = new Node('c')
        const d3 = new Node('d')
        const e3 = new Node('e')

        a3.right = b3
        b3.left = c3
        c3.right = d3
        d3.right = e3

        expect(depthFirstValues(a3)).toStrictEqual(['a', 'b', 'c', 'd', 'e'])

        expect(depthFirstValues(null)).toStrictEqual([])
    })
})

describe('breadth first values', () => {
    test('should return an array containing all values of the tree in breadth-first order', () => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        const d = new Node('d')
        const e = new Node('e')
        const f = new Node('f')

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(breadthFirstValues(a)).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f'])

        const a1 = new Node('a')
        const b1 = new Node('b')
        const c1 = new Node('c')
        const d1 = new Node('d')
        const e1 = new Node('e')
        const f1 = new Node('f')
        const g1 = new Node('g')
        const h1 = new Node('h')

        a1.left = b1
        a1.right = c1
        b1.left = d1
        b1.right = e1
        c1.right = f1
        e1.left = g1
        f1.right = h1

        expect(breadthFirstValues(a1)).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])

        const a2 = new Node('a')
        const b2 = new Node('b')
        const c2 = new Node('c')
        const d2 = new Node('d')
        const e2 = new Node('e')
        const x2 = new Node('x')

        a2.right = b2
        b2.left = c2
        c2.left = x2
        c2.right = d2
        d2.right = e2

        expect(breadthFirstValues(a2)).toStrictEqual(['a', 'b', 'c', 'x', 'd', 'e'])
        expect(breadthFirstValues(null)).toStrictEqual([])
    })
})

describe('tree sum', () => {
    test('should return the total sum of all values in the tree', () => {
        const a = new Node(3)
        const b = new Node(11)
        const c = new Node(4)
        const d = new Node(4)
        const e = new Node(-2)
        const f = new Node(1)

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(treeSum(a)).toBe(21)
        expect(treeSum(null)).toBe(0)
    })
})

describe('tree includes', () => {
    test('should return a boolean indicating whether or not the value is contained in the tree', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        const d = new Node("d")
        const e = new Node("e")
        const f = new Node("f")

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(treeIncludes(a, "e")).toBe(true)
        expect(treeIncludes(a, "n")).toBe(false)
        expect(treeIncludes(null, "b")).toBe(false)
    })
})

describe('tree min value', () => {
    const a = new Node(3)
    const b = new Node(11)
    const c = new Node(4)
    const d = new Node(4)
    const e = new Node(-2)
    const f = new Node(1)

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f

    expect(treeMinValue(a)).toBe(-2)

    const a1 = new Node(5)
    const b1 = new Node(11)
    const c1 = new Node(3)
    const d1 = new Node(4)
    const e1 = new Node(14)
    const f1 = new Node(12)

    a1.left = b1
    a1.right = c1
    b1.left = d1
    b1.right = e1
    c1.right = f1

    expect(treeMinValue(a1)).toBe(3)

    const a2 = new Node(42)

    expect(treeMinValue(a2)).toBe(42)
})

describe('max path to leaf sum', () => {
    test('should return the maximum sum of any root to leaf path within the tree', () => {
        const a = new Node(3)
        const b = new Node(11)
        const c = new Node(4)
        const d = new Node(4)
        const e = new Node(-2)
        const f = new Node(1)

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(maxPathSum(a)).toBe(18)

        const a1 = new Node(-1)
        const b1 = new Node(-6)
        const c1 = new Node(-5)
        const d1 = new Node(-3)
        const e1 = new Node(0)
        const f1 = new Node(-13)
        const g1 = new Node(-1)
        const h1 = new Node(-2)

        a1.left = b1
        a1.right = c1
        b1.left = d1
        b1.right = e1
        c1.right = f1
        e1.left = g1
        f1.right = h1

        expect(maxPathSum(a1)).toBe(-8)

        const a2 = new Node(42)

        expect(maxPathSum(a2)).toBe(42)
    })
})

describe('tree path finder', () => {
    test('should return an array representing a path to the target value', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        const d = new Node("d")
        const e = new Node("e")
        const f = new Node("f")

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(pathFinder(a, 'e')).toStrictEqual([ 'a', 'b', 'e' ])

        const a1 = new Node("a")
        const b1 = new Node("b")
        const c1 = new Node("c")
        const d1 = new Node("d")
        const e1 = new Node("e")
        const f1 = new Node("f")

        a1.left = b1
        a1.right = c1
        b1.left = d1
        b1.right = e1
        c1.right = f1

        expect(pathFinder(a1, 'p')).toBe(null)
        expect(pathFinder(null, "x")).toBe(null)

        const root = new Node(0)
        const result = [0]

        let curr = root
        for (let i = 1; i <= 6000; i += 1) {
            curr.right = new Node(i)
            curr = curr.right

            if (result.length <= 3451) result.push(i)
        }

        expect(pathFinder(root, 3451)).toStrictEqual(result)
    })
})

describe('tree value count', () => {
    test('should return the number of times that the target occurs in the tree', () => {
        const a = new Node(12)
        const b = new Node(6)
        const c = new Node(6)
        const d = new Node(4)
        const e = new Node(6)
        const f = new Node(12)

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(treeValueCount(a,  6)).toBe(3)

        const a1 = new Node(7)
        const b1 = new Node(5)
        const c1 = new Node(1)
        const d1 = new Node(1)
        const e1 = new Node(8)
        const f1 = new Node(7)
        const g1 = new Node(1)
        const h1 = new Node(1)

        a1.left = b1
        a1.right = c1
        b1.left = d1
        b1.right = e1
        c1.right = f1
        e1.left = g1
        f1.right = h1

        expect(treeValueCount(a, 9)).toBe(0)
        expect(treeValueCount(null, 42)).toBe(0)
    })
})

describe('how high', () => {
    test('should return a number representing the height of the tree', () => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        const d = new Node('d')
        const e = new Node('e')
        const f = new Node('f')

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(howHigh(a)).toBe(2)

        const a1 = new Node('a')

        expect(howHigh(a1)).toBe(0)
        expect(howHigh(null)).toBe(-1)
    })
})

describe('bottom right value', () => {
    test('should return the right-most value in the bottom-most level of the tree', () => {
        const a = new Node(3)
        const b = new Node(11)
        const c = new Node(10)
        const d = new Node(4)
        const e = new Node(-2)
        const f = new Node(1)

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(bottomRightValue(a)).toBe(1)

        const a1 = new Node(-1)
        const b1 = new Node(-6)
        const c1 = new Node(-5)
        const d1 = new Node(-3)
        const e1 = new Node(-4)
        const f1 = new Node(-13)
        const g1 = new Node(-2)
        const h1 = new Node(6)

        a1.left = b1
        a1.right = c1
        b1.left = d1
        b1.right = e1
        c1.right = f1
        e1.left = g1
        e1.right = h1

        expect(bottomRightValue(a1)).toBe(6)

        const a2 = new Node('a')
        const b2 = new Node('b')
        const c2 = new Node('c')
        const d2 = new Node('d')
        const e2 = new Node('e')
        const f2 = new Node('f')

        a2.left = b2
        a2.right = c2
        b2.right = d2
        d2.left = e2
        e2.right = f2

        expect(bottomRightValue(a2)).toBe('f')

        const a3 = new Node(42)

        expect(bottomRightValue(a3)).toBe(42)
    })
})

describe('all three paths', () => {
    test('should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree', () => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        const d = new Node('d')
        const e = new Node('e')
        const f = new Node('f')

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(allTreePaths(a)).toStrictEqual(expect.arrayContaining([
            [ 'a', 'b', 'd' ],
            [ 'a', 'b', 'e' ],
            [ 'a', 'c', 'f' ]
        ]))

        const z = new Node('z')

        expect(allTreePaths(z)).toStrictEqual([['z']])
    })
})

describe('tree levels', () => {
    test('should return a 2-Dimensional array where each subarray represents a level of the tree', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        const d = new Node("d")
        const e = new Node("e")
        const f = new Node("f")

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(treeLevels(a)).toStrictEqual(expect.arrayContaining([
            ['a'],
            ['b', 'c'],
            ['d', 'e', 'f']
        ]))

        expect(treeLevels(null)).toStrictEqual([])
    })
})

describe('level averages', () => {
    test('should return an array containing the average value of each level', () => {
        const a = new Node(5)
        const b = new Node(11)
        const c = new Node(54)
        const d = new Node(20)
        const e = new Node(15)
        const f = new Node(1)
        const g = new Node(3)

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        e.left = f
        e.right = g

        expect(levelAverages(a)).toStrictEqual([ 5, 32.5, 17.5, 2 ])
        expect(levelAverages(null)).toStrictEqual([])
    })
})

describe('leaf list', () => {
    test('returns an array containing the values of all leaf nodes in left-to-right order', () => {
        const a = new Node("a")
        const b = new Node("b")
        const c = new Node("c")
        const d = new Node("d")
        const e = new Node("e")
        const f = new Node("f")

        a.left = b
        a.right = c
        b.left = d
        b.right = e
        c.right = f

        expect(leafList(a)).toStrictEqual([ 'd', 'e', 'f' ])

        const x = new Node('x')

        expect(leafList(x)).toStrictEqual(['x'])

        expect(leafList(null)).toStrictEqual([])
    })
})