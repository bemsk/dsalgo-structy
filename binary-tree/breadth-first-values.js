/*
Write a function, breadthFirstValues, that takes in the root of a binary tree.
The function should return an array containing all values of the tree in breadth-first order.
*/

const breadthFirstValues = (root) => {
    if (root === null) return []

    const q = [root]
    const result = []

    while (q.length > 0) {
        const current = q.shift()
        result.push(current.val)

        if (current.left) q.push(current.left)
        if (current.right) q.push(current.right)
    }

    return result
}

module.exports = breadthFirstValues