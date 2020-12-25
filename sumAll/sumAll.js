//I want to have two parameters for the min and max numbers thatt ill be adding all the numbers between and including those up to;
//loop through all the numbers from the min to the max untill they are all added up
//I could have a counter which adds every icrement number including the max up.

const sumAll = function(min, max) {
  let sum = 0;

  if(min < 0 || max < 0 || typeof min !== "number" || typeof max !== "number") {
    return "ERROR";
  }

  if (min > max) {
    for(let i = max; i <= min; i++) {
      sum += i;
    }
  } else {
    for(let i = min; i <= max; i++) {
      sum += i;
    } 
  }
  return sum;
}

module.exports = sumAll
