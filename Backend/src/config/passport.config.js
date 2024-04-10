const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user.model.js");

const initializingPassport = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        scope: ["profile", "email"],
      },
      (_, __, profile, done) => {
        const user = new User({
          googleId: profile.id,
          username: profile.displayName,
          thumbnail: profile._json.picture,
        });
        user.save({ validationBeforeSave: false });
        return done(null, user);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      return done(error, false);
    }
  });
};

const isAuthenticated = (req, res, next) => {
  if (req.user) return next();
  res.redirect("/user/login");
};

module.exports = {
  initializingPassport,
  isAuthenticated,
};
