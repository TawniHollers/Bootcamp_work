//GLOBALS
// Initialize who's turn it is
let whosTurn = 1;
let compPlayer = false;
let gameOver = false;
let player1Count = 1;
let player2Count = 1;
const messageDiv = document.getElementById('message');
let player1Squares = [];
let player2Squares = [];
let player1Score = document.getElementById('player1');
let player2Score = document.getElementById('player2');
const winningCombos = [
    ['A1','B1','C1'], //ROW 1
    ['A2','B2','C2'], //ROW 2
    ['A3','B3','C3'], //ROW 3
    ['A1','A2','A3'], //COLUMN 1
    ['B1','B2','B3'], //COLUMN 2
    ['C1','C2','C3'], //COLUMN 3
    ['A1','B2','C3'], //DIAG 1
    ['A3','B2','C1'] //DIAG 2
];

const squares = document.getElementsByClassName('square');
const reset = document.getElementById('reset');
const computer = document.getElementById('comp');
reset.addEventListener('click', function(){
	resetGame(squares);
})
computer.addEventListener('click', function(){
	resetGame(squares);
	compPlayer = true;
	computerPlay();
})

//console.log(squares);
for(let i = 0; i < squares.length; i++){
	//console.log(squares[i]);
	squares[i].addEventListener('click', function(){
		markSquare(squares[i]);
	})
}

function markSquare(clickedSquare){
	//console.log("User clicked a square");
	//console.log(squareID);
	//const clickedSquare = document.getElementById(squareID);
	// Two things happen when someone clicks on a square
	// 1. We change the DOM ... this part is for the User
	// 1a. Check to see if the user can mark that square
	// 2. We change variables for JS
	// 2b. Give control of the board to the other player

	// check to see if there's already a letter in the square

	if(!gameOver){
		if(clickedSquare.innerHTML !== `-`){
			// if there isn't a dash, someone has already taken this square. Goodbye.
			if(compPlayer){
				computerPlay();
			}
			else{
				messageDiv.innerHTML = `Sorry,  that square is already taken.`;
			}
		}
		else if(whosTurn === 1){
			if(!compPlayer){
				clickedSquare.innerHTML = `X`;
				whosTurn = 2;
				player1Squares.push(clickedSquare.id);
				checkWin(1, player1Squares);
			}
			else{
				clickedSquare.innerHTML = `X`;
				whosTurn = 2;
				player1Squares.push(clickedSquare.id);
				checkWin(1, player1Squares);
			}
		}
		else{
			clickedSquare.innerHTML = `O`;
			whosTurn = 1;
			player2Squares.push(clickedSquare.id);
			checkWin(2, player2Squares);
			if(compPlayer){
				computerPlay();
			}
		}
	}

}

function checkWin(whoJustMarked, playerSquares){
	// What do we need to know to check if someone won?
	// 1. What squares they have
	// 2. Are there 3 in a row
	// 3. Who is this?
	
	for(let i = 0; i < winningCombos.length; i++){
		let squareCount = 0;

		for(let j = 0; j < winningCombos[i].length; j++){
			const currentWinngingSquare = winningCombos[i][j];
			// indexOf, finds the first index of the given element. If it can't find it, it returns -1
			if(playerSquares.indexOf(currentWinngingSquare) > -1){
				squareCount++;
			}
			if(squareCount === 3){
				messageDiv.innerHTML = `Player ${whoJustMarked} has won the game!`;
				gameOver = true;
				for(let w = 0; w < winningCombos[i].length; w++){
					const thisSquare = document.getElementById(winningCombos[i][w]);
					thisSquare.className += ' winning-square';
				}
				if(whoJustMarked === 1){
					player1Score.innerHTML = `Player 1 score = ${player1Count}`;
					player1Count++;
				}
				else{
					player2Score.innerHTML = `Player 1 score = ${player2Count}`;
					player2Count++;
				}
				
			}
		}
	}
}

function resetGame(squares){
	for(let p = 0; p < squares.length; p++){
		squares[p].innerHTML = '-';
	}
	whosTurn = 1;
	player1Squares = [];
	player2Squares = [];
	const thisSquare = document.getElementsByClassName(`square`);
	//console.log(thisSquare);
	for(let d = 0; d < thisSquare.length; d++){
		//console.log(thisSquare[d]);
		thisSquare[d].className = 'square';
	}
	gameOver = false;
	compPlayer = false;
	messageDiv.innerHTML = '';
}

function computerPlay(){
	if(!gameOver){
		let randNum = Math.random();
		let num = Math.floor(randNum * 9);
		//console.log(squares[num]);
		markSquare(squares[num]);
	}
	
}