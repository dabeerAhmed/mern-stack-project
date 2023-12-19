// const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

// PRODUCTS
// API - ROOT - Base URL

// CRUD - CREATE, READ, UPDATE, DELETE

// create POST product
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

// Read GET products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

// Read GET products/id
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};

// Update PUT products/id
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// Update PATCH products/id
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// Delete DELETE products/id
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.json(400).json(err);
  }
};
