/*
Write a function, treeLevels, that takes in the root of a binary tree.
The function should return a 2-Dimensional array where each subarray represents a level of the tree.
*/

const treeLevels = (root) => {
    if (root === null) return []

    const stack = [{n: root, lvl: 0}]
    const results = []

    while (stack.length > 0) {
        const {n, lvl} = stack.pop()

        if (results[lvl]) results[lvl] = results[lvl].concat(n.val)
        else results[lvl] = [n.val]

        if (n.right) stack.push({n: n.right, lvl: lvl + 1})
        if (n.left) stack.push({n: n.left, lvl: lvl + 1})
    }

    return results
}

module.exports = treeLevels