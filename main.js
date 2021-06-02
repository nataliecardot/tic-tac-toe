const board = document.querySelector('#board');
const cells = document.querySelectorAll('.cell');
// Winning combinations
const combinations = [
  // Also checking for inverse order of these in checkForWin()
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
];
let currentTurn;

setup();

function setup() {
  board.classList.remove('turn-x', 'turn-o');

  for (let cell of cells) {
    cell.classList.remove('x', 'o');
    // once makes it so listener is removed after first time being invoked
    cell.addEventListener('click', fillCell, { once: true });
  }

  currentTurn = Math.round(Math.random(0, 1)) == 1 ? 'x' : 'o';
  board.classList.add('turn-' + currentTurn);
}

function fillCell() {
  this.classList.add(currentTurn);

  if (checkForWin()) {
    // Winner!
  }

  currentTurn = currentTurn == 'x' ? 'o' : 'x';
  board.classList.remove('turn-o', 'turn-x');
  board.classList.add('turn-' + currentTurn);
}

function checkForWin() {}
