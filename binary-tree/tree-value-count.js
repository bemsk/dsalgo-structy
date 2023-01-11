/*
Write a function, treeValueCount, that takes in the root of a binary tree and a target value.
The function should return the number of times that the target occurs in the tree.
*/

const treeValueCount = (root, target) => {
    if (root === null) return 0

    const stack = [root]
    let count = 0

    while (stack.length > 0) {
        const current = stack.pop()

        if (current.val === target) count++

        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }

    return count
}

module.exports = treeValueCount