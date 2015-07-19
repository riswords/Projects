(function() {
	var common = require("../../common/common");
	try {
		console.log(getNthFibRecursive(0));
		console.log(getNthFibAccumulator(0));
	}
	catch(e) {
		console.log(e.name + ": " + e.message);
	}
	
	// Print Fibonacci numbers recursively
	for(var i=1; i<= 10; i++) {
		console.log(getNthFibRecursive(i));
	}
	
	// Print Fibonacci numbers in accumulator-passing style
	for(var i=1; i<=10; i++) {
		console.log(getNthFibAccumulator(i));
	}
	
	// Calculate nth Fibonacci number recursively
	function getNthFibRecursive(n) {
		if(n <= 0) {
			throw new common.InputException("Must enter a positive integer.");
		}
		else if(n <= 2) {
			return 1;
		}
		else {
			return getNthFibRecursive(n - 1) + getNthFibRecursive(n - 2); 
		}
	}
	
	// Calculate nth Fibonacci number in accumulator-passing style
	function getNthFibAccumulator(n) {
		var accumulator = function(n, prevPrevFib, prevFib) {
			if(n <= 2) {
				return prevFib;
			}
			else {
				return accumulator(n - 1, prevFib, prevPrevFib + prevFib);
			}
		};
		
		if(n <= 0) {
			throw new common.InputException("Must enter a positive integer.");
		}
		else {
			return accumulator(n, 1, 1);
		}
	}
})();