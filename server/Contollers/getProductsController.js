const ProductItems = require("../Models/ProductItemModel");
exports.getProductsController = (req, res) => {
  try {
    ProductItems.find({}, (error, result) => {
      if (error) throw new Error("Ошибка отправки списка товаров");
      res.send(result);
    });
  } catch (e) {
    res.status(404).send(e);
  }
};
