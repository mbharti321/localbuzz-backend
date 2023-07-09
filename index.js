const express = require("express");
const connection = require("./db_config");
const userRoutes = require("./routes/userRoutes");

var app = express();
app.use(express.json());
port = 3000;

// hello world
app.get("/", (req, res) => {
  console.log("GET / - Success");
  res.send("Hello, world!");
});

// Use the userRoutes middleware for the "/user" route
app.use("/user", userRoutes);

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
