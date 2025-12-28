const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  age: Number,
  city: String
});

module.exports = mongoose.model("Student", studentSchema);
