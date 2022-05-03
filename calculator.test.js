const calculator = require("./calculator.js");

describe("calculator adds testing group", () => {
  let ss;
  beforeEach(() => {
    ss = new calculator();
  });

  test("0 and positive number", () => {
    expect(ss.add(0, 5)).toBe(5);
  });
  test("negative and negative numbers", () => {
    expect(ss.add(-4, -10)).toBe(-14);
  });
  test("negative and positive numbers", () => {
    expect(ss.add(-2, 3)).toBe(1);
  });
});

describe("calculator subtracts testing group", () => {
  let ss;
  beforeEach(() => {
    ss = new calculator();
  });
  test("0 and positive number", () => {
    expect(ss.subtract(0, 7)).toBe(-7);
  });
  test("negative and negative numbers", () => {
    expect(ss.subtract(-2, -7)).toBe(5);
  });
  test("negative and positive numbers", () => {
    expect(ss.subtract(-4, 5)).toBe(-9);
  });
});

describe("calculator multiplies testing  group", () => {
  let ss;
  beforeEach(() => {
    ss = new calculator();
  });
  test("0 and any number", () => {
    expect(ss.multiply(0, 7)).toBe(0);
  });
  test("negative and negative numbers", () => {
    expect(ss.multiply(-7, -7)).toBe(49);
  });
  test("negative and positive numbers", () => {
    expect(ss.multiply(-4, 9)).toBe(-36);
  });
});

describe("calculator devides testing group", () => {
  let ss;
  beforeEach(() => {
    ss = new calculator();
  });
  test("0 by any positive number", () => {
    expect(ss.devide(0, 7)).toBe(0);
  });
  test("negative by negative numbers", () => {
    expect(ss.devide(-8, -2)).toBe(4);
  });
  test("negative by positive numbers", () => {
    expect(ss.devide(-6, 3)).toBe(-2);
  });
  test("a number divided by 0 and returns Infinity", () => {
    expect(ss.devide(4, 0)).toBe(Infinity);
  });
});
