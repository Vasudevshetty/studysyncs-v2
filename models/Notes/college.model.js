const mongoose = require("mongoose");

// Define the schema
const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "College must have a name"],
  },
  location: {
    type: String,
    required: [true, "College must have location"],
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

// Create the model
const College = mongoose.model("College", collegeSchema);

module.exports = College;
