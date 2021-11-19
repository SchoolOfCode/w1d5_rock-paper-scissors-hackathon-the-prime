/*Task 1: Logic
To complete this ticket you will need to write a set of if statements that will determine the winner of rock, paper, scissors.

The two moves should be stored in two variables like so:

let playerMove = "rock";
let computerMove = "paper";
You'll want to hard-code each move in these variables (like the example above) to check each piece of logic at first.

This will be deemed as complete when all permutations of the three possible moves for each player have been handled correctly, e.g. rock vs rock is a draw, paper vs rock is a paper win, etc.*/


/*Task 2: Function
Take the if statements that you've written and tested and put them into a function. The variables from before should now be taken in as parameters so that you can call the function with any two moves. Instead of printing the result to the console, the function should return:

1 if player1 wins
0 if it is a draw
-1 if player1 loses (player2 wins)
The function should be able to be used like so: */


/*This will be deemed as complete when the function can be called with any combination of valid moves and returns the appropriate number.

Task 3: User Input
Using prompt, get a user-inputted value for the player move. Then call your function with that value as the player move and the hard-coded computer move. Display the result using alert.

This will be deemed as complete when you can input any move for the player move and hard-code any move for the computer move and see the correct result (1, 0, or -1) in the alert.*/




/*Task 4: Computer Player
Write a function that generates a random computer move. Use that function to make a dynamic game where the computer move is randomly chosen every time instead of being hard-coded.

Hint
This will be deemed as complete when the player can input any move in the prompt, the computer move is chosen by random, and the correct result shows in the alert.*/



/*Task 5: Game Loop
Now that we have a fully functioning game, our next step is to have it run as many times as people would like to play without having to refresh the page.

Use a while loop and confirm.

This will be deemed as complete when a player can keep playing indefinitely and has the option to stop playing after every round.*/



/*Task 6: Scores
Keep track of how many games have been played, as well as the number of wins, losses, and draws.

This will be deemed as complete when this information is displayed after each round.

Task 7: Get the player's name using a prompt
Create a username prompt and use the username the player inputs in the game so that a player can see their name in the messages sent to them.

To make it more uniform, restrict the number of characters a username can be to 10 or fewer.

This will be deemed as complete when the users cannot enter a username longer than 10 characters.

🌟 BONUS: Make it so that valid usernames should only start with letters, not numbers or symbols.
🌟 EXTRA BONUS: Make it so that the first letter of the username should be capitalised.*/

/*Bonus task extensions - pick whichever one(s) you fancy
Extension 1: Extend the logic
Rock, paper scissors is now boring. We need to jazz is up a bit.
Add some more moves that a player can make.
Check out this example:
rock paper scissors lizard spock

Modify your logic to represent your new version of this timeless children's game.*/
let isGameOn = true
const playerName = getPlayerName()
const gameStats = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

function getWinner(playerMove, computerMove) {
    if (playerMove === 'rock' && computerMove === 'scissors' || playerMove === 'rock' && computerMove === 'lizard' || playerMove === 'scissors' && computerMove === 'paper' ||  playerMove === 'scissors' && computerMove === 'lizard' || playerMove === 'paper' && computerMove === 'rock' || playerMove === 'paper' && computerMove === 'spock' || playerMove === 'spock' && computerMove === 'scissors' || playerMove === 'spock' && computerMove === 'rock' || playerMove === 'lizard' && computerMove === 'spock' || playerMove === 'lizard' && computerMove === 'paper') {
        gameStats.wins++;
        return 1
    } else if (playerMove === 'rock' && computerMove === 'paper' || playerMove === 'paper' && computerMove === 'spock' || playerMove === 'scissors' && computerMove === 'rock' || playerMove === 'scissors' && computerMove === 'spock' || playerMove === 'paper' && computerMove === 'scissors' || playerMove === 'paper' && computerMove === 'lizard' || playerMove === 'spock' && computerMove === 'lizard' || playerMove === 'spock' && computerMove === 'paper' || playerMove === 'lizard' && computerMove === 'rock' || playerMove === 'lizard' && computerMove === 'scissors') {
        gameStats.losses++;
        return -1
    } else if (playerMove === 'quit') {
        isGameOn = false 
        return  
    } else {
        gameStats.draws++;
        return 0
    }
}

// function getComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 5)
//     if (randomNumber === 0) {
//         return 'rock'
//     } else if (randomNumber == 1) {
//         return 'paper'
//     } else if (randomNumber === 2) {
//         return 'scissors'
//     } else if (randomNumber === 3) {
//         return 'spock'
//     } else {
//         return 'lizard'
//     }
// }

