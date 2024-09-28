
game = ["rock","paper","scissor"]

// let the  computer choose between a random item from the game list
function getComputerChoice() {
    return game.at(Math.floor(Math.random() * 3))
}

// let the user choose between rock, paper or scissor
 function getHumanChoice() {
     let ans = prompt("choose ur pick rock, paper or scissor").toLowerCase()

     if (ans === "rock" || ans === "paper" || ans === "scissor") {
    alert("you choose " + ans)
}   else {
    alert("Invalid input, please only choose between rock, paper or scissor")
}
    return ans
}

// making the game rule
function playRound (humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        alert("Its a tie")
        alert('You have a score of ' + humanScore +' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "rock" && computerChoice == "paper") {
        alert("You lose! Computer choose paper and paper beats rock")
        computerScore++
        alert('You have a score of '+humanScore+' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "rock" && computerChoice == "scissor") {
        alert("You win! Computer choose scissor and rock beats scissor")
        humanScore++
        alert('You have a score of '+humanScore+' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "paper" && computerChoice == "rock") {
        alert("You win! Computer choose rock and paper beats rock")
        humanScore++
        alert('You have a score of '+humanScore+' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "paper" && computerChoice == "scissor") {
        alert("You lose! Computer choose scissor and scissor beats paper")
        computerScore++
        alert('You have a score of '+humanScore +' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "scissor" && computerChoice == "rock") {
        alert("You lose! Computer choose rock and rock beats scissor")
        computerScore++
        alert('You have a score of '+humanScore +' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "scissor" && computerChoice == "paper") {
        alert("You win! Computer choose paper and scissor beats paper")
        humanScore++
        alert('You have a score of '+humanScore+ ' and computer has a score of ' + computerScore)
    }
    
};
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame () {
    
    // making the scoreboard
    humanScore = 0
    computerScore = 0

    // looping the fucntion for 5 times
    for (let i=0; i <= 4; i++) {
        playRound(humanSelection,computerSelection)
    }
}

playGame()