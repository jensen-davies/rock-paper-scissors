//Plays Rock Paper Scissors against the computer


function computerPlay() {

    //Randomly chooses and returns the computers play, either "Rock", "Paper", or "Scissors".

    const handChoice = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = handChoice[(Math.floor(Math.random()*handChoice.length))]
    return computerChoice.toLowerCase();
}

function playGame() {

    //Plays the actual game of "Rock Paper Scissors" versus the computer.

    playerChoice = prompt("Choose your move!").toLowerCase();
    computerChoice = computerPlay();
    let message = '';
    let playerWin = false;
    let gameTie = false;

    console.log(`You choose ${playerChoice} and I choose ${computerChoice}.`)

    switch (playerChoice) {
        //In this case, the player chooses rock.
        case 'rock':
            switch (computerChoice) {
                case 'scissors':
                    message = "You win! Rock crushes Scissors!";
                    playerWin = true;
                    break;
                case 'paper':
                    message = "You lose! Paper envelopes Rock!";
                    break;
                case 'rock':
                    message = "Tie! We both chose Rock!";
                    gameTie = true;
            }
            break;
        //In this case, the player chooses paper.
        case 'paper':
            switch (computerChoice) {
                case 'scissors':
                    message = "You lose! Scissors cut through Paper!";
                    break;
                case 'paper':
                    message = "Tie! We both chose Paper.";
                    gameTie = true;
                    break;
                case 'rock':
                    message = "You win! Paper envelopes Rock!";
                    playerWin = true;
            }
            break;
        //In this case, the player chooses scissors.
        case 'scissors':
            switch (computerChoice) {
                case 'scissors':
                    message = "Tie! We both chose Scissors.";
                    gameTie = true;
                    break;
                case 'paper':
                    message = "You win! Scissors cut through Paper!";
                    playerWin = true;
                    break;
                case 'rock':
                    message = "You lose! Rock crushes Scissors!";
            }
    }
    return [message, playerWin, gameTie];
}

function game(n) {

    let playerScore = 0;
    let computerScore = 0;
    console.log(`Playing Rock Paper Scissors ${n} times, and keeping score...`)

    for (let i = 0; i < n; i++) {
        //Play 1 game
        gameInfo = playGame();
        //Unpack gameInfo
        const message = gameInfo[0];
        const playerWin = gameInfo[1];
        const gameTie = gameInfo[2];
        //Print the results
        console.log(message);
        //Update scores
        if (playerWin) {
            playerScore++;
        } else if (!gameTie) {
            computerScore++;
        }
    }

    console.log(`Out of ${n} plays, you won ${playerScore} of them. I won ${computerScore}. Thanks for playing!`);

}