// userRouter.js

const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Route to create a new user
router.post("/", userController.createUser);

// Route to get all users
router.get("/", userController.getAllUsers);

// Route to get active users
router.get("/status/active", userController.getActiveUsers);

// Route to get inactive users
router.get("/status/inactive", userController.getInactiveUsers);

// Route to get a user by ID
router.get("/:id", userController.getUserById);

// Route to update a user by ID
router.put("/:id", userController.updateUser);

// Route to delete a user by ID
router.delete("/:id", userController.deleteUser);

module.exports = router;
