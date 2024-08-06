function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    switch (random){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("0 for rock, 1 for paper, 2 for scissors");
    switch (choice){
        case "0":
            return "rock";
        case "1":
            return "paper";
        case "2":
            return "scissors";
    }
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,computerChoice){
        if(humanChoice === computerChoice){
            return "Draw"
        }
        if(humanChoice === 'rock'){
            if(computerChoice === 'paper'){
                computerScore += 1;
                return "You lose! Paper beats Rock"
            } else{
                humanScore += 1;
                return "You win! Rock beats Scissors"
            }
        } else if(humanChoice === 'paper'){
            if(computerChoice === 'scissors'){
                computerScore += 1;
                return "You lose! Scissors beats Paper"
            } else{
            humanScore += 1;
            return "You win! Paper beats Rock"
            }
        } else{
            if(computerChoice === 'rock'){
                computerScore += 1;
                return "You lose! Rock beats Scissors"
            } else{
                humanScore += 1;
                return "You win! Scissors beats Paper"
            }
        }
    }

    console.log(playRound(getHumanChoice(),getComputerChoice()));
    console.log(playRound(getHumanChoice(),getComputerChoice()));
    console.log(playRound(getHumanChoice(),getComputerChoice()));
    console.log(playRound(getHumanChoice(),getComputerChoice()));

    if(humanScore > computerScore){
        return `You scored: ${humanScore}, Computer scored ${computerScore}, Congrats, You Win!`
    } else if(humanScore < computerScore){
        return `You scored: ${humanScore}, Computer scored ${computerScore}, Sorry, Computer Wins!`
    } else{
        return 'Is is even possible to get a draw?'
    }
}

console.log(playGame());