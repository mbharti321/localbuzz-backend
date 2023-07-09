const express = require("express");
const connection = require("./db_config");

var app = express();
port = 3000;

// hello world
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// get users
app.get("/user", (req, res) => {
  selectQuery = "SELECT * FROM users WHERE id <5";
  connection.query(selectQuery, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// start server
app.listen(port, () => {
  console.log("Listening on port:", port);

  // connect to database
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected!");
  });
});
