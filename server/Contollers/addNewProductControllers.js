const ProductModel = require("../Models/ProductItemModel");
const mongoose = require("mongoose");
exports.addNewProductController = (req, res) => {
  try {
    new ProductModel({ ...req.body }).save(() =>
      ProductModel.find({}, (error, result) => res.send(result))
    );
  } catch (e) {
    res.status(404).send({ message: "error saving" });
  }
};
