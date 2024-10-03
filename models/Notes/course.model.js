const mongoose = require("mongoose");

// Define the schema
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "College must have a name"],
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: "Course must be of some college",
  },
  semesters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Semester",
    },
  ],
});

// Create the model
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
