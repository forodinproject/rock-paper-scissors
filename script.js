function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 10));
    console.log(randomNumber);
    if (randomNumber >= 0 && randomNumber <= 3)
    {
        return "rock";
    }
    if (randomNumber >=4 && randomNumber <= 6) 
    {
        return "paper";
    }
    if (randomNumber >=7 && randomNumber <=9)
    {
        return "scissors";
    }


}
// function checkPlayerSelection() {
//     let isChoiceWrong = true;
//     do {
//         let playerSelection = prompt("Enter Rock paper or scissors: ");
//         playerSelection = playerSelection.toLowerCase();
//     }
//     while(isChoiceWrong === true) {
//         if (playerSelection === rock || playerSelection === paper || playerSelection === scissors)
//         {
//             isChoiceWrong = false;
//             return;
//         }
//         else {
//             console.log("enter correct choice"); 
//         }
//     }
//     return;
// }

function playRound(playerSelection, computerSelection ) {


}

function game() {

}

//checkPlayerSelection();
let computerSelection = getComputerChoice();
console.log(computerSelection);