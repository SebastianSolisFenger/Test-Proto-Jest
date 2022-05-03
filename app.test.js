const { expect } = require("@jest/globals");
const { stringLength, reverseString } = require("./app");

test('Takes the string "Sebasti" and returns 7', () => {
  expect(stringLength("Sebasti")).toBe(7);
});

test("Takes a string longer than 10 or shorter than 1 and throws error", () => {
  expect(() => stringLength("SebastianSolis")).toThrow();
});

test('Takes a string "Seba" and returns the reversed string "abeS"', () => {
  expect(reverseString("Seba")).toBe("abeS");
});
