const USN = require("../models/User/usn.model");
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/AppError");
const User = require("../models/User/user.model");
const setJWT = require("../util/setJWT");
const sendEmail = require("../util/sendEmail");
const crypto = require("crypto");
const template = require("../data/html/template");

const College = require("../models/Core/college.model");
const Course = require("../models/Core/course.model");
const Section = require("../models/Core/section.model");
const Batch = require("../models/Core/batch.model");

exports.checkUSNAndSendOTP = catchAsync(async (req, res, next) => {
  const { usn } = req.body;

  const usnDoc = await USN.findOne({ usn });
  if (!usnDoc) return next(new AppError("USN not found", 404));
  
  // Check if the USN is already verified
  if (usnDoc.isVerified) {
    return next(new AppError("This USN is already verified", 400));
  }

  const otp = usnDoc.createVerificationOTP();
  await usnDoc.save();

  await sendEmail({
    from: "Studysyncs",
    to: usnDoc.email,
    subject: "Your OTP for USN Verification",
    html: template(` 
      <!-- Body Content -->
      <div style="padding: 20px; color: #333;">
        <h2 style="text-align: center; color: #333;">Welcome to Studysyncs!</h2>
        <p style="font-size: 1.1em; margin: 20px 0;">
          Hello,
        </p>
        <p style="margin: 0 0 20px;">
          Thank you for starting the signup process with us. To verify your USN, please use the OTP code below:
        </p>
        
        <!-- OTP Section -->
        <div style="text-align: center; margin: 20px 0;">
          <span style="font-size: 2em; color: #4CAF50; font-weight: bold; letter-spacing: 4px;">${otp}</span>
        </div>
        
        <p style="margin: 0 0 20px;">
          Enter this code on the Studysyncs platform to complete your signup. Please note that the OTP is valid for 10 minutes only.
        </p>
        
        <p style="margin: 0;">If you did not request this, please ignore this email.</p>
      </div>`),
  });

  res.status(200).json({
    message: "OTP has been sent to the registered email",
    email: usnDoc.email,
  });
});

// Verify OTP with expiration check
exports.verifyOTP = catchAsync(async (req, res, next) => {
  const { usn, otp } = req.body;

  // Find the USN document
  const usnDoc = await USN.findOne({ usn });
  if (!usnDoc || usnDoc.isVerified) {
    return next(new AppError("Invalid or already verified USN", 400));
  }

  // Check if the OTP is still valid
  if (Date.now() > usnDoc.otpExpires) {
    return next(new AppError("OTP has expired", 400));
  }

  // Hash the provided OTP to compare with stored hashed OTP
  const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

  if (hashedOtp !== usnDoc.verificationOtp) {
    return next(new AppError("Incorrect OTP", 400));
  }

  // Mark the USN as verified and clear the verification token and expiration time
  usnDoc.isVerified = true;
  usnDoc.verificationOtp = undefined; // Clear OTP after verification
  usnDoc.otpExpires = undefined; // Clear OTP expiration time
  await usnDoc.save();

  res.status(200).json({ message: "USN verified successfully" });
});

exports.signup = catchAsync(async (req, res, next) => {
  const { usn, name, password, confirmPassword, googleId, githubId } = req.body;

  // Check for a verified USN
  const usnDoc = await USN.findOne({ usn, isVerified: true });
  if (!usnDoc) {
    return next(
      new AppError("USN verification is required before signup", 400)
    );
  }

  // Check if user already exists with this USN
  let user = await User.findOne({ usn: usnDoc._id }); // Use the ObjectId of the verified USN
  if (user) {
    return next(new AppError("User already registered with this USN", 400));
  }

  // Password-based signup
  if (password && confirmPassword) {
    if (password !== confirmPassword) {
      return next(new AppError("Passwords do not match", 400));
    }
    user = await User.create({
      usn: usnDoc._id, // Save the ObjectId reference
      email: usnDoc.email,
      name,
      password,
    });
  } else if (googleId || githubId) {
    // OAuth-based signup
    user = await User.create({
      usn: usnDoc._id, // Save the ObjectId reference
      email: usnDoc.email,
      name,
      googleId: googleId || undefined,
      githubId: githubId || undefined,
    });
  } else {
    return next(
      new AppError("Either password or OAuth is required for signup", 400)
    );
  }

  // Generate JWT and send response
  setJWT(user, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password, googleId, githubId } = req.body;
  let user;

  // Check if logging in with email and password
  if (password) {
    user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }
  }
  // Check if logging in with Google or GitHub ID
  else if (googleId || githubId) {
    user = await User.findOne({ $or: [{ googleId }, { githubId }] });
    if (!user) {
      return next(new AppError("User not found with provided OAuth ID", 404));
    }
  } else {
    return next(
      new AppError("Either password or OAuth ID required for login", 400)
    );
  }

  user = await user.populate({
    path: "usn",
    populate: "college course section batch",
  });
  // Set JWT and respond
  setJWT(user, 200, res); // Set JWT in cookie and send response
});

exports.logout = (req, res) => {
  res
    .cookie("jwt", "none", {
      expires: new Date(Date.now() + 10 * 1000), // Expires in 10 seconds
      httpOnly: true,
    })
    .status(200)
    .json({ success: true, message: "Logged out successfully" });
};
