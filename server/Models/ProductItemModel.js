const mongoose = require("mongoose");
const ParametersItem = require("./ParametersProductModel");
const productSchema = mongoose.Schema({
  name: { type: String, unique: true },
  category: String,
  path: String,
  sale: Boolean,
  price: Number,
  parameters: { type: mongoose.Schema.Types.ObjectId, ref: ParametersItem },
  availability: Number,
  countStar: Number,
});

module.exports = mongoose.model("ProductItemModel", productSchema);
