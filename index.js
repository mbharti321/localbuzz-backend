const express = require("express");
const connection = require("./db_config");
const userRoutes = require("./routes/userRoutes");
const {
  handleNotFound,
  handleErrors,
} = require("./middleware/errorMiddleware");

var app = express();
app.use(express.json());
port = 3000;

// hello world
app.get("/", (req, res) => {
  console.log("GET / - Success");
  res.send("Hello, world!\nWelcome to LocalBizz backend API!");
});

// Use the userRoutes middleware for the "/user" route
app.use("/user", userRoutes);

// Handle 404 - Not Found
app.use(handleNotFound);

// Handle errors
app.use(handleErrors);

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
