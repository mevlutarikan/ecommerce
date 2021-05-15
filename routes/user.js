var express = require('express');
var router = express.Router();
const userModel = require('../models/user'); //user model
const passport = require('passport');
const jwt = require('../utils/jwt');

router.get(
  '/cart',
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    res.status(200).json({ msj: 'Welcome' });
  }
);

router.post('/login', function (req, res) {
  if (!(req.body.password && req.body.email)) {
    // both fields required
    return res.status(400).json({ msj: 'User email or password missing' });
  }
  userModel
    .findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        //could not find user
        res.status(401).json({ msg: 'No user have this email' });
      } else {
        // user found verify the password
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (err) return res.status(500).send(err);
          if (isMatch) {
            // user password verified create and sent token
            jwt.signToken(user, (err, token) => {
              if (err) {
                res.status(500).send(err);
                console.error();
                err;
              } else {
                res.status(200).json(token);
              }
            });
          } else {
            res.status(401).json({ msj: 'Invalid password' });
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
      console.error(err);
    });
});

router.post('/signup', (req, res) => {
  if (req.body.password || req.body.email || req.body.name) {
    return res.status(400).json({ msj: 'User name,email or password missing' });
  }
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
    jwt.signToken(user, (err, token) => {
      if (err) {
        res.status(500).send(err);
        return console.error(err);
      } else {
        res.status(200).json(token);
      }
    });
  });
});

module.exports = router;
