const mongoose = require("mongoose");

// Define the schema
const chapterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Every chapter will have a name"],
  },
  modules: [
    {
      name: {
        type: String,
        required: [true, "Every chapter will have a name"],
      },
      resources: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Resource",
        },
      ],
    },
  ],
});

// Create the model
const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;
