/*
Write a function, intersection, that takes in two arrays, a,b, as arguments.
The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.
*/

const intersection = (a, b) => {
    const setA = new Set(a)
    const result = []

    for (let n of b) {
      if (setA.has(n)) result.push(n)
    }

    return result
}


module.exports = intersection