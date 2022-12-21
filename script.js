const choices = document.querySelector(".choices");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const box = document.querySelector(".box");
const result = document.querySelector(".result");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const gameCount = document.querySelector("#gamecount")

let currentGame = 1;
let playerResult = 0;
let computerResult = 0;
let gameCounter = 0;

// gets player choice from buttons
rock.addEventListener("click",function(e){
    playRound("rock")
})
paper.addEventListener("click", function(e){
    playRound("paper")
});
scissors.addEventListener("click", function(e){
    playRound("scissors")
});
function playRound(playerChoice){
// Computer picks random number
    let getComputerChoice = Math.floor(Math.random() * 3);
    
// Converts random number to either rock, paper or scissors
    if (getComputerChoice === 0) {
        computerChoice = "rock";
    }else if (getComputerChoice === 1) {
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }
    
// Game outcomes depending on player choice, adds score
if (playerChoice === "rock"){
    if (computerChoice === "rock"){
        result.textContent = "Computer chose rock, Tie!";
    }else if(computerChoice === "scissors") {
        result.textContent = "Computer chose scissors, You win!";
        playerResult += 1;
    }else{
        result.textContent = "Computer chose paper, You lose!";
        computerResult += 1;
    }
}
if (playerChoice === "scissors"){
    if (computerChoice === "rock"){
        result.textContent = "Computer chose rock, You lose!";
        computerResult += 1;
    }else if(computerChoice === "scissors") {
        result.textContent = "Computer chose scissors, Tie!";
    }else{
        result.textContent = "Computer chose paper, You win!";
        playerResult += 1;
    }
}
if (playerChoice === "paper"){
    if (computerChoice === "rock"){
        result.textContent = "Computer chose rock, You win!";
        playerResult += 1;
    }else if(computerChoice === "scissors") {
        result.textContent = "Computer chose scissors, You lose!";
        computerResult += 1;
    }else{
        result.textContent = "Computer chose paper, Tie!";
    }
}

player.textContent = playerResult;
computer.textContent = computerResult;
gameCount.textContent = `Game : ${currentGame}`;


// determines winner from score
if(playerResult === 5){
    alert("You Won!")
    playerResult = 0
    computerResult = 0
    currentGame += 1
}else if(computerResult === 5){
    alert("You lost!")
    currentGame += 1
    playerResult = 0
    computerResult = 0

}
}
