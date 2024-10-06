const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  name: {
    type: String, // e.g., "CSE-A"
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  classRep: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // Removed the array of students
});

module.exports = mongoose.model("Section", sectionSchema);
