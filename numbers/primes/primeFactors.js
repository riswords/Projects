(function() {
	for(var i=10; i<=20; i++) {
		console.log("Prime factors of " + i + ": " + calculatePrimeFactors(i));
	}
	
	function calculatePrimeFactors(n) {
		var maxTest = Math.floor(Math.sqrt(n));
		for(var i = maxTest; i > 1; i--) {
			if(n % i === 0) {
				return calculatePrimeFactors(i).concat(calculatePrimeFactors(n / i));
			}
		}
		return [n];
	}
})();