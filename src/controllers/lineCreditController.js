const { getLineCredit } = require("../models/lineCreditModel");

async function getLineCreditController(req, res) {
  try {
    const lines = await getLineCredit();

    if (lines.length === 0) {
      return res.status(404).json({ message: "No se encontraron líneas de crédito" });
    }

    const data = lines.map((line) => {
      return {
        linea: line.TCRE06,
        nombre: line.DESC06.trim(),
        tipo_linea: line.CLAS06,
        fondo_garantia: line.AFOG06,
        tasa_interes: line.INTC06,
        tope_maximo: line.TMAX06
      };
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las líneas de crédito" });
  }
}

module.exports = { getLineCreditController };