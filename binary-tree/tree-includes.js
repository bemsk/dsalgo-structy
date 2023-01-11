/*
Write a function, treeIncludes, that takes in the root of a binary tree and a target value.
The function should return a boolean indicating whether or not the value is contained in the tree.
*/

const treeIncludes = (root, target) => {
    if (root === null) return false

    const stack = [root]

    while (stack.length > 0) {
        const current = stack.pop()

        if (current.val === target) return true

        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }

    return false
}

module.exports = treeIncludes