// make a list of them and add it to game variable
game = ["rock","paper","scissor"]

// let the  computer choose between a random item from the game list
function getComputerChoice() {
    return game.at(Math.floor(Math.random() * 3))
}

// let the user choose between rock, paper or scisso
let getHumanChoice = prompt("choose ur pick rock, paper or scissor").toLowerCase()

if (getHumanChoice === "rock" || getHumanChoice === "paper" || getHumanChoice === "scissor") {
    alert("you choose " + getHumanChoice)
}   else {
    alert("Invalid input, please only choose between rock, paper or scissor")
}

// making the scoreboard
humanScore = 0
computerScore = 0
