const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const ClassSchema = new Schema({
  className: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Class", ClassSchema);
