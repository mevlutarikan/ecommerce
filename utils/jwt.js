const jwt = require('jsonwebtoken');

module.exports.signToken = (user, callback) => {
  const payload = {
    sub: user._id,
  };
  const options = {
    expiresIn: 1800,
    algorithm: 'HS256',
  };

  jwt.sign(payload, process.env.JWT_KEY, options, (err, token) => {
    if (err) {
      console.log(err);
      callback(err, token);
    } else {
      callback(err, 'Bearer ' + token);
    }
  });
};

module.exports.verifyToken = (signedJWT, callback) => {
  jwt.verify(
    signedJWT,
    process.env.JWT_KEY,
    { algorithms: 'HS256' },
    (err, payload) => {
      callback(err, payload);
    }
  );
};
