const express = require("express"),
  jade = require("jade"),
  bcrypt = require("bcrypt"),
  mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  cors = require("cors"),
  User = require("./Models/UserModel"),
  Class = require("./Models/ClassModel"),
  { error } = require("console"),
  { v4: uuidv4 } = require("uuid"),
  fs = require("fs");

require("dotenv").config();

const app = express();

// view engine setup
app.set("view engine", "jade");
app.use(express.json());

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.use(cors()); //REMOVE FOR PRODUCTION

//ExpressAPI
//gAZu6GcKAfbATu66

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/API/create_user", async (req, res) => {
  User.findOne({ email: req.body.email }, async function (err, user) {
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
  console.log("Received req " + req.body.email);
  User.findOne({ email: req.body.email }, async function (err, user) {
    if (err) {
      console.log(err);
    }

    console.log("LOGGIN USER " + user);
    if (user !== null && user !== undefined) {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (err) {
          console.log(err);
        }

        if (isMatch) {
          const accessToken = jwt.sign(
            { email: req.body.email, accountType: user.accountType },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1d" }
          );

          res.status(200).json({ token: accessToken });
        } else {
          //Wrong Password
          res.status(401).send("Incorrect password.");
        }
      });
    } else {
      res.status(400).send("User does not exist.");
    }
  }).catch((err) => {
    console.log(err);
  });

  // const accessToken = jwt.sign(
  //   { email: req.body.email, accountType: "Student" },
  //   process.env.ACCESS_TOKEN_SECRET,
  //   { expiresIn: "1d" }
  // );

  // res.status(200).json({ token: accessToken });
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

app.post("/API/check_class_status", authenticateToken(), async (req, res) => {
  // User.findOne({ email: req.user.email }, async function (err, user) {
  //   if (err) throw err;
  //   if (user !== null) {
  //     if (user.activeClass !== null) {
  //       res.status(303).send({ classId: user.activeClass._id });
  //     } else {
  //       res.sendStatus(200);
  //     }
  //   } else {
  //     res.status(400).send("User does not exist.");
  //   }
  // });
  res.sendStatus(200);
});

app.post("/API/send_ML_data", async (req, res) => {
  let rawdata = await fs.readFileSync("./ML/data.json");
  let parsed = JSON.parse(rawdata);
  parsed.push(req.body);

  let strung = JSON.stringify(parsed);
  fs.writeFileSync("./ML/data.json", strung);

  console.log("Wrote Data");
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
