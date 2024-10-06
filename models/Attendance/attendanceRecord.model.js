const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  userId: {
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
        enum: ["attended", "bunked", "canceled", ""],
        default: "",
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
        enum: ["attended", "bunked", "canceled", ""],
        default: "",
      },
      time: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("AttendanceRecord", attendanceSchema);
