const { getConnection } = require("../db/odbc");

/**
 * Obtiene un usuario por su cédula desde la base de datos AS400.
 * @param {string} cedula - Número de cédula del usuario.
 * @returns {Promise<Object|null>} Datos del usuario si se encuentra, de lo contrario `null`.
 */
async function getUserByCedula(cedula) {
  try {
    const db = await getConnection();
    
    // Consulta parametrizada para evitar inyección SQL
    const query = `
      SELECT A.DESC05, A.NNIT05, A.FECN05, B.FEXP05 
      FROM COLIB.ACP05 A 
      INNER JOIN COLIB.ACP054 B ON A.NNIT05 = B.CEDU05 
      WHERE A.NNIT05 = ?`;

    const result = await db.query(query, [cedula]);

    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("Error al obtener usuario por cédula:", error);
    throw new Error("Error al consultar el usuario.");
  }
}

module.exports = { getUserByCedula };
