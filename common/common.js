(function() {
	module.exports = {
		InputException : function(message) {
			this.message = message;
			this.name = "Input Exception";
		},
		
		ContractViolationException: function(functionName, expected, actual) {
		    this.functionName = functionName;
		    this.expected = expected;
		    this.actual = actual;
		    this.message = "Contract Violation in function " + functionName + ". " +
		        "Expected: '" + expected + "', Actual: '" + actual + "'";
		}
	};
})();