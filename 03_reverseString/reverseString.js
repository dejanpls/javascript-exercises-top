const reverseString = function(str) {
	let newArray = str.split("").reverse();

	let newStr = "";

	for (let i = 0; i < newArray.length; i++) {
		newStr += newArray[i];
	}

	return newStr;
};

// Do not edit below this line
module.exports = reverseString;
