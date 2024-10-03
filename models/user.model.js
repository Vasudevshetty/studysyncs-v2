const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// Define the schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User must have a name"],
    },
    email: {
      type: String,
      required: [true, "User must have an email"],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (email) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        },
        message: "Please provide a valid email address",
      },
    },
    password: {
      type: String,
      required: [true, "User must have a password"],
      minlength: 8,
      select: false, // Do not return password in query by default
    },
    image: {
      type: String,
      deafult: "deafult.jpg",
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        // This works only on CREATE and SAVE
        validator: function (val) {
          return val === this.password;
        },
        message: "Passwords do not match",
      },
    },
    googleId: String,
    githubId: String,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    emailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: String,
  },
  { timestamps: true }
);

// Encrypt the password before saving
userSchema.pre("save", async function (next) {
  // Only run this function if password is modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // Remove passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

// Set the `passwordChangedAt` field when the password is changed
userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// Instance method to check if a provided password is correct
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Instance method to check if the password was changed after the token was issued
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

// Generate JWT token for authentication
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Generate a password reset token
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes

  return resetToken;
};

// Generate an email verification token
userSchema.methods.createEmailVerificationToken = function () {
  const verificationToken = crypto.randomBytes(32).toString("hex");

  this.emailVerificationToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");

  return verificationToken;
};

// Create the model
const User = mongoose.model("User", userSchema);

module.exports = User;
