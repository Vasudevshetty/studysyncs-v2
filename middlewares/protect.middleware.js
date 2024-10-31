// Middleware to protect routes
const protect = (req, res, next) => {
  // Get the token from headers
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "You are not logged in!" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid or expired!" });
    }

    // Attach user to the request
    req.user = decoded; // or retrieve full user from database if needed
    next();
  });
};

// Middleware to restrict access based on role
const authorize = (...roles) => {
  return (req, res, next) => {
    // Check if user role is included in allowed roles
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({
          message: "You do not have permission to perform this action!",
        });
    }
    next();
  };
};

module.exports = { protect, authorize };
