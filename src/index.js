const app = require("./app");
const { PORT } = require("./config/config");

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`));