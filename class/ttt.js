const Screen = require("./screen");
const Cursor = require("./cursor");
const ComputerPlayer = require("./computer-player");



class TTT {

  constructor(isAgainstAI) {

    this.playerTurn = "O";
    this.isAgainstAI = isAgainstAI;

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    Screen.addCommand('w', 'Move 1 cell up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('a', 'Move 1 cell left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('d', 'Move 1 cell right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('s', 'Move 1 cell down', this.cursor.down.bind(this.cursor));

    Screen.addCommand('p', 'Place a move', () => this.placeMove());

    Screen.render();
  }

  placeMove() {
    if (this.grid[this.cursor.row][this.cursor.col] === ' ') {
      Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);
      this.grid[this.cursor.row][this.cursor.col] = this.playerTurn;
      Screen.render();

      const winner = TTT.checkWin(this.grid);
      if(winner !== false) {
        TTT.endGame(winner);
      }

      if (this.playerTurn === 'O') {
        this.playerTurn = 'X';
      } else {
        this.playerTurn = 'O';
      }

      if(this.isAgainstAI) {
        this.makeAIMove();
      }

    } else {
      console.log('You cant place a move in a cell that is already taken.')
    }
  }

  makeAIMove() {
    let move;

    move = ComputerPlayer.getSmartMove(this.grid, this.playerTurn);

    if(move !== undefined) {
      Screen.setGrid(move.row, move.col, this.playerTurn);
      this.grid[move.row][move.col] = this.playerTurn;
    } else {
      move = ComputerPlayer.randomMove(this.grid);
      Screen.setGrid(move.row, move.col, this.playerTurn);
      this.grid[move.row][move.col] = this.playerTurn;
    }

    if (this.playerTurn === 'O') {
      this.playerTurn = 'X';
    } else {
      this.playerTurn = 'O';
    }

    Screen.render();

    const winner = TTT.checkWin(this.grid);
    if(winner !== false) {
      TTT.endGame(winner);
    }
  }

  static checkWin(grid) {
    let firstRow = [grid[0][0], grid[0][1], grid[0][2]];
    let secondRow = [grid[1][0], grid[1][1], grid[1][2]];
    let thirdRow = [grid[2][0], grid[2][1], grid[2][2]];
    let firstCol = [grid[0][0], grid[1][0], grid[2][0]];
    let secondCol = [grid[0][1], grid[1][1], grid[2][1]];
    let thirdCol = [grid[0][2], grid[1][2], grid[2][2]];
    let firstDiagonal = [grid[0][0], grid[1][1], grid[2][2]];
    let secondDiagonal = [grid[0][2], grid[1][1], grid[2][0]];

    let lines = [firstRow, secondRow, thirdRow, firstCol,
      secondCol, thirdCol, firstDiagonal, secondDiagonal];

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    const chars = ['X', 'O'];
    for(const char of chars) {
      for(const line of lines) {
        let count = 0;
        for(let i = 0; i < line.length; i++) {
          if(line[i] === char) {
            count++;
          }
        }
        if(count === 3) {
          return char;
        }
      }
    }

    // Return false if the game has not ended OK
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
        if(grid[i][j] === ' ') {
          return false;
        }
      }
    }

    // Return 'T' if the game is a tie
    return 'T';
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}


module.exports = TTT;
