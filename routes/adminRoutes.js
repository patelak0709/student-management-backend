const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Student = require("../models/Student");
const Course = require("../models/Course");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

/* CREATE STUDENT */
router.post("/create-student", auth, role(["admin"]), async (req, res) => {
  const { name, email, password, age, city } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    role: "student"
  });

  await Student.create({
    user: user._id,
    age,
    city
  });

  res.json({ message: "Student created" });
});

/* CREATE COURSE */
router.post("/courses", auth, role(["admin"]), async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
});

module.exports = router;
