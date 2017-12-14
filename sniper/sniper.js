var helperDatabase = require("./helper/database.js");
var helperRedis = require("./helper/redis.js");
var helperWebservice = require("./helper/webservice.js");

helperDatabase = new helperDatabase();
helperRedis = new helperRedis();
helperWebservice = new helperWebservice();


var redisClient = helperRedis.getRedisClient();


var buys = helperDatabase.getBuys();

buys.on('result', function(buy){
	
	
	console.log(buy.id);
});



 
// if you'd like to select database 3, instead of 0 (default), call 
// client.select(3, function() { /* ... */ }); 
 
redisClient.on("error", function (err) {
    console.log("Error " + err);
});
 
redisClient.hset("string key", "string val", helperRedis.redis.print);
redisClient.hset("hash key", "hashtest 1", "some value", helperRedis.redis.print);
redisClient.hset(["hash key", "hashtest 2", "some other value"], helperRedis.redis.print);
redisClient.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});