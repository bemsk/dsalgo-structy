/*
Write a function, howHigh, that takes in the root of a binary tree.
The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

If the tree is empty, return -1.
*/

const howHigh = (node) => {
    if (node === null) return -1

    const stack = [{n: node, h: 0}]
    let max = -Infinity

    while (stack.length > 0) {
        const {n, h} = stack.pop()

        if (!n.left && !n.right && h > max) max = h

        if (n.left) stack.push({n: n.left, h: h + 1})
        if (n.right) stack.push({n: n.right, h: h + 1})
    }

    return max
}

module.exports = howHigh