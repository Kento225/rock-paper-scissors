let gameCounter = 0;

function playRound(){
// Computer picks random number
    let getComputerChoice = Math.floor(Math.random() * 3);
// Shows current loop number
    console.log("Game " , ++gameCounter);
    
// Converts random number to either rock, paper or scissors
    if (getComputerChoice === 0) {
        computerChoice = "rock";
    }else if (getComputerChoice === 1) {
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }
    
// Game outcomes depending on player choice
    function playerRock(){
    if (computerChoice === "rock"){
        console.log("Tie!");
    }else if(computerChoice === "scissors") {
        console.log("You win!");
    }else{
        console.log("You lose!");
    }
}
function playerScissors(){
    if (computerChoice === "rock"){
        console.log("You lose!");
    }else if(computerChoice === "scissors") {
        console.log("Tie!");
    }else{
        console.log("You win!");
    }
}
function playerPaper(){
    if (computerChoice === "rock"){
        console.log("You win!");
    }else if(computerChoice === "scissors") {
        console.log("You lose!");
    }else{
        console.log("Tie!");
    }
}
// Get player choice and convert to lower case
let getPlayerChoice = prompt("Choose rock, paper, scissors");
let playerChoice = getPlayerChoice.toLowerCase();

// Execute function depending on player choice
if(playerChoice === "rock"){
    playerRock();
}else if(playerChoice === "scissors"){
    playerScissors();
}else if(playerChoice === "paper"){
    playerPaper();

}
}
// Loop game to 5 rounds
for (let i = 0; i < 5; i++){
    playRound();
}
