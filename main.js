game = ["rock","paper","scissor"]

// Let the  computer choose between a random item from the game list
function getComputerChoice() {
    return game.at(Math.floor(Math.random() * 3))
}

//--------------------------------------------------------------------------------- Making the game rule -------------------------------------------------------------------------------------
function playRound (humanChoice, computerChoice) {
    const h3 = document.querySelector("h3")
    const h4 = document.querySelector("h4")

    if (humanChoice === computerChoice) {
        h3.textContent = ("Its a tie")
        h4.textContent = ('You have a score of ' + humanScore +' and computer has a score of '+computerScore)
        h3.style.border = ("1px solid grey")
        h3.style.backgroundColor = ("gray")
    }
    else if (humanChoice === "rock" && computerChoice == "paper") {
        h3.textContent = ("You lose! Computer choose paper and paper beats rock")
        computerScore++
        h4.textContent = ('You have a score of '+humanScore+' and computer has a score of '+computerScore)
        h3.style.border = ("1px solid grey")
        h3.style.backgroundColor = ("rgb(194, 60, 60)")
    }
    else if (humanChoice === "rock" && computerChoice == "scissor") {
        h3.textContent = ("You win! Computer choose scissor and rock beats scissor")
        humanScore++
        h4.textContent = ('You have a score of '+humanScore+' and computer has a score of '+computerScore)
        h3.style.border = ("1px solid grey")
        h3.style.backgroundColor = ("rgb(82, 206, 82)")
    }
    else if (humanChoice === "paper" && computerChoice == "rock") {
        h3.textContent = ("You win! Computer choose rock and paper beats rock")
        humanScore++
        h4.textContent = ('You have a score of '+humanScore+' and computer has a score of '+computerScore)
        h3.style.border = ("1px solid grey")
        h3.style.backgroundColor = ("rgb(82, 206, 82)")
    }
    else if (humanChoice === "paper" && computerChoice == "scissor") {
        h3.textContent = ("You lose! Computer choose scissor and scissor beats paper")
        computerScore++
        h4.textContent = ('You have a score of '+humanScore +' and computer has a score of '+computerScore)
        h3.style.border = ("1px solid grey")
        h3.style.backgroundColor = ("rgb(194, 60, 60)")
    }
    else if (humanChoice === "scissor" && computerChoice == "rock") {
        h3.textContent = ("You lose! Computer choose rock and rock beats scissor")
        computerScore++
        h4.textContent = ('You have a score of '+humanScore +' and computer has a score of '+computerScore)
        h3.style.border = ("1px solid grey")
        h3.style.backgroundColor = ("rgb(194, 60, 60)")
    }
    else if (humanChoice === "scissor" && computerChoice == "paper") {
        h3.textContent = ("You win! Computer choose paper and scissor beats paper")
        humanScore++
        h4.textContent = ('You have a score of '+humanScore+ ' and computer has a score of ' + computerScore)
        h3.style.border = ("1px solid grey")
        h3.style.backgroundColor = ("rgb(82, 206, 82)")
    }
    
}



const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')


humanScore = 0
computerScore = 0


// --------------------------------------------------------------------------Event listeners on all three buttons-------------------------------------------------------------------------------
rock.addEventListener("click",(e)=> {
    humanSelection = "rock"
   
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
    const body = document.querySelector("body")

    if (humanScore === 5) {
        body.textContent = ''
        const h1 = document.createElement("h1")
        h1.textContent = `Congratulations you have won the game!`
        body.appendChild(h1)
    } else if (computerScore === 5) {
        body.textContent = ''
        const h1 = document.createElement("h1")
        h1.textContent = `Computer has won the game, better luck next time!`
        body.appendChild(h1)
    } 
})


paper.addEventListener("click",(e)=> {
    
    humanSelection = "paper"

    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
    
    if (humanScore === 5) {
            body.textContent = ''
            const h1 = document.createElement("h1")
            h1.textContent = `Congratulations you have won the game!`
            body.appendChild(h1)
    } else if (computerScore === 5) {
            body.textContent = ''
            const h1 = document.createElement("h1")
            h1.textContent = `Computer has won the game, better luck next time!`
            body.appendChild(h1)
    }
})


scissor.addEventListener("click",(e)=> {
    
    humanSelection = "scissor"
      
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
    
    if (humanScore === 5) {
            body.textContent = ''
            const h1 = document.createElement("h1")
            h1.textContent = `Congratulations you have won the game!`
            body.appendChild(h1)
    } else if (computerScore === 5) {
            body.textContent = ''
            const h1 = document.createElement("h1")
            h1.textContent = `Computer has won the game, better luck next time!`
            body.appendChild(h1)
    }
})


