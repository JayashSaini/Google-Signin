const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});

const app = require("./app.js");
const connectDB = require("./db/index.js");

(async () => {
  // Connect Mongodb Database
  await connectDB();

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
})();
