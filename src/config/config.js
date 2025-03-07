require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_DSN: process.env.DB_DSN || "DSN_NAME"
};
