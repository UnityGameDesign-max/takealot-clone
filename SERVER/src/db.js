const { Client } = require("pg");
const { configuration } = require("./configuration");
const queryObject = require("./queryObject");

const client = new Client(configuration);
client.connect((err) => {
  if (err) throw Error(err.message);
});

const createTable = () => {
  client.query(
    "CREATE TABLE IF NOT EXISTS Visitors(ID SERIAL NOT NULL PRIMARY KEY,fullName varchar(50) NOT NULL,Age INT NOT NULL,dateOfVisit DATE NOT NULL,timeOfVisit TIME NOT NULL,assistantName VARCHAR(50) NOT NULL,comments VARCHAR(200) NOT NULL)",
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
