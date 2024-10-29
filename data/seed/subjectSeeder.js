const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Batch = require("../../models/Core/batch.model");
const Semester = require("../../models/Core/semester.model");
const Subject = require("../../models/Notes/subject.model");
const Course = require("../../models/Core/course.model");
const { mongodb_uri } = require("../env");

async function seedSubjects() {
  try {
    // Load subjects data from JSON file
    const filePath = path.join(__dirname, "../json/notes/subject.json"); // Adjust the path if needed
    const subjectsData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    for (const subjectData of subjectsData) {
      const {
        name,
        slug,
        code,
        credits,
        semester, // Assuming it's an integer like 5
        batch: { year, course: courseSlug }, // Accessing the batch as an object
      } = subjectData;

      // Find the course based on the course slug
      const course = await Course.findOne({ slug: courseSlug });
      if (!course) {
        throw new Error(`Course with slug "${courseSlug}" not found`);
      }

      // Find the batch based on year and course
      let batch = await Batch.findOne({ year, course: course._id });
      if (!batch) {
        throw new Error(
          `Batch for year ${year} and course "${courseSlug}" not found`
        );
      }

      // Find the semester based on the batch and semester number
      let semesterDoc = await Semester.findOne({
        batch: batch._id,
        number: semester,
      });
      if (!semesterDoc) {
        throw new Error(
          `Semester ${semester} for batch ${year} and course "${courseSlug}" not found`
        );
      }

      // Create or update the subject
      let subject = await Subject.findOne({ code });
      if (!subject) {
        subject = new Subject({
          name,
          slug,
          code,
          credits,
          semester: semesterDoc._id,
          batch: batch._id,
        });
        await subject.save();
        console.log(`Created subject: ${name}`);
      } else {
        console.log(`Subject with code ${code} already exists`);
      }

      // Link the subject to the semester if not already linked
      if (!semesterDoc.subjects.includes(subject._id)) {
        semesterDoc.subjects.push(subject._id);
        await semesterDoc.save();
        console.log(`Linked subject "${name}" to semester ${semester}`);
      }
    }

    console.log("Subject seeding completed!");
  } catch (error) {
    console.error("Error seeding subjects:", error);
  }
}

// Connect to the database and run the seeder
mongoose.connect(mongodb_uri);

mongoose.connection.once("open", async () => {
  console.log("Connected to MongoDB");

  await seedSubjects(); // Run the seed function

  mongoose.connection.close(); // Close the connection after seeding
});
