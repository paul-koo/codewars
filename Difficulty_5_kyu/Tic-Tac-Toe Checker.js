// Tic-Tac-Toe Checker
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
    /* const winCombination = [[[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 2], [1, 3]], [[2, 0], [2, 2], [2, 3]], 
                            [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]],
                            [[0, 2], [1, 1], [2, 0]], [[0, 0], [1, 1], [2, 2]]];
    012, 345, 678, 036, 147, 258, 048, 246  */

    let arr = [...board[0], ...board[1], ...board[2]];
    if (arr[0] === arr[1] && arr[2] === 1 && arr[1] === arr[2] || arr[3] === arr[4] && arr[5] === 1 && arr[4] === arr[5]|| arr[6] === arr[7] && arr[8] === 1 && arr[7] === arr[8] ||arr[0] === arr[3] && arr[6] === 1 && arr[3] === arr[6]
    || arr[1] === arr[4] && arr[7] === 1 && arr[4] === arr[7] || arr[2] === arr[5] && arr[8] === 1 && arr[5] === arr[8] || arr[0] === arr[4] && arr[8] === 1 && arr[4] === arr[8] || arr[2] === arr[4] && arr[6] === 1 && arr[4] === arr[6]) {
        return 1;
    } else if (arr[0] === arr[1] && arr[2] === 2 && arr[1] === arr[2] || arr[3] === arr[4] && arr[5] === 2 && arr[4] === arr[5]|| arr[6] === arr[7] && arr[8] === 2 && arr[7] === arr[8] ||arr[0] === arr[3] && arr[6] === 2 && arr[3] === arr[6]
        || arr[1] === arr[4] && arr[7] === 2 && arr[4] === arr[7] || arr[2] === arr[5] && arr[8] === 2 && arr[5] === arr[8] || arr[0] === arr[4] && arr[8] === 2 && arr[4] === arr[8] || arr[2] === arr[4] && arr[6] === 2 && arr[4] === arr[6])  {
        return 2;
    } else if (arr[0] === 0 || arr[1] === 0 || arr[2] === 0 ||arr[3] === 0 || arr[4] === 0 || arr[5] === 0 || arr[6] === 0 || arr[7] === 0 || arr[8] === 0) {
        return -1;
    } else {
        return 0;
    }
}

console.log(isSolved(
    [[2,2,2],
    [0,1,1],
    [1,0,0]]));
