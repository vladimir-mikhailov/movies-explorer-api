const NotFoundError = require('../utils/errors/404');
const { resourceNotFoundMessage } = require('../utils/responseMessages');

module.exports = (req, res, next) => next(new NotFoundError(resourceNotFoundMessage));
