let humanScore = 0;
let computerScore = 0;  

let getHumanChoice = () => {
    let ipt = prompt(`Enter rock, paper or scissors:`).toLowerCase();
    return ipt;
} 

function getComputerChoice () {
    let compChoice = Math.floor(Math.random() * 3); 
    if (compChoice === 0) {return `rock`};
    if (compChoice === 1) {return `paper`};
    if (compChoice === 2) {return `scissors`};
}

function playRound () {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`Your choice: ${humanChoice}, computer choice: ${computerChoice}.`)

    if ( humanChoice === computerChoice ) {
        console.log(`Score!`);
        console.log(`user: ${humanScore} vs computer: ${computerScore}`);
    }
    else if ( humanChoice ===  `rock` && computerChoice === `paper`) {
        console.log(`You lose! Paper beats Rock.`);
        computerScore += 1;
        console.log(`user: ${humanScore} vs computer: ${computerScore}`);
    }
    else if ( humanChoice ===  `rock` && computerChoice === `scissors`) {
        console.log(`You won! Rock beats scissors.`);
        humanScore += 1;
        console.log(`user: ${humanScore} vs computer: ${computerScore}`);
    }
    else if ( humanChoice ===  `paper` && computerChoice === `rock`) {
        console.log(`You won! Paper beats Rock.`);
        humanScore += 1;
        console.log(`user: ${humanScore} vs computer: ${computerScore}`);
    }
    else if ( humanChoice ===  `paper` && computerChoice === `scissors`) {
        console.log(`You lose! Scissors beats paper.`);
        computerScore += 1;
        console.log(`user: ${humanScore} vs computer: ${computerScore}`);
    }
    else if ( humanChoice ===  `scissors` && computerChoice === `rock`) {
        console.log(`You lose! Rock beats scissors.`);
        computerScore += 1;
        console.log(`user: ${humanScore} vs computer: ${computerScore}`);
    }
    else if ( humanChoice ===  `scissors` && computerChoice === `paper`) {
        console.log(`You won! Scissors beats paper.`);
        humanScore += 1;
        console.log(`user: ${humanScore} vs computer: ${computerScore}`);
    } 
}

playRound();