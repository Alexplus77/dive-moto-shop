const mongoose = require("mongoose");
const ParametersItem = require("./ParametersProductModel");
const productSchema = mongoose.Schema({
  name: { type: String, unique: true },
  category: String,
  path: String,
  sale: Boolean,
  price: Number,
  parameters: {
    manufacturer: String,
    numberOfSeats: Number,
    enginePower: Number,
    engineType: String,
    yearOfRelease: Number,
  },
  availability: Number,
  countStar: Number,
});

module.exports = mongoose.model("ProductItemModel", productSchema);
