const mongoose = require("mongoose");
const College = require("../../models/Core/college.model");
const { mongodb_uri } = require("../env");
const { loadJSON } = require("../util/loadJSON");
const Course = require("../../models/Core/course.model");
const Batch = require("../../models/Core/batch.model");
const Semester = require("../../models/Core/semester.model");
const Section = require("../../models/Core/section.model");
const Timetable = require("../../models/Attendance/timetable.model");

const clearDatabase = async () => {
  await College.deleteMany({});
  await Course.deleteMany({});
  await Section.deleteMany({});
  await Batch.deleteMany({});
  await Semester.deleteMany({});
  await Timetable.deleteMany({});
};

const seedCoreData = async () => {
  try {
    await mongoose.connect(mongodb_uri);
    console.log("Connected to MongoDB");

    // Clear previous data
    await clearDatabase();
    console.log("Database cleared!");

    // Load JSON files
    const collegesData = await loadJSON("../json/core/colleges.json");
    const coursesData = await loadJSON("../json/core/courses.json");
    const batchesData = await loadJSON("../json/core/batches.json");
    const sectionsData = await loadJSON("../json/core/sections.json");
    console.log("Data loaded successfully");

    // Seed College
    const college = await College.create(collegesData[0]);
    console.log("College seeded:", college.name);

    // Seed Courses and link to the correct college
    const courses = await Course.insertMany(
      coursesData.map((course) => ({
        ...course,
        college: college._id,
      }))
    );
    console.log("Courses seeded:", courses.length);

    // Seed Batches
    const batches = await Promise.all(
      batchesData.map(async (batchData) => {
        const course = courses.find((c) => c.name === batchData.course);
        if (!course) {
          console.log(
            `Skipping batch for course: ${batchData.course} (not found)`
          );
          return null; // Skip this batch if course not found
        }
        return await Batch.create({
          year: batchData.year,
          course: course._id,
        });
      })
    );

    const validBatches = batches.filter(Boolean);
    console.log("Batches seeded:", validBatches.length);

    // Seed Semesters
    await Promise.all(
      courses.map(async (course) => {
        const batch = validBatches.find((b) => b.course.equals(course._id));
        if (!batch) {
          console.log(
            `Skipping semesters for course: ${course.name} (batch not found)`
          );
          return; // Skip if the batch is not found
        }
        await Promise.all(
          Array.from({ length: 8 }, async (_, i) => {
            await Semester.create({
              number: i + 1,
              batch: batch._id,
            });
          })
        );
      })
    );

    // Seed Sections and create default timetables
    await Promise.all(
      sectionsData.map(async (sectionData) => {
        const batch = validBatches.find(
          (b) => b.year === sectionData.batchYear
        );
        const course = courses.find((c) => c.name === sectionData.course);

        if (!batch) {
          console.log(
            `Skipping section: ${sectionData.name} (batch not found)`
          );
          return; // Skip if the batch is not found
        }
        if (!course) {
          console.log(
            `Skipping section: ${sectionData.name} (course not found)`
          );
          return; // Skip if the course is not found
        }

        // Create Section
        const section = await Section.create({
          name: sectionData.name,
          batchYear: sectionData.batchYear,
          course: course._id,
          currentSemester: null, // This will be updated later
        });

        // Create Timetable
        const timetable = await Timetable.create({
          section: section._id,
          semester: null,
          weeklySchedule: {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
          },
          startDate: "2024-01-01",
          endDate: "2024-06-01",
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
        } else {
          console.log(`No current semester found for section: ${section.name}`);
        }
      })
    );

    console.log("Core Data seeded successfully");
    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    await mongoose.connection.close();
  }
};

seedCoreData();
