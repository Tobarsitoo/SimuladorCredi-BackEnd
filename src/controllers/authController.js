const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // ❌ No se usa en este código, considera eliminarlo si no es necesario.
const { getUserByCedula } = require("../models/UserModel");

/**
 * Controlador para manejar el inicio de sesión.
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para manejar errores (middleware).
 */
async function loginAsociado(req, res, next) {
  try {
    // Extraer datos del cuerpo de la solicitud
    const { cedula, fechaExp, fechaNa } = req.body;

    // Validar que los datos obligatorios estén presentes
    if (!cedula || !fechaExp || !fechaNa) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    // Obtener usuario por cédula
    const user = await getUserByCedula(cedula);

    // Validar existencia del usuario y coincidencia de datos sensibles
    if (!user || user.FECN05 !== fechaNa || user.FEXP05 !== fechaExp) {
      return res.status(401).json({ message: "Credenciales incorrectas." });
    }

    // Generar token de autenticación
    const token = jwt.sign(
      { 
        cedula: user.NNIT05, 
        nombre: user.DESC05.trim() 
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Expiración del token
    );

    res.json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = { loginAsociado };
