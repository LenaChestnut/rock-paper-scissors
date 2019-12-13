//Computer randomly returns Rock, Paper or Scissors

let computerSelection;

function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    let x = Math.floor(Math.random() * 3);
    return arr[x];
}

//Function for a single round of the game

/*function playRound(playerSelection, computerSelection) {
    let x = playerSelection.toLowerCase();
    let playerChoice = x.charAt(0).toUpperCase() + x.slice(1);

    if (playerChoice === computerSelection) {
        //console.log("It's a draw!");
        return "It's a draw!";
    }  else if (playerChoice === "Paper" && computerSelection === "Rock" || playerChoice === "Rock" && computerSelection === "Scissors" || playerChoice === "Scissors" && computerSelection === "Paper") {
        if (playerChoice === "Scissors") {
            //console.log("You win! Scissors beat " + computerSelection + ".");
            return "You win! Scissors beat " + computerSelection + "."; 
        } else {
            //console.log("You win! " + playerChoice + " beats " + computerSelection + ".");
            return "You win! " + playerChoice + " beats " + computerSelection + ".";
        }
    } else if (computerSelection === "Paper" && playerChoice === "Rock" || computerSelection === "Rock" && playerChoice === "Scissors" || computerSelection === "Scissors" && playerChoice === "Paper") {
        if (computerSelection === "Scissors") {
            //console.log("You lose! Scissors beat " + playerChoice + ".");
            return "You lose! Scissors beat " + computerSelection + "."; 
        } else {
            //console.log("You lose! " + computerSelection + " beats " + playerChoice + ".");
            return "You lose! " + computerSelection + " beats " + playerChoice + ".";       
        }
    } else {
        return "There's no " + playerChoice + " option. Try again";
        //console.log("There's no " + playerChoice + " option. Try again");
    }
} */

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        //DRAW
        return 0;
    }  else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper") {
        //PLAYER WIN
        return 1;
    } else if (computerSelection === "paper" && playerSelection === "rock" || computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "paper") {
        //PLAYER LOSE
        return -1;       
    } else {
        //ERROR
        return 2;
    }
}

//Game function

function game() {
    //create variables to keep score
    let playerScore = 0;
    let computerScore = 0;

    //loop for 5 rounds
    for (let i = 1; i < 6; i++) {
        //player's input is converted to lowercase and computer's choice is a result of the function
        let playerChoice = prompt("Rock, paper or scissors?");
        let playerSelection = playerChoice.toLowerCase();
        let computerSelection = computerPlay();

        //output message is determined based on the result of the playRound() function
        let roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === 1) {
            playerScore++;
            console.log("WIN! You've beaten " + computerSelection + " with " + playerSelection);
        } else if (roundResult === -1) {
            computerScore++;
            console.log("Lose! Your " + playerSelection + " lost to " + computerSelection);
        } else if (roundResult === 0) {
            console.log("It's a draw!");
        } else {
            console.log("Sorry, " + playerChoice + " isn't one of the options.");
        }

        //score is printed at the end of each round
        console.log("Score: " + playerScore + ":" + computerScore);
        
    }

    //final score and the result are printed out after 5 rounds
    console.log("FINAL SCORE: " + playerScore + ":" + computerScore);

    if (playerScore === computerScore) {
        console.log("It's a tie!");
    } else if (playerScore > computerScore) {
        console.log("You won!");
    } else {
        console.log("You lost");
    }

}