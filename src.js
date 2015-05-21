module.exports = {

  largestPhoneNumber: function(number) {
    var numberNoDash = number.replace(/[^0-9]/g,'');
    return numberNoDash
  },

}
