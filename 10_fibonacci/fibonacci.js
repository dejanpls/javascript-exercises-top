const fibonacci = function(value) {
	const number = parseInt(value);
	arr = [];

	if (number < 0) return "OOPS";
	else {
		for (let i = 0; i <= number; i++) {
			if (i == 0) arr.push(i);
			if (i == 1 || i == 2) arr.splice(0, 0, 1);
			if (i > 1) {
				arr.splice(0, 0, (arr[0] + arr[1]));
			}
		}
	}

	return arr.reverse()[number];
};

// Do not edit below this line
module.exports = fibonacci;
