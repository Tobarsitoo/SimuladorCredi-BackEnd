const express = require("express");
const router = express.Router();
const { getLineCreditController } = require("../controllers/lineCreditController");

router.get("/lineas-credito", getLineCreditController); // Ruta para obtener líneas de crédito por nombre o número de línea

module.exports = router;