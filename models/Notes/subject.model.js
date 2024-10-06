const mongoose = require("mongoose");

// Define the schema
const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Every subject must have a name"],
  },
  code: {
    type: String,
    required: [true, "Every subject must have a code"],
  },
  credits: {
    type: Number,
    required: [true, "Subject must have a credit value"],
  },
  semester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Semester",
    required: [true, "Subject must belong to a semester"],
  },
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
