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
  selectQuery = "SELECT * FROM user WHERE id <5";
  connection.query(selectQuery, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// register user
app.post("/user/register", (req, res) => {
  let insert_query = `INSERT INTO user (username, password, email) 
                        VALUES ('JohnmmnnDoe', 'password', 'mbharti@gmil.com')`;
  connection.query(insert_query, function (err, results) {
    if (err) throw err;
    res.send(results);
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
