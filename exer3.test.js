const calc = require("./exercise3");

test("performs basic calculations", () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValue(3);

  calc("add", 2, 1, mockFn);
  expect(mockFn).toHaveBeenCalledWith(2, 1);

  calc("subtract", 5, 2, mockFn);
  expect(mockFn).toHaveBeenCalledWith(5, 2);

  calc("multiply", 3, 4, mockFn);
  expect(mockFn).toHaveBeenCalledWith(3, 4);

  calc("divide", 8, 2, mockFn);
  expect(mockFn).toHaveBeenCalledWith(8, 2);
});
