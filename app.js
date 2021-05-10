var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

/* updates serving frontend files from express to nginx
//Serve static frontend files from the React app build folder
app.use(express.static(path.join(__dirname, 'reactapp/build')));
//app.use('/', indexRouter);
*/
app.use('/api', apiRouter);

/* updates serving frontend files from express to nginx
// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'reactapp/build/index.html'));
});
*/
module.exports = app;
