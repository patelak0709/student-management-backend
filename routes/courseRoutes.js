const express = require("express");
const Course = require("../models/Course");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", auth, role(["admin", "student"]), async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;
