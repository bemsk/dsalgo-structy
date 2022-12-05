/*
Write a function, levelAverages, that takes in the root of a binary tree that contains number values.
The function should return an array containing the average value of each level.
*/

const levelAverages = (root) => {
    if (root === null) return []

    const stack = [{n: root, lvl: 0}]
    const levelCount = []

    while (stack.length > 0) {
        const {n, lvl} = stack.pop()

        if (levelCount[lvl]) {
            levelCount[lvl].sum = levelCount[lvl].sum + n.val
            levelCount[lvl].count = levelCount[lvl].count + 1
        } else {
            levelCount[lvl] = {sum: n.val, count: 1}
        }

        if (n.right) stack.push({n: n.right, lvl: lvl + 1})
        if (n.left) stack.push({n: n.left, lvl: lvl + 1})
    }

    return levelCount.map(({sum, count}) => sum / count)
}

module.exports = levelAverages