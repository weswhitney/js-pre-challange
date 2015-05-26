module.exports = {

  largestPhoneNumber: function(numbers) {
    var total = 0, count = 1;
    while (count <= 10) {
      total += count;
      count += 1;
      console.log(typeof count);
    }
    return total;
    }
};


// what are the inputs to the problem?
// An array of strings
// the outputs?
// a single string of the largest sum number
// what variables should be created, and what initial variables should they have?
//sum = 0
// what intermediate steps should be taken to compute other values and to ultimately
// compute the output?
//remove dashes
// find the sum of each index
// compare the sums to the other numbers
// return the highest sum or the last if multiple as a string
// Do these steps repeat instructions that can be written in simplified form using a loop?
