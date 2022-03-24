const { Client } = require("pg");
const { configuration } = require("./config");

const client = new Client(configuration);
client.connect((err) => {
  if (err) throw Error(err.message);
});

const createCustomerTable = () => {
  client.query(
    "DROP TABLE IF EXISTS Customers; CREATE TABLE IF NOT EXISTS Customers(ID SERIAL NOT NULL PRIMARY KEY,firstName varchar(50) NOT NULL,lastName varchar(50) NOT NULL,email varchar(50) NOT NULL,mobileNumber INT NOT NULL, password varchar(50) NOT NULL)",
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

const registerCustomer = async (
  firstName,
  lastName,
  mobileNumber,
  email,
  password
) => {
  try {
    return await client.query(
      "INSERT INTO Customers(firstName, lastName, mobileNumber, email, password) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [firstName, lastName, mobileNumber, email, password]
    );
  } catch (err) {
    throw Error(err.message);
  }
};

const addProducts = async (
  description,
  imageLink,
  category,
  price,
  sale,
  percentageOff,
  rating,
  reviews
) => {
  try {
    return await client.query(
      "INSERT INTO Products(description, imageLink, category, price,sale,percentageOff,rating,reviews) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [
        description,
        imageLink,
        category,
        price,
        sale,
        percentageOff,
        rating,
        reviews,
      ]
    );
  } catch (err) {
    throw Error(err.message);
  }
};

const getAllProducts = async () => {
  try {
    const result = await client.query("SELECT * FROM Products");
    return result;
  } catch (err) {
    throw Error(err.message);
  }
};

const getProductsCategory = async (category) => {
  try {
    const result = await client.query(
      "SELECT * FROM Products WHERE category = $1",
      [category]
    );
    return result;
  } catch (err) {
    throw Error(err.message);
  }
};

module.exports = {
  getProductsCategory,
  createCustomerTable,
  createProductsTable,
  registerCustomer,
  addProducts,
  getAllProducts,
};
