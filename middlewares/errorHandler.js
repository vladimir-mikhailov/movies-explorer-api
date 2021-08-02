const { isCelebrateError } = require('celebrate');
const {
  invalidRequestDataMessage,
  userAlreadyRegisteredMessage,
  serverErrorMessage,
} = require('../utils/responseMessages');

module.exports = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    res.status(400).send({ message: invalidRequestDataMessage });
    return;
  }
  if (err.name === ('CastError' || 'ValidationError')) {
    res.status(400).send({ message: invalidRequestDataMessage });
    return;
  }
  if (err.name === 'MongoError' && err.code === 11000) {
    res.status(409).send({ message: userAlreadyRegisteredMessage });
    return;
  }
  if (err) {
    const { statusCode = 500, message } = err;
    res.status(statusCode).send({ message: statusCode === 500 ? serverErrorMessage : message });
  }
  next();
};
