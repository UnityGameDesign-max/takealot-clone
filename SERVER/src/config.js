require("dotenv").config();

module.exports = {
  user: process.env.user,
  host: process.env.host || 'localhost',
  database: process.env.database || "db",
  password: process.env.password,
  port: process.env.port || 5432,
};
