const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");

// get users
userRouter.get("/", userController.getUsers);
// register user
userRouter.post("/register", userController.registerUser);

// Export the userRouter
module.exports = userRouter;
