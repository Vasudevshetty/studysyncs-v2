const mongoose = require("mongoose");
const path = require("path");
const USN = require("../../models/User/usn.model");
const College = require("../../models/Core/college.model");
const Course = require("../../models/Core/course.model");
const Section = require("../../models/Core/section.model");
const Batch = require("../../models/Core/batch.model");
const { mongodb_uri } = require("../env");
const parseCSV = require("../util/parseCSV");

const seedUSNData = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongodb_uri);
    console.log("Connected to MongoDB.");

    const filePath = path.join(__dirname, "..", "csv", "usn.csv");
    console.log(`Parsing CSV file at: ${filePath}`);

    // Parse CSV file
    const usnData = await parseCSV(filePath);
    console.log("CSV data loaded successfully.");

    for (const usnEntry of usnData) {
      // Fetch the college, course, section, and batch by name
      const college = await College.findOne({ name: usnEntry.college });
      const course = await Course.findOne({ name: usnEntry.course });
      const section = await Section.findOne({ name: usnEntry.section });
      const batch = await Batch.findOne({
        year: usnEntry.batch,
        course: course ? course._id : null, // Ensure course is not null
      });

      // Create the USN entry with mapped references
      if (college && course && section && batch) {
        const newUSN = {
          usn: usnEntry.usn,
          email: usnEntry.email,
          college: college._id, // Map college ObjectId
          course: course._id, // Map course ObjectId
          section: section._id, // Map section ObjectId
          batch: batch._id, // Map batch ObjectId
          isVerified: usnEntry.isVerified === "true", // Ensure boolean conversion if needed
        };

        await USN.create(newUSN);
        console.log(`USN created for: ${usnEntry.usn}`);
      } else {
        console.error(
          `Mapping error for USN: ${usnEntry.usn} - College or course or section or batch not found`
        );
      }
    }

    console.log("USN Data seeded successfully");
    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding USN data:", error);
    await mongoose.connection.close();
  }
};

seedUSNData();
