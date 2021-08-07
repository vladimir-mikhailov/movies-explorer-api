const winston = require('winston');
const expressWinston = require('express-winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const errorLogger = expressWinston.errorLogger({
  transports: [
    new DailyRotateFile({
      filename: './logs/errors-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '10m',
      maxFiles: '7d',
    }),
  ],
  format: winston.format.json(),
  colorize: true,
});

module.exports = errorLogger;
