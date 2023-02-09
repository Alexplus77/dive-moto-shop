const ProductItems = require("../Models/ProductItemModel");
exports.getProductsController = (req, res) => {
  try {
    ProductItems.find({}, (error, result) => {
      res.send(result);
    });
  } catch (e) {}
};
