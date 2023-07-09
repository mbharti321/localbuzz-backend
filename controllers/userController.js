// userController.js
const connection = require("../dbConfig");

exports.getUsers = (req, res) => {
  selectQuery = "SELECT * FROM user WHERE id < 5";
  connection.query(selectQuery, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    console.log("GET /user - Success");
    res.send(result);
  });
};

// register user
/* payload: {
    "username": "JohnDoe",
    "password": "password",
    "email": "mbharti@gmail.com"
  }
*/
exports.registerUser = (req, res) => {
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
};
