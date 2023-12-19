const express = require("express");
const productController = require("../controller/product");
const router = express.Router();

// MVC     Model - View - Controller

// Create POST /products
//Read GET /products
// Read GET /products/:id
// Update PUT /products/:id
// Update PATCH /products/:id
// Delete DELETE /products/:id

router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

exports.router = router;
