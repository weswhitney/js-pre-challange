module.exports = {

  largestPhoneNumber: function(arrayOfNumbers) {
    var arrayOfSums = [], splitArray = [], sum = [];

      for (var j = 0; j <= arrayOfNumbers.length - 1; j++) {
        arrayOfSums.push(arrayOfNumbers[j].replace(/[\D]/g, "").split("").map(Number).reduce(function (pv, cv) { return pv + cv; }, 0));
        // for (var i = 0; i <= arrayOfSums.length - 1; i++) {
        // }
      }
      largestSum = function (arrayOfSums) {
        return Math.max.apply(null, arrayOfSums);
      }
      return largestSum(arrayOfSums);
    }
}


// array = ['555-555-5555','111-111-1111','555-555-5456','222-121-2121']

// what are the inputs to the problem?
// An array of strings
// the outputs?
// a single string of the largest sum number
// what variables should be created, and what initial variables should they have?
// sum = 0
// what intermediate steps should be taken to compute other values and to ultimately
// compute the output?
//remove dashes
// find the sum of each index
// compare the sums to the other numbers
// return the highest sum or the last if multiple as a string
// Do these steps repeat instructions that can be written in simplified form using a loop?
