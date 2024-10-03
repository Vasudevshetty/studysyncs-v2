const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const createError = require("http-errors");
const errorHandler = require("./middlewares/error.middleware"); // Import your global error handler

const app = express();

// Security and Logging Middlewares
// app.use(helmet()); // will be added later
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

// API route example
app.use("/api", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Hello from the backend server🚀😄" });
});

// Handle React Router (client-side routing) for production
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/dist/index.html"));
});

app.use(errorHandler);

module.exports = app;
