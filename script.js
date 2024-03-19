function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    return (choice[randomIndex]);
}

function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection.toLowerCase();
    if (checkWinner(playerSelection, computerSelection) === "tie") {
        return "It is a Tie!";
    }

    if (checkWinner(playerSelection, computerSelection) === "player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    if (checkWinner(playerSelection, computerSelection) === "computer") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
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

// function game() {
//     let i = 0;
//     do {
//         playerSelection = prompt("Rock Paper Scissors?: ");
//         while (!isInputCorrect(playerSelection)) {
//             alert("Kindly enter correct input");
//             playerSelection = prompt("Rock Paper Scissors?: ");
//         }
//         computerSelection = getComputerChoice();
//         console.log(`playerSelection: ${playerSelection} and computerSelection: ${computerSelection}`);
//         console.log(playRound(playerSelection, computerSelection));
//         i++;
//     }
//     while (i < 5);

// }

function isInputCorrect(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock"
        || playerSelection == "paper"
        || playerSelection == "scissors") {
        return true;
    }

    return false;
}


//game();


const btn = document.querySelectorAll(".btn");
btn.forEach(btn => {
    btn.addEventListener('click', () => {
        let playerSelection;
        if (btn.classList.contains('rock')) {
            playerSelection = 'rock';
        }
        else if (btn.classList.contains('paper')) {
            playerSelection = 'paper';
        }
        else {
            playerSelection = 'scissors';
        }
        console.log(playerSelection);

        playRound()

    })
})