function getPlayerChoice() {
    let playerChoice = prompt('What will it be? ROCK, PAPER, SCISSORS, SPOCK or LIZARD? QUIT to leave the game.').toLowerCase()

    while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors' && playerChoice !== 'spock' && playerChoice !== 'lizard') {
        if (playerChoice === 'quit') {
            break
        }
        playerChoice = prompt('Incorrect choice! ROCK, PAPER, SCISSORS, SPOCK or LIZARD? QUIT to leave the game.').toLowerCase()
    }
    return playerChoice
}

function getRoundOutcome(result, playerChoice, computerChoice) {
    if (result === undefined) {
        alert('Thank you for playing. Good bye.')
    } else if (result === 1) {
        alert(`Computer chose ${computerChoice}, you chose ${playerChoice}. You win!!`)
    } else if (result === 0) {
        alert(`Computer chose ${computerChoice}, you chose ${playerChoice}. It's a draw!`)
    } else {
        alert(`Computer chose ${computerChoice}, you chose ${playerChoice}. You lost.`)
    }
}

function getPlayerName() {
    const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let playerName = prompt("What's your name?");
    while (playerName.length > 10 || !letterArray.includes(playerName[0].toUpperCase())) {
        playerName = prompt("What's your name? It needs to be max 10 characters and start with a letter.");
    }
    return playerName.charAt(0).toUpperCase() + playerName.slice(1);
}

while (isGameOn) {
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice(playerChoice)
    let result = getWinner(playerChoice, computerChoice);
    getRoundOutcome(result, playerChoice, computerChoice);
    gameStats.games++;
    alert(`${playerName} has played a total of ${gameStats.games} games. ${playerName} won ${gameStats.wins} times, lost ${gameStats.losses} times and had ${gameStats.draws} draws.`)
    
}
/*Extension 2: The Clairvoyant Computer

How would you go about making the computer win every time?*/
/*- adjust computer choice based on player choice*/
// SOLUTION::::
 function getComputerWinChoice(playerChoice) {
    if (playerChoice === 'paper') {
        return 'scissors'
    } else if (playerChoice === 'rock') {
        return 'paper'
    } else if (playerChoice === 'scissors') {
        return 'rock'
    } else if (playerChoice === 'lizard') {
        return 'scissors'
    } else if (playerChoice === 'spock') {
        return 'paper'
    }
}

function getComputerRandomChoice() {
    const randomNumber = Math.floor(Math.random() * 5)
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber == 1) {
        return 'paper'
    } else if (randomNumber === 2) {
        return 'scissors'
    } else if (randomNumber === 3) {
        return 'spock'
    } else {
        return 'lizard'
    }
}

function getComputerLossChoice(playerChoice) {
    if (playerChoice === 'paper') {
        return 'rock'
    } else if (playerChoice === 'rock') {
        return 'scissors'
    } else if (playerChoice === 'scissors') {
        return 'paper'
    } else if (playerChoice === 'lizard') {
        return 'spock'
    } else if (playerChoice === 'spock') {
        return 'scissors'
    }
}
/*How would you go about making it so that the computer wins more often (1/2 the time, 1/4 of the time 90% of the time)? 


1/2 of the time:

we can check based on the gameStats object:
    compare total games to wins.
    if total games / losses < 2
        then computer should win.
 5 2
        50% => losses * 2 = total games
        25% => losses * 4 = total games
        90% => total games * 90 / 100 = losses

Plan how you'd go about implementing this (use pseudo-code).

If you have time, see if you can start writing this.*/

function getComputerChoice(playerChoice) {
    /* 50% of time win on computer:*/
    if (gameStats.games < 1 || gameStats.games / gameStats.losses > 2) {
        return getComputerWinChoice(playerChoice)
    } else {
        return getComputerLossChoice(playerChoice)
    }

    /* 25% of time win on computer:*/
    // if (gameStats.games < 1 || gameStats.games / gameStats.losses > 4) {
    //     return getComputerWinChoice(playerChoice)
    // } else {
    //     return getComputerLossChoice(playerChoice)
    // }

    /* 90% of time win on computer */
    // if (gameStats.games < 1 || gameStats.games * 90 / 100 > gameStats.losses) {
    //     return getComputerWinChoice(playerChoice)
    // } else {
    //     return getComputerLossChoice(playerChoice)
    // }
}



    // if (gameStats.games * 90 / 100 < losses) {
    //     return getComputerWinChoice()
    // }
    /* 90% of time win on computer */
