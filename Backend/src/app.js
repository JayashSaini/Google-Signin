const express = require("express");
const app = express();
const authRouter = require("./routes/auth.routes.js");
const userRouter = require("./routes/user.routes.js");
// const { errorHandler } = require("./middlewares/error.middleware.js");
const { initializingPassport } = require("./config/passport.config.js");
const passport = require("passport");
const expressSession = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Initialize Passport
initializingPassport(passport);

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow cookies and other credentials to be included in the request
  })
);

// Body Parsing Middleware
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

// Cookie Parsing Middleware
app.use(cookieParser());

// Session Middleware
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET || "YourSecretKeyHere", // Replace with a proper secret key
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
app.get("/api/v1/hello", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});
// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

// Error Handling Middleware

module.exports = app;
