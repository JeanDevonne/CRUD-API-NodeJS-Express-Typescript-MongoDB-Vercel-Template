import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import { Request, Response } from "express";
import connectDb from "./config/connectToMongo";

const app = express(); //Express is a minimalist, flexible Node.js Web application infrastructure
const list = require("express-list-endpoints"); //Express endpoint parser to retrieve a list of the passed router with the set verbs

app.use(cors()); //Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running on a browser client to interact with resources from a different origin
app.use(express.json()); //It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.urlencoded({ extended: true })); //It parses incoming requests with URL-encoded payloads and is based on a body parser

connectDb();

//Router list
app.use("/users", userRoutes);

//Show express-list-endpoints in the mainpage
app.get("/", (req: Request, res: Response) => {
  res.send(list(app));
});

//return the app variable to use it on Vercel

module.exports = app;
