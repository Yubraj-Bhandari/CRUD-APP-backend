const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

//Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from NODE API ");
});

mongoose
  .connect(
    "mongodb+srv://uvrajbhandari:uastwjDMcKQQlD0l@cluster0.fqjlyxf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to Database!");

    app.listen(3000, () => {
      console.log("Server is running in PORT 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
