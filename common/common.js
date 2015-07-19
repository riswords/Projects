(function() {
	module.exports = {
		InputException : function(message) {
			this.message = message;
			this.name = "Input Exception";
		}
	};
})();