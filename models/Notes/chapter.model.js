const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Module must have a name"],
    },
    unti: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
    resources: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource",
      },
    ],
  },
  { timestamps: true }
);

const Chapter = mongoose.model("Chapter", chapterSchema);
module.exports = Chapter;
