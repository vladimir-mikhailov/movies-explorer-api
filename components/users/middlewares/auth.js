const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../../../utils/errors/401');

const { JWT_SECRET = 'dev-secret' } = process.env;

const handleAuthError = () => {
  throw new UnauthorizedError('Ошибка авторизации');
};

module.exports = (req, res, next) => {
  try {
    if (!req.cookies.jwt) handleAuthError();

    const token = req.cookies.jwt;

    req.user = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    handleAuthError();
  }
  next();
};
