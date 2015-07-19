(function() {
	for(var i=1; i<= 22; i++) {
		console.log("The next prime after " + i + " is " + nextPrime(i));
	}
	
	function nextPrime(n) {
		var test = n + 1;
		while(true) {
			if(isPrime(test)) {
				return test;
			}
			else {
				test += 1;
			}
		}
	}
	
	function isPrime(n) {
		var maxTest = Math.floor(Math.sqrt(n));
		for(var i=maxTest; i > 1; i--) {
			if(n % i === 0) {
				return false;
			}
		}
		return true;
	}
})();