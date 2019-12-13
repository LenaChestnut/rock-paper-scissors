//Computer randomly returns Rock, Paper or Scissors

function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    let x = Math.floor(Math.random() * 3);
    return arr[x];
}