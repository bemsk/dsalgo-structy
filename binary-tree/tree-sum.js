/*
Write a function, treeSum, that takes in the root of a binary tree that contains number values.
The function should return the total sum of all values in the tree.
*/

const treeSum = (root) => {
    if (root === null) return 0

    const stack = [root]
    let sum = 0

    while (stack.length > 0) {
        const current = stack.pop()
        sum += current.val

        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)
    }

    return sum
}

module.exports = treeSum