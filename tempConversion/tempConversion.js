const ftoc = function(f) {
  let conversion = (f - 32) * 5/9;
  return Math.round(conversion * 10) / 10;
}

const ctof = function(c) {
 let conversion = (c * 9/5) + 32;
 return Math.round(conversion * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
