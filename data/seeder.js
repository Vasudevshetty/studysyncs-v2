const mongoose = require("mongoose");
const fs = require("fs").promises;
const College = require("../models/Core/college.model");
const Course = require("../models/Core/course.model");
const Section = require("../models/Core/section.model");
const Batch = require("../models/Core/batch.model");
const Semester = require("../models/Core/semester.model");
const Timetable = require("../models/Attendance/timetable.model");
const clearDatabase = require("./clearDatabase"); // Assuming you have a separate clearDatabase function
const { mongodb_uri } = require("./env");

// Function to load JSON data
const loadJSON = async (filePath) => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

// Seed data function
const seedData = async () => {
  try {
    await mongoose.connect(mongodb_uri);

    // Clear previous data
    await clearDatabase();

    // Load JSON files
    const collegesData = await loadJSON("./json/colleges.json");
    const coursesData = await loadJSON("./json/courses.json");
    const batchesData = await loadJSON("./json/batches.json");
    const sectionsData = await loadJSON("./json/sections.json");

    // Seed College
    const college = await College.create(collegesData[0]);

    // Seed Courses and link to the correct college
    const courses = await Course.insertMany(
      coursesData.map((course) => ({
        ...course,
        college: college._id,
      }))
    );

    // Seed Batches
    const batches = await Promise.all(
      batchesData.map(async (batchData) => {
        const course = courses.find((c) => c.name === batchData.course);
        return await Batch.create({
          year: batchData.year,
          course: course._id,
        });
      })
    );

    // Seed Semesters (8 semesters for each course)
    await Promise.all(
      courses.map(async (course) => {
        const batch = batches.find((b) => b.course.equals(course._id));
        if (batch) {
          const semesters = await Promise.all(
            Array.from({ length: 8 }, (_, i) =>
              Semester.create({
                number: i + 1,
                batch: batch._id,
              })
            )
          );

          // Update batch with semester IDs (if needed)
          batch.semesters = semesters.map((semester) => semester._id);
          await batch.save();
        }
      })
    );

    // Seed Sections and create default timetables
    await Promise.all(
      sectionsData.map(async (sectionData) => {
        const batch = batches.find((b) => b.year === sectionData.batchYear);
        const course = courses.find((c) => c.name === sectionData.course);

        // Create Section
        const section = await Section.create({
          name: sectionData.name,
          batchYear: sectionData.batchYear,
          course: course._id,
          currentSemester: null, // This will be updated later with the appropriate semester
        });

        // Create Timetable
        const timetable = await Timetable.create({
          section: section._id,
          semester: null, // Set this after creating semesters
          weeklySchedule: {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
          },
          startDate: "2024-01-01", // Set your desired start date
          endDate: "2024-06-01", // Set your desired end date
        });

        // Update Section with Timetable
        section.timetable = timetable._id;
        await section.save();

        // Update current semester (assuming 5th semester)
        const currentSemester = await Semester.findOne({
          batch: batch._id,
          number: 5,
        });
        if (currentSemester) {
          section.currentSemester = currentSemester._id;
          await section.save();
        }
      })
    );

    console.log("Data seeded successfully");
    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    await mongoose.connection.close();
  }
};

seedData();
