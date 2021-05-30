const jwt = require('jsonwebtoken');

module.exports.signTokens = (user, callback) => {
  const payload = {
    sub: user._id,
  };

  const accessTokenOptions = {
    expiresIn: parseInt(process.env.ACCESS_TOKEN_TIMEOUT, 10),
    algorithm: 'HS256',
  };

  const refreshTokenOptions = {
    expiresIn: parseInt(process.env.REFRESH_TOKEN_TIMEOUT, 10),
    algorithm: 'HS256',
  };

  //sign access token
  jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, accessTokenOptions, (err, accessToken) => {
    if (err) {
      console.log(err);
      return callback(err, null, null);
    }
    // sign refresh token
    jwt.sign(payload, process.env.REFRESH_TOKEN_KEY, refreshTokenOptions, (err, refreshToken) => {
      if (err) {
        console.log(err);
        return callback(err, null, null);
      }
      //access token is in autorization header with bearer key
      return callback(err, 'Bearer ' + accessToken, refreshToken);
    });
  });
};

module.exports.verifyAccessToken = (signedJWT, callback) => {
  jwt.verify(signedJWT, process.env.ACCESS_TOKEN_KEY, { algorithms: 'HS256' }, (err, payload) => {
    callback(err, payload);
  });
};

module.exports.verifyRefreshToken = (signedJWT, callback) => {
  jwt.verify(signedJWT, process.env.REFRESH_TOKEN_KEY, { algorithms: 'HS256' }, (err, payload) => {
    callback(err, payload);
  });
};
