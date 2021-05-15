const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('mongoose').model('users');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_KEY,
  algorithms: ['HS256'],
};

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  User.findById(payload.sub)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err, null));
});

module.exports = (passport) => {
  passport.use(jwtStrategy);
};
