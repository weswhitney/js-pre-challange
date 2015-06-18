module.exports = {

  largestPhoneNumber: function(arrayOfNumbers) {
    var arrayOfSums = [], splitArray = [];

    for (var j = 0; j <= arrayOfNumbers.length - 1; j++) {
      arrayOfSums.push(arrayOfNumbers[j].replace(/[\D]/g, "").split("").map(Number).reduce(function (pv, cv) { return pv + cv; }, 0));
    }
    var i = arrayOfSums.lastIndexOf(Math.max.apply(Math, arrayOfSums));
    return arrayOfNumbers[i];
  }
}
