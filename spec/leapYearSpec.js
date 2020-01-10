// A year is not a leap year if not divisible by 4
// A year is a leap year if divisible by 4
// A year is a leap year if divisible by 400
// A year is not a leap year if divisible by 100 but not by 400

/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
 https://jasmine.github.io/2.0/introduction
*/

describe("convert an integer in its value as a string", function () { // Describes the suite / group of tests
  it("check if number is not divisible by 4", function () {
    expect(isDivisibleBy4(1999)).toEqual(false);
  });

  it("check if number is not divisible by 4", function () {
    expect(isDivisibleBy4(2000)).toEqual(true);
  });

  it("check if number is not divisible by 400", function () {
    expect(isDivisibleBy400(1999)).toEqual(false);
  });

  it("check if number is not divisible by 400", function () {
    expect(isDivisibleBy400(2000)).toEqual(true);
  });


  it("check if number is not divisible by 100", function () {
    expect(isDivisibleBy100(1999)).toEqual(false);
  });

  it("check if number is not divisible by 100", function () {
    expect(isDivisibleBy100(2000)).toEqual(true);
  });


  it("check if number is not divisible by 400", function () {
    expect(isDivisibleBy100AndNotDivisibleBy400(1999)).toEqual(false);
  });

  it("check if number is not divisible by 400", function () {
    expect(isDivisibleBy100AndNotDivisibleBy400(1908)).toEqual(true);
  });
});