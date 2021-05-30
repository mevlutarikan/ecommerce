const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_KEY,
  algorithms: ['HS256'],
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, function (payload, done) {
      return done(null, payload.sub);
    })
  );
};
