const app = require("./app");
const { PORT } = require("./config/config");

/**
 * Inicia el servidor en el puerto definido en el archivo de configuración.
 */
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en: http://localhost:${PORT}`);
});
