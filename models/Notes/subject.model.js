const mongoose = require("mongoose");

// Define the schema
const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Every subject has name"],
  },
  code: {
    type: String,
    required: [true, "Every subject must have a code"],
  },
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
    },
  ],
});

// Create the model
const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
