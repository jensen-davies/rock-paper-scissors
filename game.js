//Plays Rock Paper Scissors against the computer


function computerPlay() {

    //Randomly chooses and returns the computers play, either "Rock", "Paper", or "Scissors".

    const handChoice = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = handChoice[(Math.floor(Math.random()*handChoice.length))]
    return computerChoice.toLowerCase();
}

function playGame(playerChoice, computerChoice) {

    //Plays the actual game of "Rock Paper Scissors" versus the computer.

    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerPlay();

    console.log(`You choose ${playerChoice} and I choose ${computerChoice}.`)

    switch (playerChoice) {

        //In this case, the player chooses rock.
        case 'rock':
            switch (computerChoice) {
                case 'scissors':
                    console.log("You win! Rock crushes Scissors!");
                    break;
                case 'paper':
                    console.log("You lose! Paper envelopes Rock!");
                    break;
                case 'rock':
                    console.log("Tie! We both chose Rock!");
            }
            break;
        //In this case, the player chooses paper.
        case 'paper':
            switch (computerChoice) {
                case 'scissors':
                    console.log("You lose! Scissors cut through Paper!");
                    break;
                case 'paper':
                    console.log("Tie! We both chose Paper.");
                    break;
                case 'rock':
                    console.log("You win! Paper envelopes Rock!");
            }
        //In this case, the player chooses scissors.
        case 'scissors':
            switch (computerChoice) {
                case 'scissors':
                    console.log("Tie! We both chose Scissors.");
                    break;
                case 'paper':
                    console.log("You win! Scissors cut through Paper!");
                    break;
                case 'rock':
                    console.log("You lose! Rock crushes Scissors!");
            }
    }

}