/*
Write a function, pathFinder, that takes in the root of a binary tree and a target value.
The function should return an array representing a path to the target value.
If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.
*/

const pathFinder = (root, target) => {
    if (root === null) return null

    const q = [{node: root, path: [root.val]}]

    while (q.length > 0) {
        const {node, path} = q.shift()

        if (node.val === target) return path

        if (node.left) q.push({node: node.left, path: path.concat(node.left.val)})
        if (node.right) q.push({node: node.right, path: path.concat(node.right.val)})
    }

    return null
}

module.exports = pathFinder