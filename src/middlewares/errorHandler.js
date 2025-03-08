/**
 * Middleware para manejar errores globales en la aplicación.
 * @param {Error} err - Objeto de error capturado.
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para continuar con la siguiente middleware.
 */
function errorHandler(err, req, res, next) {
    console.error("Error:", err);

    // Definir el código de estado y el mensaje de error
    const statusCode = err.status || 500;
    const message = err.message || "Error interno del servidor.";

    res.status(statusCode).json({ message });
}

module.exports = errorHandler;
