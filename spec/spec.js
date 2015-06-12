var yourCode = require('../src');

describe("largestPhoneNumber", function() {


  it("takes the dashes out of the strings", function () {
    expect(yourCode.largestPhoneNumber(
      [
      '555-555-5555',
      '111-111-1111',
      '555-555-5456',
      '222-121-2121'
      ]
      )).toEqual(
      [
      '5555555555',
      '1111111111',
      '5555555456',
      '2221212121'
      ]
      );
  });

});
