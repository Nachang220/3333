let players = ['x', 'o'];
let activePlayer = 0;
let board = [];

function checkWin() {
  let symbol = players[activePlayer];
  if(
    board[0][0] == symbol && board[0][1] == symbol && board[0][2] == symbol ||
    board[1][0] == symbol && board[1][1] == symbol && board[1][2] == symbol ||
    board[2][0] == symbol && board[2][1] == symbol && board[2][2] == symbol ||
    board[0][0] == symbol && board[1][0] == symbol && board[2][0] == symbol ||
    board[0][1] == symbol && board[1][1] == symbol && board[2][1] == symbol ||
    board[0][2] == symbol && board[1][2] == symbol && board[2][2] == symbol ||
    board[0][0] == symbol && board[1][1] == symbol && board[2][2] == symbol ||
    board[0][2] == symbol && board[1][1] == symbol && board[2][0] == symbol
  ) {
    showWinner(activePlayer);
  }
}

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  renderBoard(board);
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);
  checkWin();
  if(activePlayer) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
}