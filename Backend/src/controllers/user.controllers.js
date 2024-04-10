const User = require("../models/user.model.js");

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    console.log("access " + user);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    console.log("access TOken : ", accessToken);
    console.log("refreshToken : ", refreshToken);
    // attach refresh token to the user document to avoid refreshing the access token with multiple refresh tokens
    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    console.log("Something went wrong while generating the access token");
  }
};

const SocialLoginHandler = async (req, res) => {
  try {
    const user = await User.findById(req.user?._id);
    console.log(user);
    if (!user) {
      res.status(400).json({
        status: 400,
        data: null,
        error: "User is not defiend",
        success: false,
        stack: [],
      });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    return res
      .status(301)
      .cookie("accessToken", accessToken, options) // set the access token in the cookie
      .cookie("refreshToken", refreshToken, options) // set the refresh token in the cookie
      .redirect(
        // redirect user to the frontend with access and refresh token in case user is not using cookies
        `${process.env.CLIENT_SSO_REDIRECT_URL}/${accessToken}/${refreshToken}`
      );
  } catch (error) {
    res.status(400).json({
      status: 400,
      data: null,
      error: error.message,
      success: false,
      stack: error?.stack || [],
    });
  }
};

module.exports = { SocialLoginHandler };
