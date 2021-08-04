const { celebrate, Joi } = require('celebrate');

module.exports = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().max(100).required().pattern(/^\S*$/),
  }),
});
