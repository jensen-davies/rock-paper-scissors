//Plays Rock Paper Scissors against the computer
let playerScore = 0;
let computerScore = 0;
const playerOptions = document.querySelectorAll('#rock, #paper, #scissors');
const playerScoreBoard = document.querySelector('#playerBoard');
const computerScoreBoard = document.querySelector('#computerBoard');
const gameDescription = document.querySelector('.description')
const hands = document.querySelector('#playerHand')
const resetButton = document.createElement('button');

playerOptions.forEach(button => button.addEventListener('click', playerChoice));


function playerChoice(e) {
    const buttonChoice = this.id;
    game(buttonChoice);
}

function computerPlay() {
    //Randomly chooses and returns the computers play, either "Rock", "Paper", or "Scissors".

    const handChoice = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = handChoice[(Math.floor(Math.random()*handChoice.length))]
    return computerChoice.toLowerCase();
}

function playGame(buttonChoice) {
    //Plays the actual game of "Rock Paper Scissors" versus the computer.

    const computerChoice = computerPlay();
    const playerChoice = buttonChoice;
    let playerWin = false;
    let gameTie = false;

    hands.textContent = `You choose ${playerChoice} and I choose ${computerChoice}.`;

    switch (playerChoice) {
        //In this case, the player chooses rock.
        case 'rock':
            switch (computerChoice) {
                case 'scissors':
                    gameDescription.textContent = "You win! Rock crushes Scissors!";
                    playerWin = true;
                    break;
                case 'paper':
                    gameDescription.textContent = "You lose! Paper envelopes Rock!";
                    break;
                case 'rock':
                    gameDescription.textContent = "Tie! We both chose Rock!";
                    gameTie = true;
            }
            break;
        //In this case, the player chooses paper.
        case 'paper':
            switch (computerChoice) {
                case 'scissors':
                    gameDescription.textContent = "You lose! Scissors cut through Paper!";
                    break;
                case 'paper':
                    gameDescription.textContent = "Tie! We both chose Paper.";
                    gameTie = true;
                    break;
                case 'rock':
                    gameDescription.textContent = "You win! Paper envelopes Rock!";
                    playerWin = true;
            }
            break;
        //In this case, the player chooses scissors.
        case 'scissors':
            switch (computerChoice) {
                case 'scissors':
                    gameDescription.textContent = "Tie! We both chose Scissors.";
                    gameTie = true;
                    break;
                case 'paper':
                    gameDescription.textContent = "You win! Scissors cut through Paper!";
                    playerWin = true;
                    break;
                case 'rock':
                    gameDescription.textContent = "You lose! Rock crushes Scissors!";
            }
    }
    return [playerWin, gameTie];
}

function game(buttonChoice) {

    gameInfo = playGame(buttonChoice);
    //Unpack gameInfo array
    const playerWin = gameInfo[0];
    const gameTie = gameInfo[1];

    //Update scores
    if (playerWin) {
        playerScore++;
    } else if (!gameTie) {
        computerScore++;
    }
    
    console.log(playerScore);
    console.log(computerScore);

    if (playerScore === 5 || computerScore === 5) {
        gameDescription.appendChild(resetButton);
        resetButton.classList.add('resetButton');
        resetButton.textContent = 'Reset Game';
        resetButton.addEventListener('click', resetGame)
    }

    if (playerScore === 5) {
        playerScoreBoard.textContent = 'Holy shit, you won 5 games!'
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        computerScoreBoard.textContent = 'My binary brain destroyed you!'
        playerScore = 0;
        computerScore = 0;
    } else {
    playerScoreBoard.textContent = `Your score is ${playerScore}`;
    computerScoreBoard.textContent= `My score is ${computerScore}`;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameDescription.textContent = ``;
    playerScoreBoard.textContent = `Your score is ${playerScore}`;
    computerScoreBoard.textContent= `My score is ${computerScore}`;
    hands.textContent = 'Choose a move, first to 5 wins!';
}