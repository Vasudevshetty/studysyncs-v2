const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: [true, "Semester must have a number"],
    min: 1,
    max: 8,
  },
  batch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Batch",
    required: [true, "Semester must be associated with a batch"],
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
});

const Semester = mongoose.model("Semester", semesterSchema);

module.exports = Semester;
