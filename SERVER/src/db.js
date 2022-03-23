const { Client } = require("pg");
const { configuration } = require("./config");

console.log( configuration);
const client = new Client(configuration);
client.connect((err) => {
  if (err) throw Error(err.message);
});

const createTable = () => {
  client.query(
    "CREATE TABLE IF NOT EXISTS Customers(ID SERIAL NOT NULL PRIMARY KEY,fullName varchar(50) NOT NULL,Age INT NOT NULL,email varchar(50) NOT NULL,newsLetter varchar(50))",
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
createTable();
