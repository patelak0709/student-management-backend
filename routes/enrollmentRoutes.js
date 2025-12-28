const express = require("express");
const Enrollment = require("../models/Enrollment");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

/* ENROLL COURSE */
router.post("/enroll/:courseId", auth, role(["student"]), async (req, res) => {
  const enroll = await Enrollment.create({
    student: req.user.id,
    course: req.params.courseId
  });
  res.json(enroll);
});

/* VIEW OWN COURSES */
router.get("/my-courses", auth, role(["student"]), async (req, res) => {
  const courses = await Enrollment.find({ student: req.user.id })
    .populate("course");
  res.json(courses);
});

module.exports = router;
