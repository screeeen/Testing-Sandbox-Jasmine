
/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
 https://jasmine.github.io/2.0/introduction
*/

describe("convert function", function () { // Describes the suite / group of tests
  it("convert an integer in its value as a string", function () {
    expect(convert(1)).toEqual("1");
  });
  it("convert an integer in its value as a string", function () {
    expect(convert(2)).toEqual("2");
  });
  it("convert an integer in its value as a string", function () {
    expect(convert(4)).toEqual("4");
  });
  it("convert an integer in its value as a string, if the integer is 3, then return the string Fizz", function () {
    expect(convert(3)).toEqual("Fizz");
  });
  it("convert an integer in its value as a string, if the integer is 5, then return the string Buzz", function () {
    expect(convert(5)).toEqual("Buzz");
  });
  it("convert an integer in its value as a string, if the integer is 15, then return the string FizzBuzz", function () {
    expect(convert(15)).toEqual("FizzBuzz");
  });
});
