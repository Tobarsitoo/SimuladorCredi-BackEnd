const odbc = require("odbc");
const { DB_DSN } = require("../config/config");

async function getConnection() {
  try {
    const connection = await odbc.connect(DB_DSN);
    return connection;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}

module.exports = { getConnection };
