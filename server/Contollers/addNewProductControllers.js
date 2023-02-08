const ProductItem = require("../Models/ProductItemModel");
exports.addNewProductController = (req, res) => {
  new ProductItem({ ...req.body }).save(() =>
    ProductItem.find({}, (error, result) => res.send(result))
  );
};
