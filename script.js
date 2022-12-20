const choices = document.querySelector(".choices");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const box = document.querySelector(".box");
const result = document.querySelector(".result");



let playerResult = 0;
let computerResult = 0;
let gameCounter = 0;


choices.addEventListener("click",function(e){
    playRound()
});
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
        result.textContent = "Computer chose rock, Tie!";
    }else if(computerChoice === "scissors") {
        result.textContent = "Computer chose scissors, You win!";
        playerResult += 1;
    }else{
        result.textContent = "Computer chose paper, You lose!";
        computerResult += 1;
    }
}
function playerScissors(){
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
function playerPaper(){
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

// Execute function depending on player choice
rock.addEventListener("click",function(e){
    playerRock()
});
paper.addEventListener("click",function(e){
    playerPaper()
});
scissors.addEventListener("click",function(e){
    playerScissors()
});

console.log(computerResult);
console.log(playerResult);

}
