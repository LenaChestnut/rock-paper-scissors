//Computer randomly returns Rock, Paper or Scissors

let computerSelection;

function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    let x = Math.floor(Math.random() * 3);
    return computerSelection = arr[x];
}

//Function for a single round of the game

function playRound(playerSelection, computerSelection) {
    let x = playerSelection.toLowerCase();
    let playerChoice = x.charAt(0).toUpperCase() + x.slice(1);

    if (playerChoice === computerSelection) {
        console.log("It's a draw!");
        //return "It's a draw!";
    }  else if (playerChoice === "Paper" && computerSelection === "Rock" || playerChoice === "Rock" && computerSelection === "Scissors" || playerChoice === "Scissors" && computerSelection === "Paper") {
        if (playerChoice === "Scissors") {
            console.log("You win! Scissors beat " + computerSelection + ".");
            //return "You win! Scissors beat " + computerSelection + "."; 
        } else {
            console.log("You win! " + playerChoice + " beats " + computerSelection + ".");
            //return "You win! " + playerChoice + " beats " + computerSelection + ".";
        }
    } else if (computerSelection === "Paper" && playerChoice === "Rock" || computerSelection === "Rock" && playerChoice === "Scissors" || computerSelection === "Scissors" && playerChoice === "Paper") {
        if (computerSelection === "Scissors") {
            console.log("You lose! Scissors beat " + playerChoice + ".");
            //return "You lose! Scissors beat " + computerSelection + "."; 
        } else {
            console.log("You lose! " + computerSelection + " beats " + playerChoice + ".");
            //return "You lose! " + computerSelection + " beats " + playerChoice + ".";       
        }
    } else {
        //return "There's no " + playerChoice + " option. Try again";
        console.log("There's no " + playerChoice + " option. Try again");
    }
}