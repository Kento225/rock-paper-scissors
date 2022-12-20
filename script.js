const choices = document.querySelector(".choices");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const box = document.querySelector(".box");
const result = document.querySelector(".result");




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
    }else{
        result.textContent = "Computer chose paper, You lose!";
    }
}
function playerScissors(){
    if (computerChoice === "rock"){
        result.textContent = "Computer chose rock, You lose!";
    }else if(computerChoice === "scissors") {
        result.textContent = "Computer chose scissors, Tie!";
    }else{
        result.textContent = "Computer chose paper, You win!";
    }
}
function playerPaper(){
    if (computerChoice === "rock"){
        result.textContent = "Computer chose rock, You win!";
    }else if(computerChoice === "scissors") {
        result.textContent = "Computer chose scissors, You lose!";
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

}
