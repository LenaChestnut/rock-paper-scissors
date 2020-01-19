//Computer randomly returns Rock, Paper or Scissors

let computerSelection;
let playerSelection;

let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');

let roundNumber = 1;

let playerScore = 0;
let computerScore = 0;

let roundDisplay = document.querySelector('.round-display');
let playerDisplay = document.querySelector('.player-choice');
let computerDisplay = document.querySelector('.computer-choice');

let choices = document.querySelector('.choices');

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

let playButton = document.querySelectorAll(".choice-button");
let resetButton = document.querySelector(".reset")

let result = document.querySelector('.result');
let message = document.querySelector('h1 + p');

//add event listener for a single round logic to each button
choices.addEventListener('click', function(e) {
    //make sure that the clicked element is a button. 
    //nodeName is a read-only property that returns name of the node in uppercase
    const isButton = e.target.nodeName;
    if (isButton !== 'BUTTON') {
        return;
    }

    if (roundNumber < 5) {
        playerPlay(e);
        computerPlay();
        game();
        updateScore();
        roundCount();
    } else {
        playerPlay(e);
        computerPlay();
        game();
        updateScore();

        result.classList.remove('hidden');
        message.classList.add('hidden');

        if (playerScore > computerScore) {
            result.textContent = "You won!";
        } else if (playerScore < computerScore) {
            result.textContent = "You lost";
        } else {
            result.textContent = "Draw";
        }

        for (let i = 0; i < playButton.length; i++) {
            playButton[i].classList.add("hidden");
        }

        resetButton.classList.remove("hidden");

    }
    
})

//assigned selected option to playerSelection
function playerPlay(e) {
    if (e.target === rockButton) {
        playerSelection = 'rock';
    } else if (e.target === paperButton) {
        playerSelection = 'paper';
    } else if (e.target === scissorsButton) {
        playerSelection = 'scissors';
    }
}

//computer randomly selects an option
function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    let x = Math.floor(Math.random() * 3);
    computerSelection = arr[x];
}

//round logic
function game() {

    updateDisplay();

    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === 1) {
        playerScore++;
    } else if (roundResult === -1) {
        computerScore++;
    }

}

function updateDisplay() {
    switch(playerSelection) {
        case 'rock':
            playerDisplay.innerHTML = '<i class="fas fa-hand-rock"></i>';
            break;
        case 'paper':
            playerDisplay.innerHTML = '<i class="fas fa-hand-paper"></i>';
            break;
        case 'scissors':
            playerDisplay.innerHTML = '<i class="fas fa-hand-scissors"></i>';
            break;
    }

    switch(computerSelection) {
        case 'rock':
            computerDisplay.innerHTML = '<i class="fas fa-hand-rock"></i>';
            break;
        case 'paper':
            computerDisplay.innerHTML = '<i class="fas fa-hand-paper"></i>';
            break;
        case 'scissors':
            computerDisplay.innerHTML = '<i class="fas fa-hand-scissors"></i>';
            break;
    }

}

function playRound() {

    if (playerSelection === computerSelection) {
        //DRAW
        return 0;
    }  else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper") {
        //PLAYER WIN
        return 1;
    } else if (computerSelection === "paper" && playerSelection === "rock" || computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "paper") {
        //PLAYER LOSE
        return -1;       
    }
}

function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function roundCount() {
    roundNumber++;
    roundDisplay.textContent = roundNumber;
}

resetButton.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;

    updateScore();

    roundNumber = 1;

    resetButton.classList.add('hidden');

    for (let i = 0; i < playButton.length; i++) {
        playButton[i].classList.remove("hidden");
    }

    result.classList.add('hidden');
    message.classList.remove('hidden');

    roundDisplay.textContent = roundNumber;

    playerDisplay.textContent = "";
    computerDisplay.textContent = "";
});

