var yourCode = require('../src');

describe("largestPhoneNumber", function() {

  it("returns the sums of the given phone numbers", function() {
    expect(yourCode.largestPhoneNumber([
      '123-456-7777',
      '963-481-7945',
      '111-222-3333'])).toEqual("963-481-7945");
  });

});
