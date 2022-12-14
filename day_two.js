function makeInputUseful (input) {
    const moreUseful = [];
    for (const round of input.split('\n')) {
        moreUseful.push(round.split(' '))
    }
    return moreUseful;
}

/* part one */
function rpsRound (game) {
    const [elfShape, myShape] = game;
    let myScore = 0;
    switch (myShape) {
        case 'X': // rock
            myScore += 1
            break;
        case 'Y': // paper
            myScore += 2
            break;
        case 'Z': // scissors
            myScore += 3
            break;
    }
    switch (true) {
        case ((elfShape === 'A') && (myShape === 'X')): // rock + rock - draw
        case ((elfShape === 'B') && (myShape === 'Y')): // paper + paper - draw
        case ((elfShape === 'C') && (myShape === 'Z')): // scissors + scissors - draw
            myScore += 3
            break;
        case ((elfShape === 'A') && (myShape === 'Y')): // rock + paper - win
        case ((elfShape === 'B') && (myShape === 'Z')): // paper + scissors - win
        case ((elfShape === 'C') && (myShape === 'X')): // scissors + rock - win
            myScore += 6
            break;
        // if there was any impact on score to losses, this is where I would put that logic, but they don't, so I won't
    }
    return myScore
    }

/* part two */
function fixedRound (game) {
    const [elfShape, result] = game;
    let myScore = 0;
    switch (true) {
        case ((elfShape === 'A') && (result === 'X')): // rock, lose (scissors)
            myScore += 3
            break;
        case ((elfShape === 'A') && (result === 'Y')): // rock, draw (rock)
            myScore += 4
            break;
        case ((elfShape === 'A') && (result === 'Z')): // rock, win (paper)
            myScore += 8
            break;

        case ((elfShape === 'B') && (result === 'X')): // paper, lose (rock)
            myScore += 1
            break;
        case ((elfShape === 'B') && (result === 'Y')): // paper, draw (paper)
            myScore += 5
            break;
        case ((elfShape === 'B') && (result === 'Z')): // paper, win (scissors)
            myScore += 9
            break;

        case ((elfShape === 'C') && (result === 'X')): // scissors, lose (paper)
            myScore += 2
            break;
        case ((elfShape === 'C') && (result === 'Y')): // scissors, draw (scissors)
            myScore += 6
            break;
        case ((elfShape === 'C') && (result === 'Z')): // scissors, win (rock)
            myScore += 7
            break;
    }
    return myScore;
}

function rpsTournament (strategy, scoreMethod) {
    let finalScore = 0;
    for (let x = 0; x < strategy.length; x++) {
        finalScore += scoreMethod(strategy[x])
    }
    return finalScore
}

const testInput = `A Y
B X
C Z`;
const testStrategy = makeInputUseful(testInput);
console.log(rpsTournament(testStrategy, rpsRound));
console.log(rpsTournament(testStrategy, fixedRound));

