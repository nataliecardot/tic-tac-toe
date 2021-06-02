const board = document.querySelector('#board');
const cells = document.querySelectorAll('.cell');
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

  currentTurn = currentTurn == 'x' ? 'o' : 'x';
  board.classList.remove('turn-o', 'turn-x');
  board.classList.add('turn-' + currentTurn);
}
