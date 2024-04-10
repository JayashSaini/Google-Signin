const passport = require("passport");
const { Router } = require("express");
const router = Router();
const { SocialLoginHandler } = require("../controllers/user.controllers.js");
router.route("/google").get(
  passport.authenticate("google", {
    scope: ["profile", "email"], // Include the required scope
  }),
  (req, res) => {
    res.send("redirecting to google...");
  }
);

router
  .route("/google/redirect")
  .get(passport.authenticate("google"), SocialLoginHandler);

module.exports = router;
