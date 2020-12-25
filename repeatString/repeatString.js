const repeatString = function(str, num) {
  let i = 1;
  let arr = []
  if (num < 0) return 'ERROR';
  while (i <= num) {
    arr.push(str);
    i++
  }
  return arr.join('');
}

module.exports = repeatString
