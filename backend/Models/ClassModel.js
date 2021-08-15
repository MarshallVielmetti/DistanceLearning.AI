import mongoose from "mongoose"

const Schema = mongoose.Schema

const ClassSchema = new Schema({
  className: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Class =  mongoose.model("Class", ClassSchema);

export default Class