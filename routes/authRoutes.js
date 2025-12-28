const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

/* ADMIN SIGNUP ONLY */
router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (role !== "admin") {
    return res.status(403).json({ message: "Only admin signup allowed" });
  }

  const hashed = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: hashed,
    role: "admin"
  });

  res.json({ message: "Admin created" });
});

/* LOGIN (ADMIN + STUDENT) */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "SECRET_KEY"
  );

  res.json({ token });
});

module.exports = router;
