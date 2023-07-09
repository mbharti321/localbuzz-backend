const mysql = require("mysql2");

// set connection configuration
var connection = mysql.createConnection({
  host: "db4free.net",
  user: "mcube_admin",
  password: "mcube_password",
  database: "business_listing",
});

module.exports = connection;
