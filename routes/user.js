const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

// MVC     Model - View - Controller

// Create POST /products
//Read GET /products
// Read GET /products/:id
// Update PUT /products/:id
// Update PATCH /products/:id
// Delete DELETE /products/:id

router
  .post("/", userController.createUser)
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUser)
  .put("/:id", userController.replaceUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

exports.router = router;
