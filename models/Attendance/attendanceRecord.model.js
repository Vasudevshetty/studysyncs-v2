const mongoose = require("mongoose");

// Define the schema
const attendanceRecordSchema = new mongoose.Schema({
  // Add your schema fields here
});

// Create the model
const AttendanceRecord = mongoose.model(
  "AttendanceRecord",
  attendanceRecordSchema
);

module.exports = AttendanceRecord;
