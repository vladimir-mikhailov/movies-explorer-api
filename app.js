const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors: celebrateErrors } = require('celebrate');
const router = require('./routes');
const { rateLimiter, cors, requestLogger, errorLogger, errorHandler } = require('./middlewares');

const app = express();

app.use(rateLimiter);
app.use(helmet());

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(requestLogger);
app.use(cors);

app.use(router);

app.use(errorLogger);
app.use(celebrateErrors());
app.use(errorHandler);

module.exports = app;
