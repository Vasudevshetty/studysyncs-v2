const mongoose = require("mongoose");

// Define the schema
const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Every subject must have a name"],
    },
    slug: {
      type: String,
      required: [true, "College must have a slug to map"],
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
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Batch",
      required: true,
    },
    elective: {
      type: Boolean,
      default: false,
    },
    electiveType: {
      type: String,
      enum: ["open", "professional"],
      required: function () {
        return this.isElective;
      }, // electiveType is required if isElective is true
      default: null,
    },
    units: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit",
      },
    ],
  },
  { timestamps: true }
);

// Create the model
const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
