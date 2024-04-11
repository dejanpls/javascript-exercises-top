const palindromes = function (string) {
 	const str = string
		 				.toLowerCase()
		 				.match(/\b[\w]+\b/g) // remove punctuations using regEx
		 				.join("")
	const strReversed = str.split("").reverse().join("");
	return str == strReversed;
};

// Do not edit below this line
module.exports = palindromes;
