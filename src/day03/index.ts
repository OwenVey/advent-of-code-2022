import run from 'aocrunner';
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const rucksacks = input.split('\n');
  const compartments = rucksacks.map((r) => [
    r.slice(0, r.length / 2),
    r.slice(r.length / 2, r.length),
  ]);
  const duplicates = compartments.map((c) => {
    const [a, b] = c;
    for (let i = 0, len = a.length; i < len; i++) {
      if (b.indexOf(a[i]) != -1) {
        return a[i];
      }
    }
  });
  const priorities = duplicates.map((d) => alphabet.indexOf(d) + 1);
  const sum = priorities.reduce((partialSum, a) => partialSum + a, 0);

  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const rucksacks = input.split('\n');

  let groups = [];

  while (rucksacks.length > 0) {
    groups.push(rucksacks.splice(0, 3).sort((a, b) => a.length - b.length));
  }

  const duplicates = groups.map((g) => {
    const [s1, s2, s3] = g;
    let c: string = '';
    [...s1].forEach((char) => {
      if (s2.includes(char) && s3.includes(char)) {
        c = char;
        return;
      }
    });
    return c;
  });

  const priorities = duplicates.map((d) => alphabet.indexOf(d) + 1);
  const sum = priorities.reduce((partialSum, a) => partialSum + a, 0);

  return sum;
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
