const winston = require('winston');

module.exports = function (err, req, res, next) {
  //Levels:
  //error
  //warn
  //info
  //verbose
  //debug
  //silly

  // winston.log('error', err.message);
  // or
  winston.error(err.message, err);

  res.status(500).send('Something failed.');
}