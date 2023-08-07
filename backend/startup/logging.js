const winston = require('winston');
require('express-async-errors');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({ colorize: true, prettyPrint: true }),
      new winston.transports.File({ filename: 'logfile.log' })
      // new winston.transports.MongoDB({
      //   level: 'info',
      //   db: 'mongodb://127.0.0.1:27017/vidly',
      //   collection: 'log',
      //   options: { useUnifiedTopology: true }
      // })
    ],
    exceptionHandlers: [
      new winston.transports.File({ filename: 'exceptions.log' })
    ],
    rejectionHandlers:[
      new winston.transports.File({ filename: 'rejections.log' })
    ]
  });

  const db = process.env.DB_URL || config.get('db');
  mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => logger.info(`Connected to ${db}...`));

  const close = () => mongoose.connection.close();

  return logger;
};