/*
A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required
for the knight to travel to the same position of the pawn?
On a single move, the knight can move in an "L" shape; two spaces in any direction,
then one space in a perpendicular direction. This means that on a single move,
a knight has eight possible positions it can move to.

Write a function, knightAttack, that takes in 5 arguments:

n, kr, kc, pr, pc

    n = the length of the chess board
    kr = the starting row of the knight
    kc = the starting column of the knight
    pr = the row of the pawn
    pc = the column of the pawn

The function should return a number representing the minimum number of moves required
for the knight to land ontop of the pawn.
The knight cannot move out-of-bounds of the board.
You can assume that rows and columns are 0-indexed. This means that if n = 8,
there are 8 rows and 8 columns numbered 0 to 7.
If it is not possible for the knight to attack the pawn, then return null.
*/

const knightAttack = (n, kr, kc, pr, pc) => {
    const visited = new Set()
    visited.add([kr, kc].join('-'))

    const q = [{pos: [kr, kc], step: 0}]

    while (q.length > 0) {
        const {pos, step} = q.shift()
        const [cr, cc] = pos

        if (cr === pr && cc === pc) return step

        const moves = validMoves(cr, cc, n)
        for (let [nr, nc] of moves) {
            if (!visited.has([nr, nc].join('-'))) {
                visited.add([nr, nc].join('-'))
                q.push({pos: [nr, nc], step: step + 1})
            }
        }
    }

    return null
}

const validMoves = (r, c, n) => {
    const moves = [
        [r + 2, c + 1],
        [r + 2, c - 1],
        [r - 2, c + 1],
        [r - 2, c - 1],
        [r + 1, c + 2],
        [r + 1, c - 2],
        [r - 1, c + 2],
        [r - 1, c - 2],
    ]

    const isValid = (r, c, n) => r >= 0 && c >= 0 && r < n && c < n

    return moves.filter(([r, c]) => isValid(r, c, n))
}

module.exports = knightAttack