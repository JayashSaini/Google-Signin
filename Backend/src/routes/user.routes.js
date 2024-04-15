const { Router } = require("express");
const { verifyJwt } = require("../middlewares/auth.middlewares.js");
const router = Router();
router.route("/getself").get(verifyJwt, (req, res) => {
  res.json({
    statusCode: 200,
    data: req?.user,
    message: "data is here",
  });
});

module.exports = router;
