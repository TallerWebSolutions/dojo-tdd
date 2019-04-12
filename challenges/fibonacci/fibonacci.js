const sum = (first, second) => {
  return first + second;
};

const isEven = number => number % 2 == 0;

const filterEven = arr => {
  return arr.filter(isEven);
};

const fibonacci = limit => {
  let sequence = [1, 2];

  for (let i = 2; i < limit; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  return sequence;
};

const sumValues = arr => arr.reduce((acc, current) => current + acc, 0);

const calculate = limit => {
  return sumValues(filterEven(fibonacci(limit)));
};

export { fibonacci, sum, filterEven, isEven, sumValues, calculate };
