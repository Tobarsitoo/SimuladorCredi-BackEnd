const odbc = require("odbc");
const { DB_DSN, USER_DNS, PASS_DNS } = require("../config/config");

const connectionStringAS400 = `DSN=${DB_DSN};UID=${USER_DNS};PWD=${PASS_DNS};CCSID=1208`;

async function getConnection() {
  try {
    const connection = await odbc.connect(connectionStringAS400);
    console.log("Conexión con AS400 establecida.");
    return connection;
  } catch (error) {
    console.error("Error al conectar con AS400:", error);
    throw error;
  }
}

module.exports = { getConnection };
