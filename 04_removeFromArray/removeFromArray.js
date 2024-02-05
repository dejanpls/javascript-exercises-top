const removeFromArray = function(toImport, ...args) {
	const forDeletion = [];

	for (let arg of args) forDeletion.push(arg);

	const arr = toImport.filter(item => !forDeletion.includes(item))

	return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
