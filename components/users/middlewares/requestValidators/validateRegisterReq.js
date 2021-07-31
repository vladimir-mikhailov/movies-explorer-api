const { celebrate, Joi } = require('celebrate');

module.exports = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    // todo усилить пароль: /^(?=.*\d)(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?!.*\s).*$/
    password: Joi.string().min(8).max(100).required().pattern(/^\S*$/),
    name: Joi.string().required().min(2).max(30),
  }),
});
