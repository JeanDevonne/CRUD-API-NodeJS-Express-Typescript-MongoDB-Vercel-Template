import mongoose, { Document } from "mongoose";

const userSchema = new mongoose.Schema({
  busPlate: Number,
  lastname: String,
  firstname: String,
  lat: Number,
  lng: Number,
});

export default mongoose.model("User", userSchema);
