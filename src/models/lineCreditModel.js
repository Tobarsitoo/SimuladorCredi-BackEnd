const { getConnection } = require("../db/odbc");

async function getLineCredit() {
  try {
    const db = await getConnection();
    
    // Consulta parametrizada para evitar inyección SQL
    const query = `
        SELECT ACP06.TCRE06, ACP06.DESC06, ACP06.CLAS06, ACP06.AFOG06, ACP06.ACOD06, ACP06.AFOG06, ACP06.INTC06, ACP06.TMAX06
        FROM C707D8E1.COLIB.ACP06 ACP06
        WHERE (ACP06.CLAS06 Between 'E' And 'O') AND (ACP06.TMAX06>0)
    `;

    const result = await db.query(query);

    return result;
  } catch (error) {
    console.error("Error al obtener las líneas de crédito:", error);
    throw new Error("Error al consultar las líneas de crédito.");
  }
}

module.exports = { getLineCredit };
