
function findPrimeFactors(numb, primeNumbers = []) {
	for (var i = 2; i < numb + 1; i++) {
		if (numb % i === 0){
			primeNumbers.push(i);
			if (numb > 3) {
				findPrimeFactors( numb/i, primeNumbers);
			}
			return(numb + "=" + primeNumbers.join('x'));
		} 
	}
}

console.log(findPrimeFactors(12))
console.log(findPrimeFactors(55))
console.log(findPrimeFactors(9))
console.log(findPrimeFactors(13))
console.log(findPrimeFactors(2))
console.log(findPrimeFactors(100))
console.log(findPrimeFactors(48))