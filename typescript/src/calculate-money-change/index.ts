export const calculateChange = (charged: number, paid: number): object => {
  const change = getChange(charged, paid);
  return amountToMoney(change);
};

export const getChange = (charged: number, paid: number): number =>
  paid - charged;

// [number, number][]
type Accumulator = {
  value: number;
  [key: string]: number;
};

export const amountToMoney = (amount: number): any => {
  const money = [100, 50, 10, 5, 1, 0.5, 0.1, 0.05, 0.01];
  const result = money.reduce(
    (acc: Accumulator, cedula: number) => {
      if (acc.value > 0 && cedula <= acc.value) {
        acc[cedula.toString()] = Math.floor(acc.value / cedula);
        acc.value = acc.value % cedula;
      }
      return acc;
    },
    { value: amount }
  );

  const { value, ...change } = result;

  return change;
};
