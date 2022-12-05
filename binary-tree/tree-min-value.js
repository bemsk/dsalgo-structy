/*
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.
The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.
*/

const treeMinValue = (root) => {
    const stack = [root]

    let min = Infinity

    while (stack.length > 0) {
        const current = stack.pop()

        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)

        if (current.val < min) min = current.val
    }

    return min
}

module.exports = treeMinValue