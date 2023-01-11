/*
Write a function, leafList, that takes in the root of a binary tree
and returns an array containing the values of all leaf nodes in left-to-right order.
*/

const leafList = (root) => {
    if (root === null) return []

    const stack = [root]
    const results = []

    while (stack.length > 0) {
        const current = stack.pop()

        if (!current.left && !current.right) results.push(current.val)

        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }

    return results
}

module.exports = leafList