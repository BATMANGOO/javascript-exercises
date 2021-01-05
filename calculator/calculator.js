// The goal for this exercise is to create a calculator that does the following:

// add, subtract, get the sum, multiply, get the power, and find the factorial

// In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jasmine! To see the expected value
// take a look at the spec file that houses the Jasmine test cases.
function add (num1, num2) {
	return +num1 + +num2;
}

function subtract (num1,num2) {
	return +num1 - +num2;
}

function sum (arr) {
	return arr.reduce((total, num) => {
	return total += num;
	},0)
}

function multiply (arr) {
	return arr.reduce((total, num) => {
		return total *= num;
	},1);
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	let total = 1;
	if (num === 0) {
		return 1;
	}
	for(let i = num; i > 0; i--) {
		 total *= i;
	} 
	return total;
}

console.log(factorial(5));

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}