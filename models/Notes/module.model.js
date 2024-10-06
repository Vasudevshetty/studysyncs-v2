const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Module must have a name"],
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
    required: true,
  },
  resources: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
    },
  ],
});

const Module = mongoose.model("Module", moduleSchema);
module.exports = Module;
