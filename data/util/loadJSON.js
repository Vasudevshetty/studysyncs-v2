const fs = require("fs").promises;

// Function to load JSON data
const loadJSON = async (filePath) => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};
exports.loadJSON = loadJSON;
