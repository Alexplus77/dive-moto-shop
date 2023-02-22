const express = require("express");
const {
  addNewProductController,
} = require("../Contollers/addNewProductControllers");
const {
  getProductsController,
} = require("../Contollers/getProductsController");
const {
  getProductByNameController,
} = require("../Contollers/getProductByNameController");
const router = express.Router();

router.post("/addNewProduct", addNewProductController);
router.get("/getProducts", getProductsController);
router.get("/getProductByName/:name", getProductByNameController);
module.exports = router;
