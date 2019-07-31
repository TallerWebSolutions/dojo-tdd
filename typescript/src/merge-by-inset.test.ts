import { mergeByInset } from "./";

describe("merge by inset", () => {
  it("Should merge two lists", () => {
    const listPrimary = ["a"];
    const listSecondary = [1];

    const expected = ["a", 1];

    expect(mergeByInset(listPrimary, listSecondary, 1)).toEqual(expected);
  });

  it("Should merge two lists by inset", () => {
    const listPrimary = ["a", "b", "c"];
    const listSecondary = [1, 2, 3];

    const expected = ["a", 1, "b", 2, "c", 3];

    expect(mergeByInset(listPrimary, listSecondary, 1)).toEqual(expected);
  });

  it("Should merge two lists by inset", () => {
    const listPrimary = ["a", "b", "c"];
    const listSecondary = [1];

    const expected = ["a", "b", 1, "c"];

    expect(mergeByInset(listPrimary, listSecondary, 2)).toEqual(expected);
  });

  it("Should complete happy scenario", () => {
    const listPrimary = ["a", "b", "c", "d"];
    const listSecondary = [1, 2];
    const expected = ["a", "b", 1, "c", "d", 2];

    expect(mergeByInset(listPrimary, listSecondary, 2)).toEqual(expected);
  });

  it("Should keep adding items from primary list if secondary is empty", () => {
    const listPrimary = ["a", "b", "c", "d", "e"];
    const listSecondary = [1];
    const expected = ["a", "b", 1, "c", "d", "e"];

    expect(mergeByInset(listPrimary, listSecondary, 2)).toEqual(expected);
  });

  it("If primary list is empty, the result should also be an empty list.", () => {
    const listPrimary: string[] = [];
    const listSecondary = [1];
    const expected: number[] = [];

    expect(mergeByInset(listPrimary, listSecondary, 2)).toEqual(expected);
  });

  it("Secondary list is not so important, and we never want to see two items of it together", () => {
    const listPrimary = ["a", "b", "c", "d"];
    const listSecondary = [1, 2, 3, 4];
    const expected = ["a", "b", 1, "c", "d", 2];

    expect(mergeByInset(listPrimary, listSecondary, 2)).toEqual(expected);
  });

  it("Should not merge if inset is 0", () => {
    const listPrimary = ["a", "b", "c", "d"];
    const listSecondary = [1, 2, 3, 4];
    const expected = ["a", "b", "c", "d"];

    expect(mergeByInset(listPrimary, listSecondary, 0)).toEqual(expected);
  });
});
