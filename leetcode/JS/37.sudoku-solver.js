/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start

const solve = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === ".") {
        for (let num = 1; num <= 9; num++) {
          const charNum = String(num);
          if (isValid(board, row, col, charNum)) {
            board[row][col] = charNum;

            if (solve(board)) return true; // Continue solving
            board[row][col] = "."; // Backtrack
          }
        }
        return false; // No valid number found, backtrack
      }
    }
  }
  return true; // Solved
}

const isValid = (board, row, col, num) => {
  for (let j = 0; j < 9; j++) if (board[row][j] === num) return false;
  for (let i = 0; i < 9; i++) if (board[i][col] === num) return false;
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (board[startRow + i][startCol + j] === num) return false;

  return true; // Number is valid
}
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => solve(board);
// @lc code=end