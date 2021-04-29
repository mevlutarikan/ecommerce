var express = require("express");
var router = express.Router();
const userModel = require("../models/user"); //user model

router.get("/", function (req, res, next) {
  res.send(req);
  next();
});

router.post("/signup", (req, res) => {
  const user = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user.save((err) => {
    if (err) {
      res.send(err);
      return console.error(err);
    }
    res.status(200).send(user);
  });
});
module.exports = router;
