const reverseString = require("./exercise2");

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("Dimitar Hristovski")).toBe("iksvotsirH ratimiD");
  expect(reverseString("12345")).toBe("54321");
});

test("returns an empty string when input is empty", () => {
  expect(reverseString("")).toBe("");
});
