// Implement the legendary caesar cipher:

// > In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

// Hint: You may need to convert letters to their unicode values. Be sure to read the documentation!

// write a function that takes a string to be encoded and a shift factor and then returns the encoded string:


// psuedo-code: 
//split string
//loop through string
//convert letter to unicode
//add the number of shifts given
//convert new unicode value back to letter
// return new string

const caesar = function(str, shifts) {
  const regex = /[a-zA-Z]+/;
  let split = str.split('');
  let result = '';
  split.map(char => {
    let cipher;
    let unicode = char.charCodeAt(char); 
    let base = unicode < 91 ? 65 : 97; 
    if(char.match(regex)) {
      cipher = mod(unicode + shifts - base, 26) + base;
      result += String.fromCharCode(cipher);
    } else {
      result += char;
    }
  });

  return result
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
module.exports = caesar
