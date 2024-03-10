const express = require("express");
const Posts = require("../models/Posts");

const router = express.Router();

router.get("/", (req, res) => {
  Posts.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post("/", (req, res) => {
  Posts.create(req.body).then((x) => res.status(201).send(x));
});

module.exports = router;
