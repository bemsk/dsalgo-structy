/*
Write a function, allTreePaths, that takes in the root of a binary tree.
The function should return a 2-Dimensional array
where each subarray represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end at the leaf,
but the relative order among paths in the outer array does not matter.

You may assume that the input tree is non-empty.
*/

const allTreePaths = (root) => {
    if (root === null) return []

    const stack = [{n: root, p: [root.val]}]
    const paths = []

    while (stack.length > 0) {
        const {n, p} = stack.pop()

        if (!n.left && !n.right) paths.push(p)

        if (n.left) stack.push({n: n.left, p: p.concat(n.left.val)})
        if (n.right) stack.push({n: n.right, p: p.concat(n.right.val)})
    }

    return paths
}

module.exports = allTreePaths