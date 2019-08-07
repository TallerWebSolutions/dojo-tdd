// const teste = (word: String) => console.log(word);
// teste("test");

// export const listPrimary: Array<string> = ["a", "b", "c", "d"];
// export const listSecondary: Array<number> = [1, 2];

export const mergeByInset = (
  listA: Array<string>,
  listB: Array<number>,
  inset: number
): Array<string | number> => {
  let newArray: Array<string | number> = [];

  listA.forEach((item, index) => {
    newArray.push(item);

    if ((index + 1) % inset === 0 && listB.length > 0) {
      newArray.push(listB.shift() as number);
    }
  });

  return newArray;

  //return listA.reduce<Array<string | number>>((acc, item, index) => {}, []);
};
