const express = require("express");
const {
  addNewProductController,
} = require("../Contollers/addNewProductControllers");
const {
  getProductsController,
} = require("../Contollers/getProductsController");
const router = express.Router();

router.post("/addNewProduct", addNewProductController);
router.get("/getProducts", getProductsController);
module.exports = router;
