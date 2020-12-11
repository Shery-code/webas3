var express = require("express");
var Product = require("../models/product");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await Product.find();
  // console.log(products);
  res.render("products/list", { title: "Product list in DB", products });
});

router.get("/add", async function (req, res, next) {
  res.render("products/add");
});

//add data in db
router.post("/add", async function (req, res, next) {
  let product = new Product(req.body);
  await product.save();
  res.redirect("/products");
});

//deleting data from db
router.get("/delete/:id", async function (req, res, next) {
  let product = await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

//updating data from db
router.get("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  res.render("products/edit", { product });
});

router.post("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  await product.save();
  res.redirect("/products");
});
module.exports = router;
