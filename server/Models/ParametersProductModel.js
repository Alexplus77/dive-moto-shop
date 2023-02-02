const mongoose = require("mongoose");

const parametersProductSchema = mongoose.Schema({
  manufacturer: String,
  numberOfSeats: Number,
  enginePower: Number,
  engineType: String,
  yearOfRelease: Number,
});

module.exports = mongoose.model("ParametersProduct", parametersProductSchema);
