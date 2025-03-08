/**
 * Carga y exporta el secreto del token desde variables de entorno.
 */

const TOKEN_SECRET = process.env.TOKEN_SECRET;

if (!TOKEN_SECRET) {
    throw new Error("Error: TOKEN_SECRET no está definido en el archivo .env");
}

module.exports = TOKEN_SECRET;
