var yourCode = require('../src');

describe("largestPhoneNumber", function() {

  it("returns the string Hello World", function() {
    expect(yourCode.largestPhoneNumber(['555-555-5555','111-111-1111','555-555-5456','222-121-2121'])).toEqual("Hello World");
  });

});
