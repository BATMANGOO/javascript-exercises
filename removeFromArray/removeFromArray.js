const removeFromArray = function(arr, ...args) {
 args.forEach(arg => {
   if(arr.includes(arg)) {
     arr.splice(arr.indexOf(arg),1);
   };
  });
  return arr;
}

module.exports = removeFromArray
