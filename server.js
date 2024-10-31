const app = require("./app");
require("dotenv").config();

const connectDB = require("./util/dbConnection");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT} 😄`);
});
