const { Client } = require("pg");
const { configuration } = require("./config");

// console.log(configuration);
const client = new Client(configuration);
client.connect((err) => {
  if (err) throw Error(err.message);
});

const createCustomerTable = () => {
  client.query(
    "CREATE TABLE IF NOT EXISTS Customers(ID SERIAL NOT NULL PRIMARY KEY,firstName varchar(50) NOT NULL,lastName varchar(50) NOT NULL,email varchar(50) NOT NULL,mobileNumber INT NOT NULL,newsLetter varchar(50))",
    (err) => {
      if (err) {
        throw Error(err.message);
      } 
      setTimeout(() => {
        client.end();
      }, 6000000);
    }
  );
};

const createProductsTable = () => {
  client.query(
    "CREATE TABLE IF NOT EXISTS Products(ID SERIAL NOT NULL PRIMARY KEY,description varchar(50) NOT NULL, imageLink  varchar(50) NOT NULL, category varchar(50) NOT NULL, price varchar(50) NOT NULL,sale BOOLEAN NOT NULL,percentageOff INT NOT NULL,rating INT NOT NULL,reviews INT NOT NULL)",
    (err) => {
      if (err) {
        throw Error(err.message);
      } 
      setTimeout(() => {
        client.end();
      }, 6000000);
    }
  );
};

const registerCustomer = async (firstName, lastName, mobileNumber, email) => {
  try {
    return await client.query(
      "INSERT INTO Customers(firstName, lastName, mobileNumber, email) VALUES($1,$2,$3,$4) RETURNING *",
      [firstName, lastName, mobileNumber, email]
    );
  } catch (err) {
    throw Error(err.message);
  }
};

const addProducts = async (description, imageLink, category, price,sale,percentageOff,rating,reviews) => {
  try {
    return await client.query(
      "INSERT INTO Customers(firstName, lastName, mobileNumber, email) VALUES($1,$2,$3,$4) RETURNING *",
      [firstName, lastName, mobileNumber, email]
    );
  } catch (err) {
    throw Error(err.message);
  }
};

module.exports = {
  createCustomerTable,
  createProductsTable,
  registerCustomer
};
