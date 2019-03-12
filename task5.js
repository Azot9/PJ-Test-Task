
function sumArray(arr) {
	let sum = 0;
	for (let value of arr) {
		if (typeof value === "number") {
			sum += value;
		} else {
			sum += sumArray(value);
		}
	}
	return sum;
}

console.log(sumArray([1, 2, 3, [4, 5, [9], [1, 2]], 10]));
console.log(sumArray([1, 2, [3, 4, [5, 6], 7], 8, [9, 10]]));

