const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');

const games = input.split('\n').filter(n => n);

class Move {
    constructor (name, score, beats) {
        this.score = score;
        this.name = name;
        this.beats = beats;
    }
}

const rock = new Move('rock', 1, 'scissors');
const paper = new Move('paper', 2, 'rock');
const scissors = new Move('scissors', 3, 'paper');

const play = {
    'A': rock,
    'B': paper,
    'C': scissors,
    'X': rock,
    'Y': paper,
    'Z': scissors
};

const scores = {
    'win': 6,
    'draw': 3,
    'loss': 0
};

const decider = (match) => {
    const [opponent, me] = match.split(' ');
    console.log(`Opponent plays ${play[opponent].name} vs Me with ${play[me].name}`);
    if (play[opponent].beats === play[me].name) {
        console.log(`Lose with ${play[me].name}`);
        return scores.loss + play[me].score;
    } else if (play[opponent].name === play[me].name) {
        console.log(`Draw with ${play[me].name}`);
        return scores.draw + play[me].score;
    } else {
        console.log(`Win with ${play[me].name}`);
        return scores.win + play[me].score;
    }
}

let myScore = 0;

games.forEach((game, i) => {
    console.log(`Round ${i}`);
    myScore += decider(game);
});

console.log(myScore);