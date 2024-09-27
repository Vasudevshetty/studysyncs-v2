const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "client/public")));
app.use(express.static(path.join(__dirname, "client/dist")));

app.use("/api", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Hello from the backend server🚀😄" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/dist/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 😄`);
});
