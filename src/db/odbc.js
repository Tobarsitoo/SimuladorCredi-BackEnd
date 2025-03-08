const odbc = require("odbc");
const { DB_DSN, USER_DNS, PASS_DNS  } = require("../config/config");

// Cadena de conexión a AS400
const connectionStringAS400 = `DSN=${DB_DSN};UID=${USER_DNS};PWD=${PASS_DNS };CCSID=1208`;

/**
 * Establece una conexión con la base de datos AS400.
 * @returns {Promise<object>} Objeto de conexión ODBC.
 * @throws {Error} Si ocurre un error en la conexión.
 */
async function getConnection() {
  try {
    const connection = await odbc.connect(connectionStringAS400);
    return connection;
  } catch (error) {
    console.error("Error al conectar con AS400:", error);
    throw error;
  }
}

module.exports = { getConnection };
