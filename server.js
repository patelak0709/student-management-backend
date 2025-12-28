const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/student_mgmt");

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/student", studentRoutes);
app.use("/courses", courseRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
