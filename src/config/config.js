require("dotenv").config();

module.exports = {
  // Puerto en el que se ejecutará el servidor
  PORT: process.env.PORT || 4000,

  // Configuración de la base de datos 
  DB_DSN: process.env.DB_DSN,
  USER_DNS: process.env.USER_DNS, 
  PASS_DNS: process.env.PASS_DNS
};
