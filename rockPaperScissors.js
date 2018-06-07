//variables

var computerSelection;
var userSelection;
var choices = ["rock", "paper", "scissors"];

function getUserInput() {
    var userInput;
    
    userInput = document.getElementById("userChoice").value;

    //check to see that user made a choice
    if(userInput === '') {
        window.alert("Please make a selection.");
    }
    else {
        userInput = userInput.toLowerCase();
        if(userInput !== 'r' && userInput !== 'p' && userInput !== 's') {
            window.alert("Invalid input.\nPlease enter r for rock, p for paper, or s for scissors.");
        }
        else if (userInput === 'r') {
            userSelection = 'rock';
        }
        else if (userInput === 'p') {
            userSelection = "paper";
        }
        else {
            userSelection = "scissors";
        }

        document.getElementById("userChoice").value = "";
    }
}

function getComputerSelection() {
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function compareSelections() {
    var winner;
    var playerScore;
    var computerScore;

    getUserInput();
    
    if (userSelection !== undefined) {
        document.getElementById("userPlay").value = userSelection;
        computerSelection = getComputerSelection();
        document.getElementById("computerChoice").value = computerSelection;
    
        if (userSelection === 'rock') {
            if (computerSelection === 'rock') {
                winner = "tie";
                document.getElementById("winner").value = winner;
            }
            else if (computerSelection === 'paper') {
                winner = "computer";
                document.getElementById("winner").value = winner;
            }
            else {
                winner = "player";
                document.getElementById("winner").value = winner;
            }
        }
        else if (userSelection === 'paper') {
            if (computerSelection === 'rock') {
                winner = "player";
                document.getElementById("winner").value = winner;
            }
            else if (computerSelection === 'paper') {
                winner = "tie";
                document.getElementById("winner").value = winner;
            }
            else {
                winner = "computer";
                document.getElementById("winner").value = winner;
            }
        }
        //user selected scissors
        else {
            if (computerSelection === 'rock') {
                winner = "computer";
                document.getElementById("winner").value = winner;
            }
            else if (computerSelection === 'paper') {
                winner = "player";
                document.getElementById("winner").value = winner;
            }
            else {
                winner = "tie";
                document.getElementById("winner").value = winner;
            }
        }
        
        playerScore = parseInt(document.getElementById("userScore").value);
        computerScore = parseInt(document.getElementById("computerScore").value);
        if (document.getElementById("userChoice").value !== '') {
            if (document.getElementById("winner").value === 'player') {
                playerScore++;
                document.getElementById("userScore").value = playerScore;
            }
            else if (document.getElementById("winner").value === 'computer') {
                computerScore++;
                document.getElementById("computerScore").value = computerScore;
            }
        }
    }
}