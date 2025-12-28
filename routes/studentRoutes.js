const express = require("express");
const Enrollment = require("../models/Enrollment");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

/* ENROLL */
router.post("/enroll/:courseId", auth, role(["student"]), async (req, res) => {
  await Enrollment.create({
    student: req.user.id,
    course: req.params.courseId
  });

  res.json({ message: "Enrolled successfully" });
});

/* MY COURSES */
router.get("/my-courses", auth, role(["student"]), async (req, res) => {
  const data = await Enrollment.find({ student: req.user.id })
    .populate("course");

  res.json(data);
});

module.exports = router;
