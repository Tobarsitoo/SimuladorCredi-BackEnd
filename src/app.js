require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.Routes");
const creditRoutes = require("./routes/credit.Routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

/**
 * Configuración de middleware global.
 */

// Habilitar CORS
app.use(cors({ 
    origin: process.env.FRONTEND_URL, 
    credentials: true 
}));

// Middleware para parsear JSON en las solicitudes.
app.use(express.json());

/**
 * Definición de rutas de la API.
 */
app.use("/api/auth", authRoutes); // Rutas de autenticación
app.use("/api/credit", creditRoutes); // Rutas de crédito

// Middleware de manejo de errores.
app.use(errorHandler);

module.exports = app;
