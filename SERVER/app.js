const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = 5000;
const { createTable, registerCustomer } = require("./src/db");

createTable();
app.use(express.urlencoded({ extended: true }));

app.post("/account/register", (req, res) => {
  const { firstName, lastName, mobileNumber, email } = req.body;
  // console.log(firstName, lastName, mobileNumber, email);
  registerCustomer(firstName, lastName, mobileNumber, email).then((data) =>
    res.send(data.rows)
  );
});



app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
