require("dotenv").config();

const ENV = process.env;

const config = {
  port: ENV.PORT,
  mongoUrl: ENV.MONGO_URL,
};

export default config;
