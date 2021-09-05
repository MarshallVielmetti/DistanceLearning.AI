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

function authenticateToken(routeType) {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; //Token portion of Bearer-Token

    if (token === null) return res.status(401).send("Invalid Token");

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).send("Invalid Token");
      if (routeType) {
        if (user.accountType === routeType) {
          req.user = user;
          next();
        } else {
          res
            .status(403)
            .send("Resource Not Available for " + user.accountType + "s.");
        }
      } else {
        req.user = user;
        next();
      }
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

let num = 0;

app.post("/API/send_ML_data", async (req, res) => {
  let rawdata = await fs.readFileSync("./ML/data.json");
  let parsed = JSON.parse(rawdata);
  parsed.push(req.body);

  let strung = JSON.stringify(parsed);
  fs.writeFileSync("./ML/data.json", strung);

  console.log("Wrote Data " + num);
  num++;
  res.sendStatus(200);
});

app.post(
  "/API/push_attention",
  authenticateToken("Student"),
  async (req, res) => {
    User.findOne({ email: req.body.email }, async function (err, user) {
      if (err) {
        console.log(err);
      }

      if (user) {
        user.attention.push(req.body.attention);
        user.save().then((success) => {
          if (success) {
            res.status(200).send("Successfully Added Attention");
          } else {
            res.status(400).send("Failed to Update User");
          }
        });
      } else {
        res.status(404).send("Failed to find user");
      }
    });
  }
);

app.post(
  "/API/get_class_attention",
  authenticateToken("Teacher"),
  async (req, res) => {
    teacher_id = await User.findOne(
      { email: req.body.email },
      async function (err, user) {
        if (err) console.log(err);

        if (user) {
          return user._id;
        } else {
          res.status(400).send("Failed to Find User");
        }
      }
    );

    class_data = await Class.findOne(
      { teacher: teacher_id },
      async function (err, class_data) {
        if (err) console.log(err);

        if (class_data) {
          return class_data;
        } else {
          res.status(400).send("Failed to Find Class");
        }
      }
    );

    let return_arr = [];

    class_data.students.forEach((student) => {
      return_arr.push(student.name, student.attention);
    });

    res.status(200).json({ data_array: return_arr });
  }
);

app.post(
  "/API/create_class",
  authenticateToken("Teacher"),
  async (req, res) => {
    has_class = await User.findOne(
      { email: req.body.email },
      async (err, user) => {
        if (err) console.log(err);

        if (user) {
          if (user.activeClass) {
            res
              .status(406)
              .send("Cannot Create Class: You Are Already Running a Class");
          } else {
          }
        } else {
          res.status(400).send("Failed to Find User");
        }
      }
    );
  }
);

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
