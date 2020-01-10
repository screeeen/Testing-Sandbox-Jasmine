
/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
 https://jasmine.github.io/2.0/introduction
*/

describe("convert function", function () { // Describes the suite / group of tests
  it("Returns undefined when parameter passed is a string", function () {
    expect(convert(1)).toEqual("1");
  });
});
