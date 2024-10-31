const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Chapter must have a name"],
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  modules: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
    },
  ],
  resources: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
    },
  ],
});

const Unit = mongoose.model("Unit", unitSchema);
module.exports = Unit;
