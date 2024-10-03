const mongoose = require("mongoose");

// Define the schema
const eventsSchema = new mongoose.Schema({
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: [true, "Event must belong to college"],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "Event must belong to course"],
  },
  semester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Semester",
    required: [true, "Event must belong to semester"],
  },
  date: {
    type: Date,
    required: [true, "Event must be scheduled"],
  },
  title: {
    type: String,
    required: [true, "Event must have a title"],
  },
  description: {
    type: String,
    required: [true, "Event must have a short description atleast"],
  },
});

// Create the model
const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;
