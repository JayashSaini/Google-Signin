const mongoose = require("mongoose");

module.exports = async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected Successfully");
  } catch (err) {
    console.log("MongoDb connection Error : " + err);
  }
};
