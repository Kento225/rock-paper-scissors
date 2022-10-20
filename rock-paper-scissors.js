let gameCounter = 0;
function playRound(){
    let getComputerChoice = Math.floor(Math.random() * 3);
    console.log("Game " , ++gameCounter);
    

    if (getComputerChoice === 0) {
        computerChoice = "rock";
    }else if (getComputerChoice === 1) {
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }

    function playerRock(){
    if (computerChoice === "rock"){
        console.log("Tie!");
    }else if(computerChoice === "scissors") {
        console.log("You win!");
    }else if(computerChoice === "paper"){
        console.log("You lose!");
    }
}
function playerScissors(){
    if (computerChoice === "rock"){
        console.log("You lose!");
    }else if(computerChoice === "scissors") {
        console.log("Tie!");
    }else if(computerChoice === "paper"){
        console.log("You win!");
    }
}
function playerPaper(){
    if (computerChoice === "rock"){
        console.log("You win!");
    }else if(computerChoice === "scissors") {
        console.log("You lose!");
    }else if(computerChoice === "paper"){
        console.log("Tie!");
    }
}

let getPlayerChoice = prompt("Choose rock, paper, scissors");
let playerChoice = getPlayerChoice.toLowerCase();

if(playerChoice === "rock"){
    playerRock();
}else if(playerChoice === "scissors"){
    playerScissors();
}else if(playerChoice === "paper"){
    playerPaper();

}
}
for (let i = 0; i < 5; i++){
    playRound();
}
