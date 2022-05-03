const capitalize = require("./capitalize.js");

test("capitalizes the first character of the string Sebasti", () => {
  expect(capitalize("sebasti")).toBe("Sebasti");
});
