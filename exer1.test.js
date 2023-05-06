const capitalizeWords = require("./exercise1");
const capitalizeFirst = require("./exercise1");

test("capitalizes the first letter of each word in a string", () => {
  expect(capitalizeWords("dimitar hristovski")).toBe("Dimitar Hristovski");
  expect(capitalizeWords("this is a test")).toBe("This Is A Test");
  expect(capitalizeWords("ONE TWO THREE")).toBe("One Two Three");
});

test("returns an empty string when input is empty", () => {
  expect(capitalizeWords("")).toBe("");
});

test("capitalizes the first letter of each word in a string", () => {
  expect(capitalizeFirst("dimitar")).toBe("Dimitar");
  expect(capitalizeFirst("hero")).toBe("Hero");
});
