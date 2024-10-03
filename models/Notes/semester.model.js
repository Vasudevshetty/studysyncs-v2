const mongoose = require("mongoose");

// Define the schema
const semesterSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: [true, "Semester must have a number"],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
});

// Create the model
const Semester = mongoose.model("Semester", semesterSchema);

module.exports = Semester;
