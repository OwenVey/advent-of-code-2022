import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const caloriesPerElf = input.split('\n\n').map((line) =>
    line
      .split('\n')
      .map(Number)
      .reduce((total, current) => total + current, 0),
  );

  return Math.max(...caloriesPerElf);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const caloriesPerElf = input.split('\n\n').map((line) =>
    line
      .split('\n')
      .map(Number)
      .reduce((total, current) => total + current, 0),
  );

  const sorted = caloriesPerElf.sort((a, b) => b - a);
  const top3 = sorted.slice(0, 3);
  const top3sum = top3.reduce((total, current) => total + current, 0);

  return top3sum;
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
