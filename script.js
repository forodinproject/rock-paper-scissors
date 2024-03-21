let computerScore = 0;
let playerScore = 0;
let result = '';

function getComputerSelection() {
    const choice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    return (choice[randomIndex]);
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);

    });
});



function playRound(playerSelection) {
    let computerSelection = getComputerSelection();

    if (checkWinner(playerSelection, computerSelection) === "tie") {
        result = `It's a tie! Both chose ${playerSelection}`;
    }

    if (checkWinner(playerSelection, computerSelection) === "player") {
        playerScore += 1;
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    if (checkWinner(playerSelection, computerSelection) === "computer") {
        computerScore += 1;
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    document.querySelector(".result").innerText = result;
    document.querySelector(".playerScore").innerText = `player score: ${playerScore}`;
    document.querySelector(".computerScore").innerText = `computer score: ${computerScore}`;
    if (playerScore === 5) {
        document.querySelector(".winningMessage").innerText = "Player Wins! Reload to play again";
        disableButtons();
        return;
    }
    if (computerScore === 5) {
        document.querySelector(".winningMessage").innerText = "Computer Wins! Reload to play again";
        disableButtons();
        return;
    }

}




function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "player";
    }
    return "computer";
}






