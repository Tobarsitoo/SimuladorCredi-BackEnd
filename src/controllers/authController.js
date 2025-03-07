const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { getUserByUsername } = require("../models/UserModel");

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = { login };
