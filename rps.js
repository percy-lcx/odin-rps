function getBotChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
        return "rock";
    } else if (randNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function playRound(playerSelection, computerSelection) {
function playRound() {
    // computerSelection = getBotChoice();
    // y = computerSelection;
    let getUserChoice = prompt("Rock, paper, or scissors? ");
    let userChoice = getUserChoice.toLowerCase();
    let botChoice = getBotChoice();
    gameplay = `You used ${userChoice}, the bot used ${botChoice}.`;
    console.log(gameplay);
    if ( userChoice === "rock" && botChoice === "scissors") {
        result = "You win! Rock beats scissors.";
        return result;
    } else if ( userChoice === "rock" && botChoice === "paper") {
        result = "You lose. Paper beats rock.";
        return result;
    } else if ( userChoice === "paper" && botChoice == "rock" ) {
        result = "You win! Paper beats rock.";
        return result;
    } else if ( userChoice === "paper" && botChoice == "scissors" ) {
        result = "You lose. Scissors beat paper.";
        return result;
    } else if ( userChoice === "scissors" && botChoice == "paper" ) {
        result = "You win. Scissors beat paper.";
        return result;
    } else if ( userChoice === "scissors" && botChoice == "rock" ) {
        result = "You lose. Rock beats scissors.";
        return result;
    } else {
        result = "It's a tie.";
        return result;
    }
}

function playGame() {
    let userScore = 0;
    let botScore = 0;
    let roundNum = 1;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${roundNum} out of 5.`);
        playRound();
        if ( result.at(4) === "w" ) {
            userScore += 1;
        } else if ( result.at(4) === "l" ) {
            botScore += 1;
        } else {
            userScore = userScore;
            botScore = botScore;
        }
        console.log(result);
        console.log(`Your score: ${userScore}.`);
        console.log(`Bot's score: ${botScore}.`);
        roundNum += 1;
    }
    if ( userScore > botScore ) {
        announcement = "You won the game.";
        return announcement;
    } else {
        announcement = "You lost the game.";
        return announcement;
    }
}