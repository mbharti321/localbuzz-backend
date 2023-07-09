const express = require("express");
const connection = require("./db_config");

var app = express();
app.use(express.json());
port = 3000;

// hello world
app.get("/", (req, res) => {
  console.log("GET / - Success");
  res.send("Hello, world!");
});

// get users
app.get("/user", (req, res) => {
  selectQuery = "SELECT * FROM user WHERE id < 5";
  connection.query(selectQuery, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    console.log("GET /user - Success");
    res.send(result);
  });
});

// register user
/* payload: {
    "username": "JohnDoe",
    "password": "password",
    "email": "mbharti@gmail.com"
  }
*/
app.post("/user/register", (req, res) => {
  const { username, password, email } = req.body;
  const user = { username, password, email };
  // console.log(user);
  const insertQuery = "INSERT INTO user SET ?";
  connection.query(insertQuery, user, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    console.log("POST /user/register - Success");
    res.status(201).send("User registered successfully");
  });
});

// handle 404 - Not Found
app.use((req, res, next) => {
  console.log("404 - Not Found");
  res.status(404).send("404 - Not Found");
});

// handle errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

// start server
app.listen(port, () => {
  console.log("Listening on port:", port);

  // connect to database
  connection.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err);
      process.exit(1);
    }
    console.log("Database connected!");
  });
});
