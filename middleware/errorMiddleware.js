// errorMiddleware.js
const handleNotFound = (req, res, next) => {
  console.log("404 - Not Found");
  res.status(404).send("404 - Not Found");
};

const handleErrors = (err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
};

module.exports = { handleNotFound, handleErrors };
