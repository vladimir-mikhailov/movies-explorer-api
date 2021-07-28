const { isCelebrateError } = require('celebrate');

module.exports.errorHandler = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    res.status(400).send({ message: 'Переданы некорректные данные.' });
    return;
  }
  if (err.name === ('CastError' || 'ValidationError')) {
    res.status(400).send({ message: 'Переданы некорректные данные.' });
    return;
  }
  if (err.name === 'MongoError' && err.code === 11000) {
    res.status(409).send({ message: 'Пользователь с таким email уже зарегистрирован.' });
    return;
  }
  if (err) {
    const { statusCode = 500, message } = err;
    res.status(statusCode).send({ message: statusCode === 500 ? 'Ошибка сервера' : message });
  }
  next();
};
