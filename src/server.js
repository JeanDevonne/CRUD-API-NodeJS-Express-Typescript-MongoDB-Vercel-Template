const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const connectDb = require("./config/connectToMongo");

const app = express(); //Express is a minimalist, flexible Node.js Web application infrastructure
const list = require("express-list-endpoints"); //Express endpoint parser to retrieve a list of the passed router with the set verbs

app.use(cors()); //Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running on a browser client to interact with resources from a different origin
app.use(express.json()); //It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.urlencoded({ extended: true })); //It parses incoming requests with URL-encoded payloads and is based on a body parser

connectDb();

//Router list
app.use("/users", userRoutes);

//return the app variable to use it on Vercel

module.exports = app;
