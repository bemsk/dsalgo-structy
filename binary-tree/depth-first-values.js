/*
Write a function, depthFirstValues, that takes in the root of a binary tree.
The function should return an array containing all values of the tree in depth-first order.
*/

const depthFirstValues = (root) => {
    if (root === null) return []

    const stack = [root]
    const result = []

    while (stack.length > 0) {
        const current = stack.pop()
        result.push(current.val)

        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }

    return result
}

const _depthFirstValues = (root) => {
    if (root === null) return []

    const left = _depthFirstValues(root.left)
    const right = _depthFirstValues(root.right)

    return [root.val].concat(left).concat(right)
}

module.exports = depthFirstValues