const ProductItems = require("../Models/ProductItemModel");

exports.getCategoryByNameController = (req, res) => {
  try {
    ProductItems.find({ category: req.params.category }, (error, result) => {
      if (error) throw new Error("Ошибка отправки списка товаров");
      res.send(result);
    });
  } catch (e) {
    res.status(404).send(e);
  }
};
