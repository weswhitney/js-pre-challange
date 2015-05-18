var yourCode = require('../src');

describe("largestPhoneNumber", function() {

  it("returns the numbers without the dashes", function() {
    expect(yourCode.largestPhoneNumber('123-456-7777')).toEqual('1234567777');
  });

});
