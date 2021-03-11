const ftoc = function(fahTemp) {
  return Number(((fahTemp-32)*5/9).toFixed(1))
}

const ctof = function(celTemp) {
  return Number(((celTemp*9/5)+32).toFixed(1))
}

module.exports = {
  ftoc,
  ctof
}
