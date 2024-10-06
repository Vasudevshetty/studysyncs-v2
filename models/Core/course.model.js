const mongoose = require("mongoose");

// Define the schema
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Course must have a name"],
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: [true, "Course must be associated with a college"],
  },
  semesters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Semester",
    },
  ],
  durationInYears: {
    type: Number,
    required: [true, "Course must have a duration in years"],
    min: 1,
    max: 4,
  },
});

// Create the model
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
