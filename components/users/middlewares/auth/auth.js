const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../../../../utils/errors/401');
const { unauthorizedErrorMessage } = require('../../messages/usersResponseMessages');
const { JWT_SECRET } = require('../../../../utils/config/envConfig');

const handleAuthError = () => {
  throw new UnauthorizedError(unauthorizedErrorMessage);
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
