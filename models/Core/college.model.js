const mongoose = require("mongoose");

// Define the schema
const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "College must have a name"],
  },
  location: {
    type: String,
    required: [true, "College must have a location"],
  },
  contactEmail: {
    type: String,
    required: [true, "College must have a contact email"],
    validate: {
      validator: function (email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
      },
      message: "Please provide a valid email address",
    },
  },
});

// Create the model
const College = mongoose.model("College", collegeSchema);

module.exports = College;
