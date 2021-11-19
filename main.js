let isGameRunning = true;
let computerChoice;
let playerChoice;
let playerName;

const gameRules = {
    choices: ['paper', 'rock', 'scissors', 'lizard', 'spock'],
    winConditions: {
        paper: ['rock', 'spock'],
        rock: ['lizard', 'scissors'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock']
    },
    loseConditions: {
        paper: ['scissors', 'lizard'],
        rock: ['paper', 'spock'],
        scissors: ['spock', 'rock'],
        lizard: ['rock', 'scissors'],
        spock: ['lizard', 'paper']
    },
    stats: {
        games: 0,
        wins: 0,
        losses: 0,
        draws: 0
    },
    mode: '90%'
}

const getPlayerName = () => {
    let name = prompt("Hello player. What's your name?")
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    while (!alphabet.includes(name[0].toUpperCase()) || name.length > 10) {
        name = prompt('Your name must start with a letter and it must be max 10 characters. Try again.')
    }

    return name[0].toUpperCase + name.slice(1);
}

const getPlayerChoice = () => {
    let playerChoice = prompt(`What will it be? (${gameRules.choices.join(', ')} or QUIT to exit)`).toLowerCase();
    if (playerChoice === 'quit') {
        isGameRunning = false
        return 'quit'
    }
    while (!gameRules.choices.includes(playerChoice) && playerChoice !== 'quit') {
        playerChoice = prompt(`Incorrect selection What will it be? (${gameRules.choices.join(', ')} or QUIT to exit)`);
    }
    return playerChoice;
}

const getComputerChoice = () => {
    if (gameRules.mode === 'random') {
        const randomIndex = Math.floor(Math.random() * gameRules.choices.length)
        return gameRules.choices[randomIndex]
    } else if (gameRules.mode === 'unfair') {
        return gameRules.loseConditions[playerChoice][0]
    } else if (gameRules.mode === '50%') {
        if (gameRules.stats.games % 2 === 0) {
            return gameRules.loseConditions[playerChoice][0]
        } else {
            return gameRules.winConditions[playerChoice][0]
        }
    } else if (gameRules.mode === "25%") {
        if (gameRules.stats.games % 4 === 0) {
            return gameRules.loseConditions[playerChoice][0]
        } else {
            return gameRules.winConditions[playerChoice][0]
        }
    } else if (gameRules.mode === "90%") {
        if (gameRules.stats.games % 10 === 0) {
            return gameRules.loseConditions[playerChoice][0]
        } else {
            return gameRules.winConditions[playerChoice][0]
        }
    }

}

const checkRoundOutcome = (playerChoice, computerChoice) => {
    gameRules.stats.games++;
    console.log(`Computer chose ${computerChoice} - Player chose ${playerChoice}`)
    if (playerChoice === 'quit') {
        console.log('Thank you for playing. Goodbye!')
    } else if (gameRules.winConditions[playerChoice].includes(computerChoice)) {
        gameRules.stats.wins++;
        console.log('Player wins!')
    } else if (gameRules.loseConditions[playerChoice].includes(computerChoice)) {
        gameRules.stats.losses++;
        console.log('Computer wins!')
    } else {
        gameRules.stats.draws++;
        console.log('Draw!')
    }
}

const initGame = () => {
    playerName = getPlayerName()
    while (isGameRunning) {
        playerChoice = getPlayerChoice()
        computerChoice = getComputerChoice()
        checkRoundOutcome(playerChoice, computerChoice)
        console.log(`Games: ${gameRules.stats.games} - Wins: ${gameRules.stats.wins} - Losses: ${gameRules.stats.losses} - Draws: ${gameRules.stats.losses}`)
    }
}

initGame()
