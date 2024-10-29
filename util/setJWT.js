// utils/sendTokenResponse.js

const setJWT = (user, statusCode, res) => {
  const token = user.generateAuthToken(); // Generate JWT token

  // Cookie options
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
    ), // Convert days to ms
    httpOnly: true, // Accessible only by the web server
    secure: process.env.NODE_ENV === "production", // Set to true in production
    sameSite: "None", // For cross-site requests
  };

  // Set cookie and send response
  res
    .status(statusCode)
    .cookie("jwt", token, options)
    .json({
      success: true,
      message:
        statusCode === 201
          ? "Signed up successfully"
          : "Logged in successfully",
      user,
    });
};

module.exports = setJWT;
