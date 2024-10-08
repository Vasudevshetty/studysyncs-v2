const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
  year: {
    type: Number, // Change type to Number
    required: true,
    validate: {
      validator: function (v) {
        return (
          Number.isInteger(v) && // Ensure it's an integer
          v >= 2000 &&
          v <= new Date().getFullYear() + 4
        );
      },
      message:
        "Batch must be a valid year between 2000 and four years in the future.",
    },
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
