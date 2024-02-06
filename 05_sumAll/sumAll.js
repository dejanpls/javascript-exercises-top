const sumAll = function(num1, num2) {
	let sum = 0;
	let operator1 = 0;
	let operator2 = 0;

	if (typeof(num1) !== "number" || typeof(num2) !== "number") return "ERROR"
	else if (num1 < 0 || num2 < 0) return "ERROR"

	if (num1 > num2) {
		operator1 = num2;
		operator2 = num1;
	} else {
		operator1 = num1;
		operator2 = num2;
	}

	for (let i = operator1; i <= operator2; i++) {
		sum += i;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
