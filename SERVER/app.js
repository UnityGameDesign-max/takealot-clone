const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = 5000;

app.use(express.urlencoded({ extended: true }));

router.post("/account/register", (req, res) => {

    const { firstName, lastName, mobileNumber,email } =
      req.body;
  
    addNewVisitor(
      firstName,
      lastName,
      email,
      mobileNumber
    ).then((data) => res.send(data.rows));
  });

app.listen(5000, () => {
  "app listening on port 5000";
});
