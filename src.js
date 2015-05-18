module.exports = {

  largestPhoneNumber: function(number) {
    var numberNoDash = number.replace(/^D/,'')
    return numberNoDash
  },

}
