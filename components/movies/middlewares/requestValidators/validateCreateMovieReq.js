const { celebrate, Joi } = require('celebrate');

module.exports = celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().required().min(1).max(200),
    nameEN: Joi.string().required().min(1).max(200),
    movieId: Joi.string().required(),
    year: Joi.number().required().min(4).max(4),
    duration: Joi.number().required().min(1),
    description: Joi.string().required().min(1).max(2000),
    director: Joi.string().required().min(1).max(200),
    country: Joi.string().required().min(1).max(100),
    image: Joi.string()
      .required()
      .uri({
        scheme: /https?/,
        allowQuerySquareBrackets: true,
      }),
    trailer: Joi.string()
      .required()
      .uri({
        scheme: /https?/,
        allowQuerySquareBrackets: true,
      }),
    thumbnail: Joi.string()
      .required()
      .uri({
        scheme: /https?/,
        allowQuerySquareBrackets: true,
      }),
  }),
});