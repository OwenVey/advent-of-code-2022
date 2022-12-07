import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const characters = input.split('');
  for (let i = 3; i < characters.length; i++) {
    const last4 = characters.slice(i - 3, i + 1);
    if (new Set(last4).size === 4) return i + 1;
  }

  return;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const characters = input.split('');
  for (let i = 13; i < characters.length; i++) {
    const last14 = characters.slice(i - 13, i + 1);
    if (new Set(last14).size === 14) return i + 1;
  }

  return;
};

run({
  part1: {
    tests: [
      {
        input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
        expected: 5,
      },
      {
        input: `nppdvjthqldpwncqszvftbrmjlhg`,
        expected: 6,
      },
      {
        input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
        expected: 10,
      },
      {
        input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
        expected: 11,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
        expected: 19,
      },
      {
        input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
        expected: 23,
      },
      {
        input: `nppdvjthqldpwncqszvftbrmjlhg`,
        expected: 23,
      },
      {
        input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
        expected: 29,
      },
      {
        input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
        expected: 26,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
