const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema(
  {
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: [true, "Timetable must belong to a section"],
    },
    semester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Semester",
    },
    weeklySchedule: {
      Monday: [
        {
          subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
          },
          time: {
            type: String, // e.g., '10:00 AM - 11:00 AM'
            required: true,
          },
        },
      ],
      Tuesday: [
        {
          subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
          },
          time: {
            type: String,
            required: true,
          },
        },
      ],
      Wednesday: [
        {
          subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
          },
          time: {
            type: String,
            required: true,
          },
        },
      ],
      Thursday: [
        {
          subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
          },
          time: {
            type: String,
            required: true,
          },
        },
      ],
      Friday: [
        {
          subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
          },
          time: {
            type: String,
            required: true,
          },
        },
      ],
      Saturday: [
        {
          subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required: true,
          },
          time: {
            type: String,
            required: true,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Timetable", timetableSchema);
