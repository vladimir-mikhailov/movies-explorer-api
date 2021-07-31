const { celebrate, Joi } = require('celebrate');

module.exports = celebrate({
  body: Joi.object().keys({
    user: Joi.object().keys({
      _id: Joi.string().alphanum().length(24).required(),
    }),
  }),
});
