const { User } = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

const verifyJwt = async function (req, res, next) {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");

    if (!token) {
      console.log("token un");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      " -refreshToken"
    );

    if (!user) {
      console.log("ehllo w");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { verifyJwt };
