const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors: celebrateErrors } = require('celebrate');
const router = require('./routes/routes'); // todo переписать на routes/index.js?
const cors = require('./middlewares/cors');
const requestLogger = require('./middlewares/requestLogger');
const errorLogger = require("./middlewares/errorLogger");
const rateLimiter = require("./middlewares/rateLimiter");
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(rateLimiter);
app.use(helmet());

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(requestLogger);
app.use(cors);

// todo провести Crash-test
// app.get('/crash-test', () => {
//   setTimeout(() => {
//     throw new Error('Сервер сейчас упадёт');
//   }, 0);
// });

app.use(router);

app.use(errorLogger);
app.use(celebrateErrors());
app.use(errorHandler);

module.exports = app;
