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
} = require("./src/db");

app.use(express.urlencoded({ extended: true }));

app.post("/account/register", (req, res) => {
  createCustomerTable();
  const { firstName, lastName, mobileNumber, email } = req.body;

  registerCustomer(firstName, lastName, mobileNumber, email).then((data) =>
    res.send(data.rows)
  );
});

app.post("/addProducts", (req, res) => {
  createProductsTable();
  const {
    description,
    imageLink,
    category,
    price,
    sale,
    percentageOff,
    rating,
    reviews,
  } = req.body;

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

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
