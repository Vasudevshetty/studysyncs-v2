const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: [true, "Batch must have a year"],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Batch must be associated with a course"],
  },
  semesters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Semester",
      required: [true, "Batch must have semesters"],
    },
  ],
});

const Batch = mongoose.model("Batch", batchSchema);

module.exports = Batch;
