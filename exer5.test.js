const analyzeArray = require("./exercise5");

describe("analyzeArray", () => {
  test("calculates the average, min, max, and length of an array of numbers", () => {
    const arr = [5, 2, 9, 1, 5];
    const analysis = analyzeArray(arr);
    expect(analysis.average).toBe(4.4);
    expect(analysis.min).toBe(1);
    expect(analysis.max).toBe(9);
    expect(analysis.length).toBe(5);
  });

  test("throws an error if input is not an array", () => {
    expect(() => analyzeArray("not an array")).toThrow("Input is not an array");
  });

  test("throws an error if array is empty", () => {
    expect(() => analyzeArray([])).toThrow("Array is empty");
  });
});
