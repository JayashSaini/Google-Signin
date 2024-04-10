const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});

const app = require("./app.js");
const connectDB = require("./db/index.js");

(async () => {
  // Connect Mongodb Database
  await connectDB();

  app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
  });
})();
