const express = require("express");
const {
  addNewProductController,
} = require("../Contollers/addNewProductControllers");

const router = express.Router();
router.post("/addNewProduct", addNewProductController);

module.exports = router;
