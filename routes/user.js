var express = require('express');
var router = express.Router();
const passport = require('passport');
const userModel = require('../models/user'); //user model
const jwt = require('../utils/jwt');

const sendResponse = (accessToken, refreshToken, res) => {
  res.cookie('refresh_token', refreshToken, {
    maxAge: process.env.REFRESH_TOKEN_TIMEOUT * 1000, //convert expiration time second to milisecond in coockies
    httpOnly: true,
  });
  res.status(200).json({ accessToken: accessToken, username: res.username });
};

router.post('/refresh-token', function (req, res) {
  /*
   * TODO
   * if accesstoken is expired and refreshtoken is not exprired send a new accesstoken and refreshtoken
   * if both accesstoken and refreshtoken are expired user is logged out. goto login
   */
});

router.get('/cart', passport.authenticate('jwt', { session: false }), function (req, res) {
  res.status(200).json({ msj: 'Welcome', user: req.user });
});

router.post('/login', function (req, res) {
  if (!(req.body.password && req.body.email)) {
    // both fields required
    return res.status(400).json({ err: 'User email or password missing' });
  }
  userModel
    .findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        //could not find user
        res.status(401).json({ err: 'No user have this email' });
      } else {
        // user found verify the password
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (err) return res.status(500).send(err);
          if (!isMatch) return res.status(401).json({ msj: 'Invalid password' });

          // user password verified. create and sent tokens
          jwt.signTokens(user, (err, accessToken, refreshToken) => {
            if (err) {
              res.status(500).send(err);
              console.error(err);
            } else {
              res.username = user.name;
              sendResponse(accessToken, refreshToken, res);
            }
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
      console.error(err);
    });
});

router.post('/signup', (req, res) => {
  if (!(req.body.password && req.body.email && req.body.name)) {
    return res.status(400).json({ err: 'User name,email or password missing' });
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
    // user saved. create and sent tokens
    jwt.signTokens(user, (err, accessToken, refreshToken) => {
      if (err) {
        res.status(500).send(err);
        console.error(err);
      } else {
        sendResponse(accessToken, refreshToken, res);
      }
    });
  });
});

module.exports = router;
