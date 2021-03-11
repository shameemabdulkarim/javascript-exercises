function add (a,b) {
	return a+b
}

function subtract (a,b) {
	return a-b
}

function sum (arr) {
	return (arr.reduce((a,b)=>a+b,0));

}

function multiply (arr) {
	return Number(arr.reduce((a,b)=>a*b,1));
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(n) {
	if (n<0){
		return -1;
	} else if (n==0) {
		return 1;
	} else {
	return n*factorial(n-1)
	}
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}