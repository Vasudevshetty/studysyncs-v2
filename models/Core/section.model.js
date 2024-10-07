const mongoose = require("mongoose");

// Define the schema
const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Section must have a name"],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Section must belong to a course"],
  },
  currentSemester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Semester",
    required: [true, "Section must have a current semester"],
  },
  batchYear: {
    type: Number,
    required: [true, "Section must have a batch year"],
  },
  timetable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Timetable",
    required: [true, "Section must have a timetable"],
  },
});

// Create the model
const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;
