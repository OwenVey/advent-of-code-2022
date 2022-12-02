import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  type Input = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z';
  type Move = 'rock' | 'paper' | 'scissors';

  const rpsMap: Record<Input, Move> = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
    X: 'rock',
    Y: 'paper',
    Z: 'scissors',
  };

  const input = parseInput(rawInput);
  const lines = input.split('\n');
  let totalPoints = 0;
  lines.forEach((line) => {
    const [opponent, me] = line.split(' ') as [Input, Input];
    const opponentMove = rpsMap[opponent];
    const myMove = rpsMap[me];

    let outcomePoints = 0;
    if (opponentMove === myMove) {
      outcomePoints = 3;
    } else if (
      (opponentMove === 'rock' && myMove === 'paper') ||
      (opponentMove === 'paper' && myMove === 'scissors') ||
      (opponentMove === 'scissors' && myMove === 'rock')
    ) {
      outcomePoints = 6;
    }

    let shapePoints = 0;
    if (myMove === 'rock') shapePoints = 1;
    else if (myMove === 'paper') shapePoints = 2;
    else if (myMove === 'scissors') shapePoints = 3;

    totalPoints += outcomePoints + shapePoints;
  });

  return totalPoints;
};

const part2 = (rawInput: string) => {
  type Input = 'A' | 'B' | 'C';
  type RoundEnd = 'X' | 'Y' | 'Z';
  type Move = 'rock' | 'paper' | 'scissors';

  const rpsMap: Record<Input, Move> = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
  };

  const input = parseInput(rawInput);
  const lines = input.split('\n');
  let totalPoints = 0;
  lines.forEach((line) => {
    const [opponent, roundEnd] = line.split(' ') as [Input, RoundEnd];
    const opponentMove = rpsMap[opponent];

    let myMove: Move = 'rock';
    if (roundEnd === 'X') {
      if (opponentMove === 'rock') myMove = 'scissors';
      if (opponentMove === 'paper') myMove = 'rock';
      if (opponentMove === 'scissors') myMove = 'paper';
    } else if (roundEnd === 'Y') {
      myMove = opponentMove;
    } else if (roundEnd === 'Z') {
      if (opponentMove === 'rock') myMove = 'paper';
      if (opponentMove === 'paper') myMove = 'scissors';
      if (opponentMove === 'scissors') myMove = 'rock';
    } else {
      myMove = opponentMove;
    }

    let outcomePoints = 0;
    if (opponentMove === myMove) {
      outcomePoints = 3;
    } else if (
      (opponentMove === 'rock' && myMove === 'paper') ||
      (opponentMove === 'paper' && myMove === 'scissors') ||
      (opponentMove === 'scissors' && myMove === 'rock')
    ) {
      outcomePoints = 6;
    }

    let shapePoints = 0;
    if (myMove === 'rock') shapePoints = 1;
    else if (myMove === 'paper') shapePoints = 2;
    else if (myMove === 'scissors') shapePoints = 3;

    totalPoints += outcomePoints + shapePoints;
  });

  return totalPoints;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
