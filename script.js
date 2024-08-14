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

let humanScore = 0;
let computerScore = 0;
let draw = 0;


    

    function playRound(humanChoice,computerChoice){
        const message = document.querySelector("#message")
        const playerSum = document.querySelector("#player-sum");
        const computerSum = document.querySelector("#computer-sum");
        const winnerMessage = document.querySelector("#winner-message");
        const drawSum = document.querySelector("#draw-sum");

        message.textContent = "";
        winnerMessage.textContent = "";
        
        if(humanChoice === computerChoice){
            message.textContent =  "Draw";
            draw += 1;
            drawSum.textContent = `Draw: ${draw}`
        } else if(humanChoice === 'rock'){
            if(computerChoice === 'paper'){
                computerScore += 1;
                message.textContent = "You lose! Paper beats Rock";
                computerSum.textContent = `Computer Score: ${computerScore}`;
            } else{
                humanScore += 1;
                message.textContent = "You win! Rock beats Scissors";
                playerSum.textContent = `Player Score: ${humanScore}`;
            }
        } else if(humanChoice === 'paper'){
            if(computerChoice === 'scissors'){
                computerScore += 1;
                message.textContent = "You lose! Scissors beats Paper";
                computerSum.textContent = `Computer Score: ${computerScore}`;
            } else{
                humanScore += 1;
                message.textContent = "You win! Paper beats Rock";
                playerSum.textContent = `Player Score: ${humanScore}`;
            }
        } else{
            if(computerChoice === 'rock'){
                computerScore += 1;
                message.textContent = "You lose! Rock beats Scissors";
                computerSum.textContent = `Computer Score: ${computerScore}`;
            } else{
                humanScore += 1;
                message.textContent = "You win! Scissors beats Paper";
                playerSum.textContent = `Player Score: ${humanScore}`;
            }
        }
        console.log(draw)
        console.log(humanScore)
        console.log(computerScore)
        if(draw + humanScore + computerScore === 5){
            if(humanScore > computerScore){
                winnerMessage.textContent = `You scored: ${humanScore}, Computer scored ${computerScore}, Congrats, You Win!`;
            } else if(humanScore < computerScore){
                winnerMessage.textContent =  `You scored: ${humanScore}, Computer scored ${computerScore}, Sorry, Computer Wins!`;
            } else{
                winnerMessage.textContent =  'Is it even possible to get a draw?';
            }
            humanScore = 0;
            computerScore = 0;
            draw = 0;

            drawSum.textContent = "Draw: 0";
            computerSum.textContent = "Computer Score: 0";
            playerSum.textContent = "Player Score: 0";
        }
        
    }

    


const menu = document.querySelector("#menu");
menu.addEventListener("click", (item) => {
    let target = item.target;

    switch(target.id){
        case 'rock':
            playRound('rock',getComputerChoice());
            break;
        case 'paper':
            playRound('paper',getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors',getComputerChoice());
            break;
    }
});
