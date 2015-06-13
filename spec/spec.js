var yourCode = require('../src');

describe("largestPhoneNumber", function() {


  xit("takes the dashes out of the strings", function () {
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

xit("it turns the strings into arrays of numbers", function () {
    expect(yourCode.largestPhoneNumber(
    [
    '555-555-5555',
    '111-111-1111',
    '555-555-5456',
    '222-121-2121'
    ]
    )).toEqual(
    [
    [5,5,5,5,5,5,5,5,5,5],
    [1,1,1,1,1,1,1,1,1,1],
    [5,5,5,5,5,5,5,4,5,6],
    [2,2,2,1,2,1,2,1,2,1]
    ]
    );
  });

  xit("it turns the strings into arrays of numbers", function () {
    expect(yourCode.largestPhoneNumber(
    [
    '555-555-5555',
    '111-111-1111',
    '555-555-5456',
    '222-121-2121'
    ]
  )).toEqual([50,10,50,16]);
  });

  it("it turns the strings into arrays of numbers", function () {
    expect(yourCode.largestPhoneNumber(
    [
    '555-555-5555',
    '111-111-1111',
    '555-555-5456',
    '222-121-2121'
    ]
  )).toEqual(50);
  });

  xit("it turns the strings into arrays of numbers", function () {
    expect(yourCode.largestPhoneNumber(
    [
    '555-555-5555',
    '111-111-1111',
    '222-121-2121'
    ]
  )).toEqual(0);
  });

});
