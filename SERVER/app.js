const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = 5000;
const {
  createCustomerTable,
  registerCustomer,
  createProductsTable,
  addProducts,
  getAllProducts,
  getProductsCategory,
} = require("./src/db");

app.use(express.urlencoded({ extended: true }));

app.post("/account/register", (req, res) => {
  createCustomerTable();

  let customer;

  if (!req.body.firstName) {
    customer = JSON.parse(Object.keys(req.body)[0]);
  } else {
    customer = req.body;
  }

  const { firstName, lastName, mobileNumber, email, password } = customer;

  registerCustomer(firstName, lastName, mobileNumber, email, password).then(
    (data) => res.send(data.rows)
  );
});

app.post("/addProducts", (req, res) => {
  createProductsTable();

  let product;

  if (!req.body.description) {
    product = JSON.parse(Object.keys(req.body)[0]);
  } else {
    product = req.body;
  }

  const {
    description,
    imageLink,
    category,
    price,
    sale,
    percentageOff,
    rating,
    reviews,
  } = product;

  addProducts(
    description,
    imageLink,
    category,
    price,
    sale,
    percentageOff,
    rating,
    reviews
  ).then((data) => res.send(data.rows));
});

app.get("/getProducts", (req, res) => {
  getAllProducts().then((data) => res.send(data.rows));
});

app.get("/getProducts/:id", (req, res) => {
  getProductsCategory(req.params.id).then((data) => res.send(data.rows));
});

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
