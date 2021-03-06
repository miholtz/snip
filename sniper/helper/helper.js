
    

function helper () {

	
	helper.prototype.isSet = function(element) {		
		try {
			
			var properties = Array.prototype.slice.call(arguments, 1);
			
			if (typeof element != "undefined" && element || element === 0) {
				
				if (typeof properties != "undefined") {
					for (var i = 0; i < properties.length; i++) {
						if (typeof element == "undefined" || !element || !element.hasOwnProperty(properties[i])) {
							return false;
						}
						
						if (element === 0) return true;
						
						element = element[properties[i]];
					}
					return true;
				} else {
					return true;						
				}

			} else {
				return false;
			}
		} catch (exception) {
			console.log(exception);
			return false;
		}
	};

}
module.exports = helper;