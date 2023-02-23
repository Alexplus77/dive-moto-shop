const ProductModel = require("../Models/ProductItemModel");

exports.getProductByNameController = (req, res) => {
  try {
    ProductModel.findOne({ name: req.params.name }, (error, result) => {
      if (error) throw new Error("Ошибка поиска продукта по имени");

      res.send(result);
    });
  } catch (e) {
    res.status(404).send(e);
  }
};
