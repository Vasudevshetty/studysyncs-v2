const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    classes: [
      {
        subject: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Subject",
          required: true,
        },
        status: {
          type: String,
          enum: ["attended", "bunked", "canceled", "unmarked"],
          default: "unmarked",
        },
        time: {
          type: String, // e.g., '10:00 AM - 11:00 AM'
          required: true,
        },
      },
    ],
    extraClasses: [
      {
        subject: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Subject",
          required: true,
        },
        status: {
          type: String,
          enum: ["attended", "bunked", "canceled", "unmarked"],
          default: "unmarked",
        },
        time: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("AttendanceRecord", attendanceSchema);
