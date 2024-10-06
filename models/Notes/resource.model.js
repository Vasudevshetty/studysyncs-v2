const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Resource must have a name"],
    },
    size: {
      type: String,
      required: [true, "Resource must have a size"],
    },
    url: {
      type: String,
      required: [true, "Resource must have a URL"],
    },
    chapter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
    },
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
    },
  },
  { timestamps: true }
);

const Resource = mongoose.model("Resource", resourceSchema);
module.exports = Resource;
