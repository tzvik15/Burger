const mysql = require("mysql");

require("dotenv").config();

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: "employees_DB"
});


connection.connect(function(err) {
  if (err) throw err;
  
});

module.exports = connection;