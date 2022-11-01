const cell = Array.from(document.querySelectorAll('.cell'));
const turn = document.querySelector('.status');
const resetBtn = document.getElementById('reset');

let running = true;
let currentPlayer = 'X';

const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

let board = ['', '', '', '', '', '', '', '', ''];

initialize();

function initialize() {
	cell.forEach((tile, cellIndex) => {
		tile.addEventListener('click', () => {
			cellClicked(tile, cellIndex);
		});
	});

	resetBtn.addEventListener('click', resetGame);
	turn.textContent = `${currentPlayer}'s turn`;
	running = true;
}

const isValidAction = (tile) => {
	if (tile.innerText === 'X' || tile.innerText === 'O') {
		return false;
	}

	return true;
};

function cellClicked(tile, index) {
	// console.log(tile.innerText);
	const cellVal = tile.innerText;
	console.log(board[index]);
	if (!isValidAction(tile) || !running) {
		return;
	}

	updateCell(tile, index);
	checkWinner();
}

const updateCell = (cell, index) => {
	cell.innerText = currentPlayer;
	board[index] = currentPlayer;
};

function changePlayer() {
	if (currentPlayer == 'X') currentPlayer = 'O';
	else currentPlayer = 'X';

	turn.textContent = `${currentPlayer}'s turn`;
}

const checkWinner = () => {
	let round = false;
	for (let i = 0; i < winningConditions.length; i++) {
		let condiotio = winningConditions[i];
		let cellA = board[condiotio[0]];
		let cellB = board[condiotio[1]];
		let cellC = board[condiotio[2]];

		if (cellA == '' || cellB == '' || cellC == '') {
			continue;
		}

		if (cellA == cellB && cellB == cellC) {
			round = true;
			break;
		}
	}

	if (round) {
		turn.innerText = `${currentPlayer} win`;
		running = false;
		return;
	} else if (!board.includes('')) {
		turn.innerText = `Match Draw`;
		running = false;
	} else {
		changePlayer();
	}
};

function resetGame() {
	board = ['', '', '', '', '', '', '', '', ''];
	currentPlayer = 'X';
	turn.textContent = `${currentPlayer}'s turn`;
	cell.forEach((cell) => (cell.textContent = ''));
	running = true;
}

// const cells = document.querySelectorAll('.cell');
// const statusText = document.querySelector('#statusText');
// const restartBtn = document.querySelector('#restartBtn');
// const winConditions = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6],
// ];
// let options = ['', '', '', '', '', '', '', '', ''];
// let currentPlayer = 'X';
// let running = false;

// initializeGame();

// function initializeGame() {
// 	cells.forEach((cell) => {
// 		cell.addEventListener('click', cellClicked);
// 		restartBtn.addEventListener('click', restartGame);
// 		statusText.textContent = `${currentPlayer}'s turn`;
// 	});
// 	running = true;
// }

// function cellClicked() {
// 	const cellIndex = this.getAttribute('cellIndex');

// 	if (options[cellIndex] != '' || !running) {
// 		return;
// 	}

// 	updateCell(this, cellIndex);
// 	checkWinner();
// }

// function updateCell(cell, index) {
// 	options[index] = currentPlayer;
// 	cell.textContent = currentPlayer;
// }

// function changePlayer() {
// 	if (currentPlayer == 'X') currentPlayer = 'O';
// 	else currentPlayer = 'X';

// 	statusText.textContent = `${currentPlayer}'s turn`;
// }

// function checkWinner() {
// 	let roundWon = false;
// 	for (let i = 0; i < winConditions.length; i++) {
// 		let condition = winConditions[i];
// 		let cellA = options[condition[0]];
// 		let cellB = options[condition[1]];
// 		let cellC = options[condition[2]];

// 		if (cellA == '' || cellB == '' || cellC == '') {
// 			continue;
// 		}

// 		if (cellA == cellB && cellB == cellC) {
// 			roundWon = true;
// 			break;
// 		}
// 	}

// 	if (roundWon) {
// 		statusText.textContent = `${currentPlayer}' WIN`;
// 		running = false;
// 	} else if (!options.includes('')) {
// 		statusText.textContent = 'DRAW !!';
// 		running = false;
// 	} else {
// 		changePlayer();
// 	}
// }

// function restartGame() {}
