const mongoose = require("mongoose");
const College = require("../models/Core/college.model");
const Course = require("../models/Core/course.model");
const Section = require("../models/Core/section.model");
const Batch = require("../models/Core/batch.model");
const Semester = require("../models/Core/semester.model");
const Timetable = require("../models/Attendance/timetable.model");

const clearDatabase = async () => {
  await College.deleteMany({});
  await Course.deleteMany({});
  await Section.deleteMany({});
  await Batch.deleteMany({});
  await Semester.deleteMany({});
  await Timetable.deleteMany({});
  console.log("Database cleared!");
};

module.exports = clearDatabase;
