const { getConnection } = require("../db/odbc");

async function getUserByUsername(username) {
  const db = await getConnection();
  const result = await db.query("SELECT * FROM users WHERE username = ?", [username]);
  return result.length > 0 ? result[0] : null;
}

module.exports = { getUserByUsername };
