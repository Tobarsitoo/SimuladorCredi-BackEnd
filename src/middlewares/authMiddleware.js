const jwt = require("jsonwebtoken");

/**
 * Middleware para autenticar tokens JWT.
 * @param {Object} req - Objeto de solicitud (request).
 * @param {Object} res - Objeto de respuesta (response).
 * @param {Function} next - Función para continuar con la siguiente middleware.
 */
function authenticateToken(req, res, next) {
    // Obtener el token del encabezado 'Authorization'
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    // Verificar si el token está presente
    if (!token) {
        return res.status(403).json({ message: "Se necesita un token de autenticación." });
    }

    // Validar el token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token inválido o expirado." });
        }

        // Agregar la información del usuario a la solicitud para su uso posterior
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
