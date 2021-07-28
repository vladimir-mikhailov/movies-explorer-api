const winston = require('winston');
const expressWinston = require('express-winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const errorLogger = expressWinston.errorLogger({
  transports: [
    // new winston.transports.File({ filename: './logs/error.log' }),
    new DailyRotateFile({
      filename: './logs/errors-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '10m',
      maxFiles: '7d',
    }),
    // process.env.NODE_ENV !== 'production' &&
    //   new winston.transports.Console({
    //     format: winston.format.simple(),
    //   }),
  ],
  format: winston.format.json(),
  colorize: true,
});

module.exports = errorLogger;
