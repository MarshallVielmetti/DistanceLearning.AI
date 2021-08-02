const express = require("express"),
  path = require("path"),
  jade = require("jade"),
  mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  cors = require("cors"),
  User = require("./Models/UserModel"),
  Class = require("./Models/ClassModel"),
  { v4: uuidv4 } = require("uuid");
const { access } = require("fs");

require("dotenv").config();

const app = express();

// view engine setup
app.set("view engine", "jade");
app.use(express.json());

//ExpressAPI
//gAZu6GcKAfbATu66
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/API/create_user", async (req, res) => {
  User.findOne({ email: req.body.email }, async function (err, user) {
    if (err) throw err;
    if (user === null) {
      var newUser = new User({
        email: req.body.email,
        emailConfirmed: false,
        password: req.body.password,
        accountType: req.body.accountType,
        activeClass: "",
        name: "",
        attention: [],
      });

      await newUser.save();

      res.status(200).send("Successfully created user."); //IMPROVEMENT: Should probably add an error code if save fails
    } else {
      //Email already in use....
      res.status(400).send("Email already in use.");
    }
  });
});

app.post("/API/login", async (req, res) => {
  console.log("Received req");
  User.findOne({ email: req.body.email }, async function (err, user) {
    if (err) throw err;
    if (user !== null) {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (err) throw err;

        if (isMatch) {
          const accessToken = jwt.sign(
            { email: req.body.email, accountType: user.accountType },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1d" }
          );

          res.status(200).send({ token: accessToken });
        } else {
          //Wrong Password
          res.status(401).send("Incorrect password.");
        }
      });
    } else {
      res.status(400).send("User does not exist.");
    }
  });
});

function authenticateToken() {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; //Token portion of Bearer-Token

    if (token === null) return res.status(401).send("Invalid Token");

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).send("Invalid Token");
      req.user = user;
      next();
    });
  };
}

app.post("/API/authenticate", authenticateToken(), async (req, res) => {
  res.status(200).send("Valid Token");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.sendStatus(500);
  console.log(err);
});

module.exports = app;
