const Diags = new Set(["00", "20", "02", "22", "11"]);
export const EMPTY = "";
function checkDiagRowAndCol(row, col, char, winner, board) {
  let rowCount = 0;
  let colCount = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] !== EMPTY && board[i][col] !== char) {
      winner.winner = false;
    } else if (board[i][col] !== EMPTY) {
      rowCount++;
      if (rowCount === 3) {
        winner.winner = true;
        break;
      }
    }
    if (board[row][i] !== EMPTY && board[row][i] !== char) {
      winner.winner = false;
    } else if (board[row][i] !== EMPTY) {
      colCount++;
      if (colCount === 3) {
        winner.winner = true;
        break;
      }
    }
  }
}
export const Brain = {
  winner: {winner: false, who: ""},
  checkRowAndCol(char, board, row, col) {
    this.winner.who = char;
    let winCount = 0;
    // checking rows
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] !== "." && board[row][i] !== char) {
        this.winner.winner = false;
      } else if (board[row][i] !== ".") {
        winCount++;
        if (winCount === 3) {
          this.winner.winner = true;
          return this.winner;
        }
      }
    }
    winCount = 0;
    this.winner.dir = "col";
    // checking cols
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] !== "." && board[i][col] !== char) {
        this.winner.winner = false;
      } else if (board[i][col] !== ".") {
        winCount++;
        if (winCount === 3) {
          this.winner.winner = true;
          return this.winner;
        }
      }
    }
    return this.winner;
  },
  canCheckDiagonals(row, col) {
    return Diags.has(`${row}${col}`);
  },
  diagonalWinner(char, board, row, col) {
    console.log(board, row, col)
    let j = 0;
    let winCount = 0;
    this.winner.who = char;
    for (let i = 0; i < board.length; i++) {
      if (board[i][j++] !== char) {
        this.winner.winner = false;
        break;
      } else {
        winCount++;
      }
    }
    if (winCount !== 3) {
      winCount = 0;
      for (let i = board.length-1, j = 0; i >= 0; i--, j++) {
        if (board[j][i] !== char) {
          this.winner.winner = false;
          break;
        } else if (board[j][i] !== EMPTY) {
          winCount++;
        }
      }
    }
    if (winCount !== 3) { 
      checkDiagRowAndCol(row, col, char, this.winner, board);
    } else {
      this.winner.winner = true;
    }
    return this.winner;
  }
};
