import mongoose from "mongoose";
import config from "./config";

//Function to connect to your mongoDB cluster
const connectDb = () => {
  mongoose
    .connect(config.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection to MongoDB successful !");
    })
    .catch(() => console.log("Connection to MongoDB failed !"));
};

export default connectDb;
