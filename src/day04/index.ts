import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');
  const assignments = lines.map((line) =>
    line.split(',').map((r) => r.split('-').map(Number)),
  );
  const containedPairs = assignments.filter((a) => {
    const [elf1, elf2] = a;
    return (
      (elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) ||
      (elf2[0] <= elf1[0] && elf2[1] >= elf1[1])
    );
  });

  return containedPairs.length;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');
  const assignments = lines.map((line) =>
    line.split(',').map((r) => r.split('-').map(Number)),
  );
  const overlappingPairs = assignments.filter((a) => {
    const [elf1, elf2] = a;
    const [ax1, ax2] = elf1;
    const [bx1, bx2] = elf2;
    return (bx1 >= ax1 && bx1 <= ax2) || (ax1 >= bx1 && ax1 <= bx2);
  });

  return overlappingPairs.length;
};

run({
  part1: {
    tests: [
      {
        input: `2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8`,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8`,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
