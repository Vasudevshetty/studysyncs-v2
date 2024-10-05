const mongoose = require("mongoose");

// Define the schema
const resourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Every file has a name"],
    },
    size: {
      type: String,
      required: [true, "Every file will have size"],
    },
    url: {
      type: String,
      required: [true, "Every file must be stored and the link must be there"],
    },
  },
  { timestamps: true }
);

// Create the model
const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
