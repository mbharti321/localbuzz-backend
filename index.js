const express = require("express");

var app = express();
port = 3000;


app.get("/", (req, res) => {
  res.send("Hello, world!");
});


app.listen(port, () => {
  console.log("Listening on port:", port);
});
