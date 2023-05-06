const caesarCipher = require("./exercise4");

describe("caesarCipher", () => {
  test("shifts characters correctly", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
  });

  test("wraps from a to z", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("xyz", -23)).toBe("abc");
  });

  test("wraps from z to a", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
    expect(caesarCipher("abc", 23)).toBe("xyz");
  });

  test("handles large shifts", () => {
    expect(caesarCipher("abc", 26)).toBe("abc");
    expect(caesarCipher("Hello, World!", 100)).toBe("Dahhk, Sknhz!");
  });

  test("preserves non-alphabetic characters", () => {
    expect(caesarCipher("123", 3)).toBe("123");
    expect(caesarCipher("!@#", 5)).toBe("!@#");
    expect(caesarCipher("Hello, World! 123", 5)).toBe("Mjqqt, Btwqi! 123");
  });
  test("keeps the same case", () => {
    expect(caesarCipher("aBc", 1)).toBe("bCd");
    expect(caesarCipher("hElLo, WoRlD!", 5)).toBe("mJqQt, BtWqI!");
    expect(caesarCipher("abcABCxyzXYZ", 3)).toBe("defDEFabcABC");
  });
  test("preserves punctuation", () => {
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
    expect(caesarCipher("Hello, World!!!", 5)).toBe("Mjqqt, Btwqi!!!");
    expect(caesarCipher("To be or not to be?", 13)).toBe("Gb or be abg gb or?");
  });
});
