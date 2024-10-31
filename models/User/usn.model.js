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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Batch",
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationOtp: String,
    otpExpires: Date, // New field to store OTP expiration time
  },
  { timestamps: true }
);

// Generate a 6-digit OTP verification code with expiration
usnSchema.methods.createVerificationOTP = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Ensures a 6-digit number

  // Store the hashed version of the OTP and set expiration time (10 minutes)
  this.verificationOtp = crypto.createHash("sha256").update(otp).digest("hex");
  this.otpExpires = Date.now() + 1 * 60 * 1000; // OTP valid for 10 minutes

  return otp; // Return the raw OTP to send to the user
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
