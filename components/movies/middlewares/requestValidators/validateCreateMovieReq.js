const { celebrate, Joi } = require('celebrate');
const { isURL } = require('validator');
const {
  invalidImageMessage,
  invalidTrailerMessage,
  invalidThumbnailMessage,
} = require('../../messages/moviesResponseMessages');

module.exports = celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().required().min(1).max(200),
    nameEN: Joi.string().required().min(1).max(200),
    movieId: Joi.number().integer().positive().required(),
    year: Joi.string().required().min(4).max(4),
    duration: Joi.number().required().min(1),
    description: Joi.string().required().min(1).max(2000),
    director: Joi.string().required().min(1).max(200),
    country: Joi.string().required().min(1).max(100),
    image: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (isURL(value)) {
          return value;
        }
        return helpers.message(invalidImageMessage);
      }),
    trailer: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (isURL(value)) {
          return value;
        }
        return helpers.message(invalidTrailerMessage);
      }),
    thumbnail: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (isURL(value)) {
          return value;
        }
        return helpers.message(invalidThumbnailMessage);
      }),
  }),
});
