const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
require("dotenv").config();
const productRouters = require("./Routers/routerProduct");
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(productRouters);
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});
mongoose
  .set("strictQuery", false)
  .connect("mongodb://127.0.0.1:27017/drive-moto-shop")
  .then(() =>
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
  )
  .catch(() => console.log("error"));
