
    

function helperWebservice () {
	
	helperWebservice.prototype.webSocket = require("ws");
	helperWebservice.prototype.helper = require("./helper.js");
	helperWebservice.prototype.helper = new helperWebservice.prototype.helper();
	
	
	helperWebservice.prototype.ws = new helperWebservice.prototype.webSocket("wss://api.hitbtc.com/api/2/ws");
	
	
	
	helperWebservice.prototype.ws.on("open", function(){

		helperWebservice.prototype.ws.send('{"method": "subscribeTicker", "params": { "symbol": "ETHUSD" }, "id": 123}');	
	});
	
	helperWebservice.prototype.ws.on("message", function(data){
		data = JSON.parse(data);
		
		if (helperWebservice.prototype.helper.isSet(data, "params", "timestamp")) {
			
			console.log(data);
		}
	});
}
module.exports = helperWebservice;