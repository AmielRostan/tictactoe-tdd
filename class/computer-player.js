
class ComputerPlayer {

  static getValidMoves(grid) {
    let arr = [];

    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[0].length; j++) {
        if(grid[i][j] === ' ') {
          arr.push({ row: i, col: j });
        }
      }
    }

    return arr;
  }

  static randomMove(grid) {
    let arr = this.getValidMoves(grid);
    let max = Math.floor(arr.length);

    const move = arr[Math.floor(Math.random() * max)];
    return move;
  }

  static getWinningMoves(grid, symbol) {


  }

  static getSmartMove(grid, symbol) {
    let enemy;
    if(symbol === 'X') {
      enemy = 'O';
    } else {
      enemy = 'X';
    }

    // verifying rows
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length - 1; col++) {
        if (grid[row][col] === symbol && grid[row][col + 1] === symbol) {
          const nextEmptyCol = col + 2;
          if (nextEmptyCol < grid[row].length && grid[row][nextEmptyCol] === ' ') {
            return { row: row, col: nextEmptyCol };
          } else if (grid[row][0] === ' ') {
            return { row: row, col: 0 };
          }
        }
      }
    }
    // middle
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length - 2; col++) {
        if (grid[row][col] === symbol && grid[row][col + 2] === symbol) {
          const middleCol = col + 1;
          if (grid[row][middleCol] === ' ') {
            return { row: row, col: middleCol };
          }
        }
      }
    }

    // verifying cols
    for (let col = 0; col < grid[0].length; col++) {
      for (let row = 0; row < grid.length - 1; row++) {
        if (grid[row][col] === symbol && grid[row + 1][col] === symbol) {
          const nextEmptyRow = row + 2;
          if (nextEmptyRow < grid.length && grid[nextEmptyRow][col] === ' ') {
            return { col: col, row: nextEmptyRow };
          } else if (grid[0][col] === ' ') {
            return { col: col, row: 0 };
          }
        }
      }
    }
    // middle
    for (let col = 0; col < grid[0].length; col++) {
      for (let row = 0; row < grid.length - 2; row++) {
        if (grid[row][col] === symbol && grid[row + 2][col] === symbol) {
          const middleRow = row + 1;
          if (grid[middleRow][col] === ' ') {
            return { row: middleRow, col: col };
          }
        }
      }
    }

    // verifying block rows
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length - 1; col++) {
        if (grid[row][col] === enemy && grid[row][col + 1] === enemy) {
          const nextEmptyCol = col + 2;
          if (nextEmptyCol < grid[row].length && grid[row][nextEmptyCol] === ' ') {
            return { row: row, col: nextEmptyCol };
          } else if (grid[row][0] === ' ') {
            return { row: row, col: 0 };
          }
        }
      }
    }
    // middle
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length - 2; col++) {
        if (grid[row][col] === enemy && grid[row][col + 2] === enemy) {
          const middleCol = col + 1;
          if (grid[row][middleCol] === ' ') {
            return { row: row, col: middleCol };
          }
        }
      }
    }

    // verifying block cols
    for (let col = 0; col < grid[0].length; col++) {
      for (let row = 0; row < grid.length - 1; row++) {
        if (grid[row][col] === enemy && grid[row + 1][col] === enemy) {
          const nextEmptyRow = row + 2;
          if (nextEmptyRow < grid[row].length && grid[nextEmptyRow][col] === ' ') {
            return { col: col, row: nextEmptyRow };
          } else if (grid[0][col] === ' ') {
            return { col: col, row: 0 };
          }
        }
      }
    }
    // middle
    for (let col = 0; col < grid[0].length; col++) {
      for (let row = 0; row < grid.length - 2; row++) {
        if (grid[row][col] === enemy && grid[row + 2][col] === enemy) {
          const middleRow = row + 1;
          if (grid[middleRow][col] === ' ') {
            return { row: middleRow, col: col };
          }
        }
      }
    }

    // Verifying diagonal (top-left to bottom-right)
    for (let row = 0; row < grid.length - 1; row++) {
      for (let col = 0; col < grid[0].length - 1; col++) {
        if (grid[row][col] === symbol && grid[row + 1][col + 1] === symbol) {
          const nextEmptyCol = col + 2;
          const nextEmptyRow = row + 2;
          if (nextEmptyCol < grid[row].length && nextEmptyRow < grid.length && grid[nextEmptyRow][nextEmptyCol] === ' ') {
            return { row: nextEmptyRow, col: nextEmptyCol };
          } else if (row - 1 >= 0 && col - 1 >= 0 && grid[row - 1][col - 1] === ' ') {
            return { row: row - 1, col: col - 1 };
          }
        }
      }
    }
    // middle
    for (let row = 0; row < grid.length - 2; row++) {
      for (let col = 0; col < grid[0].length - 2; col++) {
        if (grid[row][col] === symbol && grid[row + 2][col + 2] === symbol) {
          const middleCol = col + 1;
          const middleRow = row + 1;
          if (grid[middleRow][middleCol] === ' ') {
            return { row: middleRow, col: middleCol };
          }
        }
      }
    }

    // Verifying diagonal (top-right to bottom-left)
    for (let row = 0; row < grid.length - 1; row++) {
      for (let col = grid[0].length - 1; col > 0; col--) {
        if (grid[row][col] === symbol && grid[row + 1][col - 1] === symbol) {
          const nextEmptyCol = col - 2;
          const nextEmptyRow = row + 2;
          if (nextEmptyCol >= 0 && nextEmptyRow < grid.length && grid[nextEmptyRow][nextEmptyCol] === ' ') {
            return { row: nextEmptyRow, col: nextEmptyCol };
          } else if (row - 1 >= 0 && col + 1 < grid[0].length && grid[row - 1][col + 1] === ' ') {
            return { row: row - 1, col: col + 1 };
          }
        }
      }
    }
    // middle
    for (let row = 0; row < grid.length - 2; row++) {
      for (let col = grid[0].length - 1; col > 1; col--) {
        if (grid[row][col] === symbol && grid[row + 2][col - 2] === symbol) {
          const middleCol = col - 1;
          const middleRow = row + 1;
          if (grid[middleRow][middleCol] === ' ') {
            return { row: middleRow, col: middleCol };
          }
        }
      }
    }

    // Verifying block diagonal (top-left to bottom-right)
    for (let row = 0; row < grid.length - 1; row++) {
      for (let col = 0; col < grid[0].length - 1; col++) {
        if (grid[row][col] === enemy && grid[row + 1][col + 1] === enemy) {
          const nextEmptyCol = col + 2;
          const nextEmptyRow = row + 2;
          if (nextEmptyCol < grid[row].length && nextEmptyRow < grid.length && grid[nextEmptyRow][nextEmptyCol] === ' ') {
            return { row: nextEmptyRow, col: nextEmptyCol };
          } else if (row - 1 >= 0 && col - 1 >= 0 && grid[row - 1][col - 1] === ' ') {
            return { row: row - 1, col: col - 1 };
          }
        }
      }
    }
    // middle
    for (let row = 0; row < grid.length - 2; row++) {
      for (let col = 0; col < grid[0].length - 2; col++) {
        if (grid[row][col] === enemy && grid[row + 2][col + 2] === enemy) {
          const middleCol = col + 1;
          const middleRow = row + 1;
          if (grid[middleRow][middleCol] === ' ') {
            return { row: middleRow, col: middleCol };
          }
        }
      }
    }

    // Verifying block diagonal (top-right to bottom-left)
    for (let row = 0; row < grid.length - 1; row++) {
      for (let col = grid[0].length - 1; col > 0; col--) {
        if (grid[row][col] === enemy && grid[row + 1][col - 1] === enemy) {
          const nextEmptyCol = col - 2;
          const nextEmptyRow = row + 2;
          if (nextEmptyCol >= 0 && nextEmptyRow < grid.length && grid[nextEmptyRow][nextEmptyCol] === ' ') {
            return { row: nextEmptyRow, col: nextEmptyCol };
          } else if (row - 1 >= 0 && col + 1 < grid[0].length && grid[row - 1][col + 1] === ' ') {
            return { row: row - 1, col: col + 1 };
          }
        }
      }
    }
    // middle
    for (let row = 0; row < grid.length - 2; row++) {
      for (let col = grid[0].length - 1; col > 1; col--) {
        if (grid[row][col] === enemy && grid[row + 2][col - 2] === enemy) {
          const middleCol = col - 1;
          const middleRow = row + 1;
          if (grid[middleRow][middleCol] === ' ') {
            return { row: middleRow, col: middleCol };
          }
        }
      }
    }

    // Verifying block diagonal (bottom-left to top-right)
    for (let row = grid.length - 1; row > 0; row--) {
      for (let col = 0; col < grid[0].length - 1; col++) {
        if (grid[row][col] === enemy && grid[row - 1][col + 1] === enemy) {
          const nextEmptyCol = col + 2;
          const nextEmptyRow = row - 2;
          if (nextEmptyCol < grid[row].length && nextEmptyRow >= 0 && grid[nextEmptyRow][nextEmptyCol] === ' ') {
            return { row: nextEmptyRow, col: nextEmptyCol };
          } else if (row + 1 < grid.length && col - 1 >= 0 && grid[row + 1][col - 1] === ' ') {
            return { row: row + 1, col: col - 1 };
          }
        }
      }
    }
    // middle
    for (let row = grid.length - 1; row > 1; row--) {
      for (let col = 0; col < grid[0].length - 2; col++) {
        if (grid[row][col] === enemy && grid[row - 2][col + 2] === enemy) {
          const middleCol = col + 1;
          const middleRow = row - 1;
          if (grid[middleRow][middleCol] === ' ') {
            return { row: middleRow, col: middleCol };
          }
        }
      }
    }

    // Verifying block diagonal (bottom-right to top-left)
    for (let row = grid.length - 1; row > 0; row--) {
      for (let col = grid[0].length - 1; col > 0; col--) {
        if (grid[row][col] === enemy && grid[row - 1][col - 1] === enemy) {
          const nextEmptyCol = col - 2;
          const nextEmptyRow = row - 2;
          if (nextEmptyCol >= 0 && nextEmptyRow >= 0 && grid[nextEmptyRow][nextEmptyCol] === ' ') {
            return { row: nextEmptyRow, col: nextEmptyCol };
          } else if (row + 1 < grid.length && col + 1 < grid[0].length && grid[row + 1][col + 1] === ' ') {
            return { row: row + 1, col: col + 1 };
          }
        }
      }
    }
    // middle
    for (let row = grid.length - 1; row > 1; row--) {
      for (let col = grid[0].length - 1; col > 1; col--) {
        if (grid[row][col] === enemy && grid[row - 2][col - 2] === enemy) {
          const middleCol = col - 1;
          const middleRow = row - 1;
          if (grid[middleRow][middleCol] === ' ') {
            return { row: middleRow, col: middleCol };
          }
        }
      }
    }

    // for (let row = 0; row < grid.length; row++) {
    //   for (let col = 0; col < grid[0].length; col++) {
    //       if (grid[row][col] === symbol) {
    //           // Verificar las posiciones adyacentes
    //           const adjacentPositions = [
    //               { row: row - 1, col: col }, // Arriba
    //               { row: row + 1, col: col }, // Abajo
    //               { row: row, col: col - 1 }, // Izquierda
    //               { row: row, col: col + 1 }, // Derecha
    //           ];

    //           for (const pos of adjacentPositions) {
    //               const { row: adjRow, col: adjCol } = pos;
    //               if (
    //                   adjRow >= 0 &&
    //                   adjRow < grid.length &&
    //                   adjCol >= 0 &&
    //                   adjCol < grid[0].length &&
    //                   grid[adjRow][adjCol] === ' '
    //               ) {
    //                   return { row: adjRow, col: adjCol };
    //               }
    //           }
    //       }
    //   }
    // }

    const nextToOwn = this.placeNextToOwn(grid, symbol);
    if (nextToOwn) {
      return nextToOwn;
    }

    if(grid[1][1] === ' ' && grid[1][1] !== 'X') {
      return { row: 1, col: 1 };
    } else {
      if(grid[0][0] === ' ') {
        return { row: 0, col: 0 };
      }
    }

    return ComputerPlayer.randomMove(grid);

  }

  static placeNextToOwn(grid, symbol) {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col] === symbol) {
          // Verificar diagonal superior izquierda
          if (row > 1 && col > 1 && grid[row - 1][col - 1] === ' ' && grid[row - 2][col - 2] === ' ') {
            return { row: row - 1, col: col - 1 };
          }
          // Verificar izquierda
          if (col > 1 && grid[row][col - 1] === ' ' && grid[row][col - 2] === ' ') {
              return { row, col: col - 1 };
          }
          // Verificar arriba
          if (row > 1 && grid[row - 1][col] === ' ' && grid[row - 2][col] === ' ') {
            return { row: row - 1, col };
          }
          // Verificar diagonal inferior derecha
          if (row < grid.length - 2 && col < grid[0].length - 2 && grid[row + 1][col + 1] === ' ' && grid[row + 2][col + 2] === ' ') {
              return { row: row + 1, col: col + 1 };
          }
          // Verificar diagonal inferior izquierda
          if (row < grid.length - 2 && col > 1 && grid[row + 1][col - 1] === ' ' && grid[row + 2][col - 2] === ' ') {
              return { row: row + 1, col: col - 1 };
          }
          // Verificar abajo
          if (row < grid.length - 2 && grid[row + 1][col] === ' ' && grid[row + 2][col] === ' ') {
              return { row: row + 1, col };
          }
          // Verificar diagonal superior derecha
          if (row > 1 && col < grid[0].length - 2 && grid[row - 1][col + 1] === ' ' && grid[row - 2][col + 2] === ' ') {
              return { row: row - 1, col: col + 1 };
          }
          // Verificar derecha
          if (col < grid[0].length - 2 && grid[row][col + 1] === ' ' && grid[row][col + 2] === ' ') {
            return { row, col: col + 1 };
          }
        }
      }
    }



  // Si no se puede colocar al lado de una propia, devolver null
  return null;
  }

  static isNextToOwn(grid, row, col) {
    const directions = [
        [0, 1],   // Derecha
        [0, -1],  // Izquierda
        [1, 0],   // Abajo
        [-1, 0],  // Arriba
        [1, 1],   // Diagonal inferior derecha
        [1, -1],  // Diagonal inferior izquierda
        [-1, 1],  // Diagonal superior derecha
        [-1, -1], // Diagonal superior izquierda
    ];

    for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (this.isValidMove(grid, newRow, newCol) && grid[newRow][newCol] === grid[row][col]) {
            return true;
        }
    }

    return false;
  }

}

module.exports = ComputerPlayer;
