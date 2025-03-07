require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.Routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Habilitar CORS
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(errorHandler);

module.exports = app;
