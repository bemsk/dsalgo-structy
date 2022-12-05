/*
Write a function, bottomRightValue, that takes in the root of a binary tree.
The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.
*/

const bottomRightValue = (root) => {
    const stack = [{node: root, lvl: 0}]
    let bottomRightNode = {val: root.val, lvl: 0}

    while (stack.length > 0) {
        const {node, lvl} = stack.pop()

        if (!node.left && !node.right && lvl >= bottomRightNode.lvl) {
            bottomRightNode.val = node.val
            bottomRightNode.lvl = lvl
        }

        if (node.right) stack.push({node: node.right, lvl: lvl + 1})
        if (node.left) stack.push({node: node.left, lvl: lvl + 1})
    }

    return bottomRightNode.val
}

module.exports = bottomRightValue