const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { isEmail } = require('validator');
const UnauthorizedError = require('../../../utils/errors/401');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Киноман Василий',
    // validate: {
    //   validator(v) {
    //     return /^[a-zа-яё0-9\-' ]+$/i.test(v);
    //   },
    // },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return isEmail(v);
      },
      message: 'Некорректный email',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
});

const throwUnauthorizedError = () => {
  throw new UnauthorizedError('Неправильные почта или пароль');
};

async function findUserByCredentials(email, password) {
  const user = await this.findOne({ email }).select('+password');
  if (!user) throwUnauthorizedError();
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) throwUnauthorizedError();
  return user;
}

userSchema.statics.findUserByCredentials = findUserByCredentials;

module.exports = mongoose.model('user', userSchema);
