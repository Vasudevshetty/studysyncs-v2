const mongoose = require("mongoose");

module.exports = async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Registered Models: ", mongoose.modelNames());
    console.log("Connected to mongoDB 📦" + connection.connection.host);
  } catch (error) {
    console.error("Error connecting to the database.", error.message);
    process.exit(1);
  }
};
