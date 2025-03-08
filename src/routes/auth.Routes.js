const express = require("express");
const { loginAsociado } = require("../controllers/authController");

const router = express.Router();

/**
 * Ruta para el inicio de sesión de un asociado.
 * @route POST /login
 * @access Público
 */
router.post("/login", loginAsociado);

module.exports = router;
