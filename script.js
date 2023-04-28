const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 24;

let score = 0;
let board = [];

function createBoard() {
  for (let row = 0; row < ROWS; row++) {
    board[row] = [];
    for (let col = 0; col < COLS; col++) {
      board[row][col] = 0;
    }
  }
}

function drawBoard() {
  let html = '';
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (board[row][col] === 1) {
        html += `<div class="cell active"></div>`;
      } else {
        html += `<div class="cell"></div>`;
      }
    }
  }
  gameBoard.innerHTML = html;
}

function clearBoard() {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      board[row][col] = 0;
    }
  }
}

function updateScore() {
  scoreDisplay.innerHTML = `Score: ${score}`;
}

function addScore(amount) {
  score += amount;
  updateScore();
}

function hasCollision(piece, row, col) {
  for (let r = 0; r < piece.length; r++) {
    for (let c = 0; c < piece[r].length; c++) {
      if (piece[r][c] && (row + r >= ROWS || col + c < 0 || col + c >= COLS || board[row + r][col + c])) {
        return true;
      }
    }
  }
  return false;
}

function merge(piece, row, col) {
  for (let r = 0; r < piece.length; r++) {
    for (let c = 0; c < piece[r].length; c++) {