const mongoose = require("mongoose");
const crypto = require("crypto");

const usnSchema = new mongoose.Schema(
  {
    usn: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },
    batch: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return (
            /^[0-9]{4}$/.test(v) &&
            parseInt(v) >= 2000 &&
            parseInt(v) <= new Date().getFullYear() + 4
          );
        },
        message:
          "Batch must be a valid 4-digit year between 2000 and four years in the future.",
      },
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
  },
  { timestamps: true }
);

// Generate an email verification token
usnSchema.methods.createVerificationToken = function () {
  const verificationToken = crypto.randomBytes(32).toString("hex");

  this.verificationToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");

  return verificationToken;
};

// Protect the USN model from modification after verification
usnSchema.pre("save", function (next) {
  if (this.isVerified && this.isModified("usn")) {
    return next(new Error("Verified USN cannot be modified."));
  }
  next();
});

const USN = mongoose.model("USN", usnSchema);
module.exports = USN;