const puzzleInput = `B Y
A Z
A Z
B Y
A Z
B X
A X
A Z
C X
A Z
C Y
B Y
C X
C Y
B Y
C Y
C Y
C Z
A Z
B Y
B Y
A Z
B Z
C Y
C Y
B Y
B Y
C Y
B Z
C Z
C Z
B Z
C Z
C Y
B Y
C Z
C X
B Y
C Y
C Y
C Z
C Y
A Y
A Z
A Z
A Z
A X
A Z
A Z
C X
C Z
C Y
C Y
B Z
C Y
C Y
C X
C Z
C Y
A Z
C Y
A Y
A Z
B X
A Y
C Y
C Z
A Z
B X
C Z
C Y
C Y
C Y
C Y
B Y
A Z
C Y
A Z
A X
A Y
B Y
A X
A Y
B X
C Z
C Y
C Z
A Y
A X
C Y
B Z
A Z
A Z
A Z
C Y
A Z
B Y
A Z
B Y
B X
A Z
C Y
C Y
A Y
A Z
A Z
B Y
A Z
B Y
C Y
A Z
B Y
C Z
B Y
A Z
C Y
B Y
A Y
B X
A Z
B Y
B Y
B Y
B Y
B Y
C Y
C Y
A Z
C Y
B Y
B Y
C Y
B Y
A Z
C X
C Y
C X
A Z
C Y
C Y
C Z
C Z
A Z
C X
A Y
A Z
C Y
B Y
A X
B Y
A Z
C Z
A Z
C Y
B X
C X
A Z
C Z
A Z
B Y
C Y
B Y
C Y
B Y
A Z
C Y
C Y
A Z
A Y
A Z
A Z
C Y
C Z
B Y
C Y
B Y
C Y
B X
A Z
C Y
B Z
C Z
A Z
A Z
A Z
A Z
A Y
C Y
C Y
C Z
C Y
A Y
C Y
A Z
C Y
C Y
A Z
C Y
A Z
B Z
A Z
C Y
B Y
A Z
B Y
A Z
C Z
B Y
A Z
A Z
C Y
A Z
A Z
C Z
A Y
C Y
B X
A X
B Y
C Y
A Z
A Z
A X
A Z
B Y
A Z
C Y
B Y
A Z
A Z
B Z
A Z
B Y
C Z
C Y
B X
C Z
C X
C Y
A Y
A Z
A X
B Y
A Y
C Y
C Y
A Z
A Z
A Z
C Z
C Y
B Y
A Z
A Z
A Y
A Z
A Z
C Y
A Z
A Z
C X
A Z
B Z
C Z
A Z
B Y
A Z
B Y
C X
C Y
C Z
C Z
C X
A Z
C Y
A Z
C X
A Z
B Y
A X
B Z
A Z
A Z
C X
C Y
B Y
B Y
C Y
A Y
A Z
A Z
C Y
A Z
A X
C Z
A X
A X
A Z
A Z
C Y
A Z
C Y
A Z
C Y
A X
B Y
B Z
B Y
A Z
C Z
A Y
C Y
A Z
A Y
A Z
C Z
A X
A Z
A X
A Z
B Y
A X
A Z
C Y
A Z
B Y
C Y
C Y
C Y
C Y
A Z
B X
C Y
B Z
A Z
A Z
A Z
B Y
A Z
C X
C Y
B Y
C Y
A Z
C Y
C Z
A Z
A Z
C Y
C Y
C Y
C Y
A Z
A Z
B Y
A Z
C Y
C Z
C Y
B Y
B Z
C Y
B Y
A Z
B Y
B X
A Z
A X
C Y
A X
C Z
C Z
C X
C Y
C Y
A Z
C Y
A Z
C Y
C Z
B X
C Y
A Y
C Y
A Z
C Z
A Z
C Y
C Y
B Y
C Y
C Y
A Z
A Z
A Z
A Z
C Y
A X
A X
A Z
A Z
B Y
A Y
A Z
A Y
A Z
C Z
A Y
B Y
A Y
A Z
C Z
B X
A Z
C X
C Z
C Y
A Z
A Z
A Z
A Y
A Y
C Y
A Y
B X
C Y
A X
C Y
A Z
B Z
C Z
A Z
C Y
C Y
B Y
C Y
B Y
A Y
C X
A Y
C Y
A Y
C X
C Y
C Y
C Y
C Z
A X
A Z
C Z
A Z
C Z
A Z
C Y
C Z
C Y
C Y
C Y
A X
A Z
C X
C Y
A Z
A Z
A Z
C Y
C Y
C Y
A Y
A Z
C Y
A Z
C Y
C Y
C Y
A Z
B Y
C Y
A Z
C Y
A Y
C Y
A X
A Z
A Y
A Z
A Z
B X
B Y
A Z
A Z
B Y
C Z
A Z
A Y
A Z
B Z
B Y
A Y
C X
C Z
C Y
A Z
C Y
A Z
C Y
C Y
C Y
C Y
C Z
C X
A Z
C Y
A Z
C Y
C Y
A Z
C Y
A X
A Z
B Y
C Z
B Y
C Y
C Y
C Y
B Z
A Y
A Z
A Z
A Z
A Z
C Z
A Y
A Y
B Z
A Y
C Y
B X
B X
B Y
C Y
B X
C Y
A Z
A Z
A Y
C Y
C Y
C Y
C Y
C Y
B Y
A Z
C Y
A Z
A Z
B Z
C Y
B Y
B Z
A Y
C Y
B Z
C Y
C Y
A Z
C Y
A Z
A X
A Z
B Y
C Y
C Y
A Z
C Z
A Z
B Y
C Y
C Z
B X
B Y
A Z
A Z
A Z
C Z
C X
B Y
A Y
A Y
A Z
A Y
A Z
A Z
C Y
C Y
C Y
A Z
C Z
A Z
A Z
C Y
A Z
C Y
B Y
C Z
A Y
A Z
B Y
B Z
A Z
A Y
A Z
B X
A Z
A Y
C Y
C Y
B X
A Z
B Z
C Y
C Z
C Y
A X
A X
B X
A Z
C Y
C Y
B X
B Z
A Z
C Y
B Y
B Y
C Z
C Y
B Z
A Z
A Z
C X
A Z
A Z
A Z
A Y
B Z
B Z
A Y
A Y
C Y
A Z
A Z
A Z
B Y
C X
B Y
A Y
C Y
C Z
C Y
C X
C Y
C Y
C Y
A Y
C Y
A X
C Z
B Y
A Y
A Z
B Y
A Z
B Y
A Z
C Y
A Y
B Y
A Y
B Y
C Y
A Z
A Z
B X
C Y
A Y
A Y
B X
C Z
C Y
B Y
C Y
C Z
A Z
C Y
A Y
A Z
A Z
B X
C Y
C Z
C Y
C Z
A Z
C Y
C Z
A Y
C Y
C X
C Y
C Y
C Y
A X
A Y
C Z
B Y
A Z
C Z
C Y
A Z
B Y
C Y
A Z
A Z
A Z
C Z
A Y
A Z
C Y
A Z
C Z
A Z
A Z
C Z
A X
C Y
B Y
A Z
A X
A Z
A Z
B Y
A Z
C Y
C Z
C Y
C Y
B Z
C X
A Z
C Z
C Z
A Y
A Y
C Z
A Y
A Y
B X
A Z
A Z
A Z
B X
C Y
A Y
A Z
C Y
C Y
C X
C Z
A Z
B Y
B Z
A Y
C Y
C Y
B Y
A Z
C Y
A Z
A X
C Z
C Z
A Z
C Y
B Y
C Y
C Y
C Y
C Z
C Y
C Y
C Y
A Z
B Z
A Z
B X
A X
C Y
C Y
A Y
A Z
B Y
A Z
C Y
B Y
B X
B Y
A Z
C Z
C Y
B Y
C Y
C Y
C Z
C X
C Y
A Z
A Y
A Z
C Y
B Z
C Z
A X
C Y
A Y
C Y
A Z
A Y
B Y
A Z
A X
A X
B Y
A Z
C Y
A Z
C Y
C Y
C Z
C Y
A Z
A Z
B Z
B X
A Z
C Z
A Z
C Y
C Y
C Z
C Y
A Y
C Y
A Y
B Y
B Y
B Y
A Z
A X
C Y
C Y
B Y
A Y
A Z
A Y
B Y
A Y
A Y
C Y
A Z
C Z
A Z
C X
A Z
A Y
C Z
A Z
A Z
C Y
B Y
C Y
A Z
C Z
B Y
B Y
A Z
A Z
A X
A Z
C Z
C Y
A Z
A Z
A X
A Z
C Y
A X
C Y
C Y
A X
C Y
A Y
B X
C Y
B Y
B Y
C X
A Z
A Z
C Y
C Y
C Z
A X
A Z
B X
A Z
C Y
C Y
A Z
C Y
C Z
A Y
B Y
C Y
C X
A Z
A Y
A Y
C Y
A Z
B Z
A Y
C Y
A Z
C Y
C X
A Z
B X
B Y
C X
A Y
A Y
A Z
A Z
B X
A Z
A Y
A Z
C Y
A X
C Y
A Z
B Y
B Y
B Y
A Y
A Y
A X
C Z
C Z
B Y
A Y
A Y
C Y
A X
A Z
A X
B Y
A Z
A Z
A Y
A X
C Y
B X
A Z
A Z
A Z
A Z
C Z
A Z
A Z
A Y
B Y
A X
A Y
C Y
A X
B Y
A Z
A Z
C Y
B Y
B Y
A Z
C Y
C Y
B Y
B Y
C Y
B Y
B Y
B Y
A Z
B Y
B Y
B Y
A X
A Z
A Z
A Z
A Y
A Z
A Z
A Z
B Y
A X
C Z
A Z
A X
C Z
A Z
A Y
C Y
C Z
A X
C Z
A Y
B Y
C Z
A Z
C Y
B Y
B Y
B Z
C X
A Z
B Y
C Y
C Y
C X
A Z
A Z
A Y
C Y
B X
B X
A Y
A Z
C Y
C X
A Y
B Y
A Z
A Z
A Z
C Z
C Y
A Z
B Z
A Z
C Y
C Z
B X
A Z
A Y
B Y
C Y
C X
C Z
A Y
C Z
C Y
A Y
C Y
A X
C Y
A Z
C X
B Y
C Y
C Y
C Y
B Y
C X
A X
A Z
A Y
A Z
A Z
B X
C Z
A Z
A Z
A Z
C Y
C Y
C Y
C Y
A X
C Y
A Z
B Z
A Z
A X
A Z
A Y
B Y
A Z
A Y
C Y
C Y
A Z
A Z
B Y
A Z
C Y
C Z
A Y
B Y
B X
C Y
C Y
A Z
C X
B Y
A X
B Y
A Z
A Z
B Y
A Y
C X
A X
C X
A Z
C X
C Z
A X
C Y
C Z
C Y
A X
A Z
C Z
A Z
A Z
A Z
B Y
A Z
A Z
C Y
C Z
A Y
A X
A Z
B Z
C Y
C Z
C Y
B Y
A Z
B Z
C Y
A Z
C Y
C X
C Z
A Y
C X
B X
B Z
B Y
B X
B X
C Y
C Z
C Y
C Y
B Y
C Y
C Y
A Z
B Y
C Y
B Z
A Y
A Z
B Y
C Z
A Z
C Y
C Y
B Z
A Z
C Y
C Y
A Z
B X
B Y
B Y
C Y
A Z
A X
A Y
B X
A Y
C Y
A Z
A Z
B Z
C Y
C Y
A Y
B Z
C Y
A Z
A Y
B Y
C Z
B Y
B Z
C Y
A Z
C Y
C Y
A Z
C Y
C X
A Z
B Y
A X
C Y
C Y
B X
B Y
A Z
C Y
B Y
A Z
C Y
A Z
B Z
C Y
C Y
A Y
C Y
B X
A Z
C Y
C Z
C Y
A Z
C Y
C Y
C Y
A Z
B Y
C Y
C Z
A Z
A Y
C Y
C X
C Y
A Z
C Y
C Z
A Y
C X
A Z
C Z
C Y
A Z
C Z
C Z
B Y
A Z
C Y
A Z
B Z
A X
A Z
A Z
A Z
C Y
A Z
C Y
A Z
C Y
A Y
A Y
A Z
A X
A Y
B Z
C Y
C Z
A Z
B Z
C Y
B X
C Y
A Z
A Z
B Z
C X
C Y
C Y
C Y
B Z
B Y
A Z
C Y
A Y
C Z
B Y
C Y
A X
C Y
B Y
A Z
A Z
C X
C Y
A Z
C Y
C Y
C Y
A Y
C X
A Z
B Y
A Y
C Y
B Y
B Y
C Y
A Y
C Z
C Y
C Y
B Y
A Y
A X
C Z
B Z
A Z
C X
B Y
C Y
B Y
C Z
C Z
B Y
A Y
C Y
A Z
B Z
C Y
C Z
A Z
C Y
A X
A Z
C Y
C Z
A Y
C Y
A Z
C Y
C Z
B X
C Y
A X
C Y
C Y
A Z
A Z
C Y
A Z
A Z
C Y
C Z
A Z
B X
A Z
A Y
B Y
A X
A Z
C Z
C X
A Y
C Y
A Z
B Z
B X
C Y
C Y
A Y
B Y
A Y
C Y
C X
C Y
A Z
C Y
C Y
A Z
A Z
C Z
A Z
A Z
A Z
A Z
A X
C Y
B Z
B Y
A Z
C Y
C X
A Y
A Z
C X
A Z
C X
C Y
A Y
C X
C X
C Y
A Y
A Z
B Z
A Z
C Y
C X
C Y
B Z
C Y
A Z
C Y
C Y
A Z
A Z
B Y
A Z
C Y
B Y
A Z
C X
A Z
A Z
C Y
A Z
C Y
B X
B X
B Y
C Y
C Y
C Y
C X
B Y
B Y
A Z
A X
A Z
C X
B Y
C Y
B Y
C Y
C Y
C Y
C Y
B Y
A Y
C Y
B Z
B Y
A Z
A Z
C Y
C X
B Y
A Y
C Y
C Z
C Z
A Z
A Z
C Z
C Y
A X
A Z
C Y
C Y
A Z
A Y
C Y
A Z
C Y
C Y
A Z
A X
B Y
B X
A Z
C Z
C Y
B Y
B Y
A Z
B Y
A Z
A Y
A X
A X
B Y
C Y
C Y
C Y
A Y
B Z
A Z
A X
A Z
B Y
B Y
A Y
A X
C Z
B Y
A Z
A Z
C Y
A Z
C Y
C Y
C Y
B Y
A Y
B Y
A X
C Y
C Z
B Z
A Z
A Z
C Z
C X
A Z
C Z
B X
B Z
A Y
C Y
A Z
C Z
A Y
B Z
A Z
A Z
B Y
C Y
A Z
C Y
C Y
C Z
A Z
A Z
A Z
B Y
C Y
C Y
A Z
C Y
C Y
A Z
C Y
B Y
C Z
A Y
B Y
A X
A Y
B Y
A Z
C Z
A Z
C Y
C Y
A Z
C X
C Y
C Z
C Y
A Z
C Y
B Z
C Z
C Y
C Y
C Y
A Y
B Y
C Y
C Y
C Z
C Y
C X
B Y
A Z
C X
A Z
C Y
A Z
C Y
A Z
B Z
A Z
A Z
B Z
C Y
A Y
C Z
B X
B Y
C Y
A Z
B Z
A Z
C Y
A X
C Y
C Y
B Y
A Y
A Z
A Y
B Z
C Y
A Z
B Z
B X
A Z
C Z
B Y
A Z
A Z
C Y
A Z
C Y
C Y
A Z
C Y
C Z
A Y
C Y
A Z
C Z
A Z
B X
C Y
B X
A Y
C Y
A Z
B Y
C Y
A Y
A Z
A Z
B Y
C Y
A Z
A Z
A Z
A Z
A Y
C Y
C Z
B Y
A Z
C X
C Y
B Y
C Y
B Z
C Y
C Y
B Y
C X
C Y
C Y
B Y
A X
C Y
C Y
B Y
B Y
A Z
C Y
C Y
A Z
A Z
B Y
B X
C Y
A Y
A Z
C Y
B Y
A Z
B Y
A Y
B Z
C Y
B Y
A Z
C Y
C Y
B Z
C Y
A X
C Y
A Z
C Z
A Z
A Z
B Y
C Y
C Y
B Z
B X
C Y
C X
C Y
A Y
A Y
C Y
A Z
A X
A Z
A Z
A Z
B Y
C Z
A Y
A Y
C Z
A Y
A Z
B Z
A Z
C Y
C Y
B Y
C Y
B Z
A Z
C Y
C Y
A X
C Y
A Z
A X
C Y
C Y
A Z
C Y
A Z
A Z
A Z
B Y
B Y
B Z
C Y
B Y
B Y
B Y
C Y
B Z
A X
C Y
C Y
A Z
C Y
C Y
A Z
C Z
A Z
A Y
B Z
B Y
A Z
C Z
A Y
B Y
C Y
A Z
B Z
C Y
B Y
B Z
B Z
C Y
B X
B Y
C Y
A Y
A X
C Z
C Y
A Z
A Y
C Y
A Z
A Z
A Y
A Z
C Y
A Y
B Y
A Y
A Z
A Z
A Z
A Y
A Y
A Y
B Y
B Y
A Z
A X
B Y
A Y
A X
C Y
A Y
C Z
C X
C Z
C X
A Z
C Z
A Z
A X
C Y
C Z
A Y
A Z
C Y
A X
B Y
C Y
C Z
A X
C Y
A Z
B Y
B Y
C Z
A Y
C Z
A Z
C Y
A Z
C X
A X
B Y
C Y
B Z
B X
C Y
C Z
A Z
A Y
C Y
B Z
A Z
A Z
C Z
A Z
B Y
A Z
C Y
B Y
C Y
A Z
B Y
C Y
A Z
B Z
B X
C Z
C Y
A Y
C Z
A Z
A Z
C Y
C Y
A Z
C Y
A X
B Y
C Y
C Y
A Y
C Y
A Y
C Y
A Y
A Z
B Y
A Z
B Y
C Y
B Z
C Y
C Z
A Y
B Z
A Z
A Y
C Y
C Y
C Y
A Z
C Y
C X
C Y
A Z
C X
A Z
C Y
C Y
C Y
C Y
A Z
C Y
A Z
A Z
B Y
A Y
B X
A Y
C Y
C Z
A X
B Y
A Z
A Z
A Y
A Y
A Z
B X
A X
B Y
A Z
C Y
C Y
B Y
C Y
B X
A Z
B Y
B Y
A Z
A Z
A Z
C X
B Z
C Z
A X
A X
B Y
C Y
C Z
B Y
C Z
A Z
A Z
C Y
C Z
B Y
B Z
C Y
A X
A X
B Z
C Y
C Y
A Z
B Y
B Y
C Y
A Z
C Y
B Y
B Y
A Z
A Z
C Z
A Z
B Y
B Y
C Z
A X
B Y
C X
C Y
C Y
A X
B Y
B Z
A Z
B Y
B Z
A Z
C Y
C X
C Z
C X
A Z
A X
A Z
C Y
C Y
A Z
C Y
C Y
B Z
C Z
A Y
C Y
B Z
B Y
A Z
A X
C Y
A Z
C Y
B Z
A Z
A Z
A Z
C Y
A Z
C Z
C Y
A Z
B Y
C X
A Z
A Y
C Y
A Z
C Y
C Y
B Z
C Z
C Z
C Y
A Z
A Y
B Y
C Y
A Z
A X
A Y
A Z
A X
B X
B Y
B Z
A X
C Y
C Y
B X
A Z
A Z
A Y
B X
A Y
C Y
B Y
B Y
C Z
C Y
C Z
B X
B Z
C Y
A Z
A Z
B Z
A Z
A Z
C Y
B Y
A Z
A Y
A Z
A Y
A Y
B Z
A Z
C X
C Y
C Z
C Y
A Z
A Y
B Z
C X
B Y
A Z
A X
A Y
C Y
A Z
C Y
C Y
A Y
C Y
A Z
C X
C Y
C Y
C Y
C X
A Z
C Y
A Z
B Y
B Y
B X
C Y
B X
C Y
A Z
C X
B Y
C Y
A Z
C Y
C Y
C Y
A Y
B Z
C X
A Z
C Z
A Z
C Y
C Y
A X
C Y
C Y
C Y
A Y
C X
A Z
A Z
C Y
C Y
A Y
B Y
A Y
A Z
C Y
A Z
A Z
A Z
C X
C X
C Y
A Z
C Y
C Y
C Z
C Y
B Y
A Z
C Y
B Y
C Y
B X
A Z
A Z
C Y
A X
B Y
B Z
A Z
A Z
C X
A Z
B Y
A Z
A Z
A X
A Z
C Y
A Z
B Y
A X
A X
C Z
A X
B Y
A Z
A X
B X
C Y
C Z
C Y
B Y
A X
C X
A Z
A Z
A Z
C X
C X
A Z
B Y
A Z
A Z
C Y
B X
C X
B X
B Y
B Z
C Y
A Z
A Z
C Z
B Y
A Z
C Y
A Y
A Z
A X
C Y
C Y
B Z
B Y
B X
C X
A Z
B X
B Z
C Y
C Y
C Y
B Z
C Y
C Z
C Y
B Y
C Y
B Z
C Z
C Y
B X
A Z
B Y
C Y
B Z
C Y
C Z
A Z
C X
A Z
B Z
B Y
A Z
C X
C Y
B Y
B Z
C Y
B Z
B Z
C X
C Y
A Y
B Y
C Z
C X
C Y
C Y
A Z
C X
C Z
B Z
A X
B Y
B Y
B Y
C Z
B Y
C Y
A Z
C Y
C Y
A Z
C Z
C Y
C X
C Y
B X
B Y
B X
A Z
C X
C Z
B Z
A Y
C Y
A Z
C Y
C Y
C Y
B Y
C Y
B X
A Z
C Z
C Y
C Y
C Y
C Z
A Z
A Z
A Z
C Y
A Z
A Z
A Z
A Z
B X
C Y
C Z
B X
A Z
C Z
A Z
A Z
A Z
C Z
B Z
C Y
A Z
C Y
C Y
A Y
C Z
A Z
C Y
A Z
A X
A Y
C Y
A Z
C Y
B Y
A Z
A X
C Y
C Y
A Y
A Z
C Z
A X
C Y
A Z
C Y
C Z
A Z
C Y
C Z
A Z
B Y
A Z
B Y
B X
C Y
C Z
A X
A Z
A X
A Y
B Y
A Y
C Y
A Y
C Y
B Z
A Y
A X
C Y
C Z
A Z
A Z
C Z
C Y
C Y
A Y
A Y
C Y
C Y
C Z
A Y
C Y
A Z
B Z
B Y
B Y
A Z
A Z
B Y
A Z
C Y
C Y
C Z
B Y
A Z
A Y
A Z
A Z
A Y
A Z
A Z
A Z
C Y
A Z
A Z
C Y
B Z
B Y
C Z
C Y
A Y
B X
C Z
A Z
B Z
A Z
B Y
A Z
B Y
A Z
B Y
B Y
C Y
A Z
A Z
C Z
A Y
B Y
A Y
C Y
C Y
C Y
A Z
B Z
A Z
C Y
A Z
B Z
B Y
C Y
C Y
A Y
B Y
C Y
B Z
C Y
C Z
A X
C Y
B Z
B Z
A X
A X
C Y
C Y
C Y
A Y
A Z
A X
C Y`
const puzzleStrategy = makeInputUseful(puzzleInput);
console.log(rpsTournament(puzzleStrategy, rpsRound));
console.log(rpsTournament(puzzleStrategy, fixedRound));