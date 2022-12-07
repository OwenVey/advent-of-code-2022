import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');
  const board = lines.splice(0, lines.indexOf('') - 1);
  const steps = lines.splice(2, lines.length);

  const flippedBoard = board
    .map((row) =>
      row
        .match(/.{1,4}/g)
        ?.map((a) => a.trimStart().trimEnd().replace('[', '').replace(']', '')),
    )
    .reverse();

  const stacks: string[][] = [...Array(flippedBoard[0]?.length)].map((e) => []);

  flippedBoard.forEach((row) => {
    row?.forEach((crate, index) => {
      if (crate) {
        stacks[index].push(crate);
      }
    });
  });

  const nums = steps.map((l) =>
    l.replace(/[a-z]/gi, '').trimStart().split('  ').map(Number),
  );
  nums.forEach((n) => {
    const [amount, source, destination] = n;
    const move = stacks[source - 1].splice(amount * -1).reverse();
    stacks[destination - 1].push(...move);
  });

  return stacks.map((s) => s.at(-1)).join('');
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');
  const board = lines.splice(0, lines.indexOf('') - 1);
  const steps = lines.splice(2, lines.length);

  const flippedBoard = board
    .map((row) =>
      row
        .match(/.{1,4}/g)
        ?.map((a) => a.trimStart().trimEnd().replace('[', '').replace(']', '')),
    )
    .reverse();

  const stacks: string[][] = [...Array(flippedBoard[0]?.length)].map((e) => []);

  flippedBoard.forEach((row) => {
    row?.forEach((crate, index) => {
      if (crate) {
        stacks[index].push(crate);
      }
    });
  });

  const nums = steps.map((l) =>
    l.replace(/[a-z]/gi, '').trimStart().split('  ').map(Number),
  );
  nums.forEach((n) => {
    const [amount, source, destination] = n;
    const move = stacks[source - 1].splice(amount * -1);
    stacks[destination - 1].push(...move);
  });

  return stacks.map((s) => s.at(-1)).join('');
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
