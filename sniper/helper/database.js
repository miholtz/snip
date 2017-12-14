var mysql = require('mysql');

function helperDatabase () {

	helperDatabase.prototype.mysql = mysql;

	helperDatabase.prototype.connection = mysql.createConnection({
		host: "localhost",
		user: "tripdb",
		password: "tripdb",
		database: "sniper"
	});

	helperDatabase.prototype.connection.connect();

	helperDatabase.prototype.getDatabaseConnection = function() {
		return helperDatabase.prototype.connection;
	};
	
	
	helperDatabase.prototype.getBuys = function () {
		
		var connection = this.getDatabaseConnection();
		var query = connection.query('SELECT * FROM buy');
		
		return query;
	};

}
module.exports = helperDatabase;