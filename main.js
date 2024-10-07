
game = ["rock","paper","scissor"]

// let the  computer choose between a random item from the game list
function getComputerChoice() {
    return game.at(Math.floor(Math.random() * 3))
}

// let the user choose between rock, paper or scissor
 function getHumanChoice() {
     let ans = prompt("choose ur pick rock, paper or scissor").toLowerCase()

     if (ans === "rock" || ans === "paper" || ans === "scissor") {
    alert("you choose " + ans.at(0).toUpperCase() + ans.slice(1))
}   else {
    alert("Invalid input, please only choose between rock, paper or scissor")
}
    return ans
}

// making the game rule
function playRound (humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        console.log("Its a tie")
        console.log('You have a score of ' + humanScore +' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "rock" && computerChoice == "paper") {
        console.log("You lose! Computer choose paper and paper beats rock")
        computerScore++
        console.log('You have a score of '+humanScore+' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "rock" && computerChoice == "scissor") {
        console.log("You win! Computer choose scissor and rock beats scissor")
        humanScore++
        console.log('You have a score of '+humanScore+' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "paper" && computerChoice == "rock") {
        console.log("You win! Computer choose rock and paper beats rock")
        humanScore++
        console.log('You have a score of '+humanScore+' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "paper" && computerChoice == "scissor") {
        console.log("You lose! Computer choose scissor and scissor beats paper")
        computerScore++
        console.log('You have a score of '+humanScore +' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "scissor" && computerChoice == "rock") {
        console.log("You lose! Computer choose rock and rock beats scissor")
        computerScore++
        console.log('You have a score of '+humanScore +' and computer has a score of '+computerScore)
    }
    else if (humanChoice === "scissor" && computerChoice == "paper") {
        console.log("You win! Computer choose paper and scissor beats paper")
        humanScore++
        console.log('You have a score of '+humanScore+ ' and computer has a score of ' + computerScore)
    }
    
}



function playGame () {
    
    // making the scoreboard
    humanScore = 0
    computerScore = 0
        
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
    
    if (humanScore > computerScore) {
        alert("Congratulations you won!")
    } else {
        alert("The computer won better luck next time!")
    }
}

// playGame()

const buttons = document.querySelectorAll("button")
buttons.addEventListener("click", playGame)