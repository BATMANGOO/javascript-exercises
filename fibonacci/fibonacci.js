const fibonacci = function(num) {
  if(num < 0) return 'OOPS';
  let a = 1;
  let b = 0;
  let nxtNum;
  while(num > 0) {
    nxtNum = +a;
    a = (+a) + (+b);
    b = +nxtNum;
    num--
  }
  return nxtNum;
}

module.exports = fibonacci
