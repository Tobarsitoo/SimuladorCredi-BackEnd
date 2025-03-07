const { getConnection } = require("../db/odbc");

async function getUserByCedula(cedula) {
  const db = await getConnection();
  const result = await db.query(
    `SELECT A.DESC05, A.NNIT05, A.FECN05, B.FEXP05 
     FROM COLIB.ACP05 A 
     INNER JOIN COLIB.ACP054 B ON A.NNIT05 = B.CEDU05 
     WHERE A.NNIT05 = ?`, 
    [cedula]
  );
  return result.length > 0 ? result[0] : null;
}

module.exports = { getUserByCedula };
