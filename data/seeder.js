const mongoose = require("mongoose");
const College = require("../models/Core/college.model");
const Course = require("../models/Core/course.model");
const Section = require("../models/Core/section.model");
const Timetable = require("../models/Attendance/timetable.model");
const connectDB = require("../util/dbConnection");
require('dotenv').config()

const seedData = async () => {
  try {
    connectDB();
    // Seed College
    const college = await College.create({
      name: "Sri Jayachamarajendra College of Engineering",
      location: "Mysore",
      contactEmail: "sjce@gmail.com",
    });

    // Seed Courses
    const courses = await Course.insertMany([
      {
        name: "Computer Science and Engineering",
        college: college._id,
        durationInYears: 4,
      },
      {
        name: "Electronics and Communication",
        college: college._id,
        durationInYears: 4,
      },
      {
        name: "Information Science",
        college: college._id,
        durationInYears: 4,
      },
    ]);

    // Seed Sections
    const sections = await Section.insertMany([
      {
        name: "A",
        batchYear: 2026,
        course: courses.find(
          (course) => course.name === "Computer Science and Engineering"
        )._id,
      },
      {
        name: "B",
        batchYear: 2026,
        course: courses.find(
          (course) => course.name === "Computer Science and Engineering"
        )._id,
      },
      {
        name: "C",
        batchYear: 2026,
        course: courses.find(
          (course) => course.name === "Computer Science and Engineering"
        )._id,
      },
      {
        name: "D",
        batchYear: 2026,
        course: courses.find(
          (course) => course.name === "Computer Science and Engineering"
        )._id,
      },
      {
        name: "E",
        batchYear: 2026,
        course: courses.find(
          (course) => course.name === "Computer Science and Engineering"
        )._id,
      },
    ]);

    // Seed Default Timetables
    await Promise.all(
      sections.map(async (section) => {
        await Timetable.create({
          sectionId: section._id,
          semester: "5", // Assuming this timetable is for 5th semester
          weeklySchedule: {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
          },
        });
      })
    );

    console.log("Data seeded successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
};

seedData();
