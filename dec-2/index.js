const assert = require('node:assert/strict');
const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');

const games = input.split('\n').filter(n => n);

class Move {
    constructor (name, score, beats, losesTo) {
        this.score = score;
        this.name = name;
        this.beats = beats;
        this.losesTo = losesTo;
    }
}

const rock = new Move('rock', 1, 'scissors', 'paper');
const paper = new Move('paper', 2, 'rock', 'scissors');
const scissors = new Move('scissors', 3, 'paper', 'rock');

const availablePlays = {rock, paper, scissors};

const play = {
    'A': rock,
    'B': paper,
    'C': scissors,
    'X': 'lose',
    'Y': 'draw',
    'Z': 'win'
};

const scores = {
    'win': 6,
    'draw': 3,
    'lose': 0
};

const decider = (match) => {
    const [opponent, me] = match.split(' ');
    console.log(`Opponent plays ${play[opponent].name} and I should ${play[me]}`);
    let result;
    switch (play[me]) {
        case 'draw':
            result = availablePlays[play[opponent].name].score + scores.draw;
            break;
        case 'win':
            result = availablePlays[play[opponent].losesTo].score + scores.win;
            break;
        case 'lose':
            result = availablePlays[play[opponent].beats].score + scores.lose;
            break;
    }
    return result;
}

let myScore = 0;

games.forEach((game, i) => {
    console.log(`Round ${i}`);
    myScore += decider(game);
});

console.log(myScore);
