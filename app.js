const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const errorHandler = require("./middlewares/error.middleware"); // Import global error handler
const AppError = require("./util/AppError");

const authRoutes = require("./routes/auth.route");

const app = express();

// Security and Logging Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per `window`
});
app.use(limiter);

app.use(express.json());
app.use(express.static(path.join(__dirname, "client/public")));
app.use(express.static(path.join(__dirname, "client/dist")));

// Example API Route
app.use("/api/v2/greeting", (req, res, next) => {
  res.status(200).json({ message: "Hello from the backend server🚀😄" });
});

app.use("/api/v2/auth", authRoutes);

// Handle Undefined API Routes
app.all("/api/*", (req, res, next) => {
  next(new AppError("API route not found 💥", 404));
});

// Handle React Router (client-side routing) for production
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/dist/index.html"));
});

// Global Error Handling Middleware
app.use(errorHandler);

module.exports = app;
