import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  busPlate: number;
  lastname: string;
  firstname: string;
  lat: Number;
  lng: Number;
}

const userSchema = new mongoose.Schema({
  busPlate: Number,
  lastname: String,
  firstname: String,
  lat: Number,
  lng: Number,
});

export default mongoose.model<IUser>("User", userSchema);
