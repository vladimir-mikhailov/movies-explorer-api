const NotFoundError = require('../utils/errors/404');

module.exports = (req, res, next) => next(new NotFoundError('Запрашиваемый ресурс не найден.'));
