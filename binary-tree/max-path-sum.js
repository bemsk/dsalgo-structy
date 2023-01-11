/*
Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
The function should return the maximum sum of any root to leaf path within the tree.

You may assume that the input tree is non-empty.
*/

const maxPathSum = (root) => {
    const stack = [{node: root, sum: root.val}]
    let max = -Infinity

    while (stack.length > 0) {
        const {node, sum} = stack.pop()

        if (!node.left && !node.right && sum > max) max = sum

        if (node.left) stack.push({node: node.left, sum: node.left.val + sum})

        if (node.right) stack.push({node: node.right, sum: node.right.val + sum})
    }

    return max
}

module.exports = maxPathSum