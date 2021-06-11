const fn = require("./reverso.js");

describe("reverso function", () => {
  it('should reverse "sneakers"', () => {
    const result = fn.reverso("sneakers");
    expect(result).toEqual("srekaens");
  });
  it("should reverse strings of one letter", () => {
    const result = fn.reverso("s");
    expect(result).toEqual("s");
  });
  it("should return an empty string when given an empty string", () => {
    const result = fn.reverso("");
    expect(result).toEqual("");
  });
  it('should reverse strings for "Hello"', () => {
    const result = fn.reverso("Hello");
    expect(result).toEqual("olleH");
  });
  it('should reverse strings of HELL', () => {
    const result = fn.reverso("HELL");
    expect (result).toEqual("LLEH");
  })
});
