const board = document.querySelector('#board');
const cells = document.querySelectorAll('.cell');
const overlay = document.querySelector('.overlay');
const overlayMsg = document.querySelector('.overlay p');
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
  // TODO: comment in
  overlay.style.display = 'none';
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
    overlay.style.display = 'flex';
    overlayMsg.innerText = currentTurn.toUpperCase() + ' is the winner!';
  } else if (checkForDraw()) {
    overlay.style.display = 'flex';
    overlayMsg.innerText = "It's a draw!";
  } else {
    currentTurn = currentTurn == 'x' ? 'o' : 'x';
    board.classList.remove('turn-o', 'turn-x');
    board.classList.add('turn-' + currentTurn);
  }
}

function checkForWin() {
  // Loop through combinations to check that at least one combination passes the test (true returned for every() method below)
  return combinations.some((combination) => {
    // Loop through each combination to check whether all three cell elements have currentTurn (x or 0) class
    return combination.every((c) => {
      if (cells[c].classList.contains(currentTurn)) {
        return true;
      }

      return false;
    });
  });
}

function checkForDraw() {
  // Using spread syntax to convert the array-like object NodeList for cells (returned by querySelectorAll property) into a regular array so every can be used. Could alternatively use Array.from()
  return [...cells].every((c) => {
    if (c.classList.contains('x') || c.classList.contains('o')) return true;
    return false;
  });
}
