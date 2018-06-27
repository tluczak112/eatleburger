var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "o677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ljum96ywwwzlo4tc",
  password: "j66vx1shf88lj7tw",
  database: "uicis4emv2hth2zn"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
