require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4000,
  DB_DSN: process.env.DB_DSN,
  USER_DNS: process.env.USER_DNS,
  PASS_DNS: process.env.PASS_DNS
};
