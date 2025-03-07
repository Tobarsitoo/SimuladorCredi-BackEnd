const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { getUserByCedula } = require("../models/UserModel");

async function login(req, res, next) {
  try {
    const { cedula, fechaExp, fechaNa } = req.body;
    const user = await getUserByCedula(cedula);

    if (!user || user.FECN05 !== fechaNa || user.FEXP05 !== fechaExp) {
      return res.status(401).json({ message: "Credeciales incorrectas." });
    }

    const token = jwt.sign({ cedula: user.NNIT05, nombre: user.DESC05.trim() }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = { login };
