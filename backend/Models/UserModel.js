const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  email: { type: String, required: true, index: { unique: true } },
  emailConfirmed: Boolean,
  password: { type: String, required: true },
  accountType: String,
  activeClass: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  name: String,
  attention: [Number],
});

UserSchema.pre("save", function (next) {
  var user = this;

  //Only has password if new / modified
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
