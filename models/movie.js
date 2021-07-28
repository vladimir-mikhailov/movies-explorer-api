const mongoose = require('mongoose');
const { isURL } = require('validator');

const movieSchema = new mongoose.Schema({
  nameRu: {
    type: String,
    required: true,
    // minlength: 2,
    // maxlength: 30,
    // validate: {
    //   validator(v) {
    //     return /^[a-zа-яё0-9.,\-–'! ]+$/i.test(v);
    //   },
    // },
  },
  nameEn: {
    type: String,
    required: true,
    // minlength: 2,
    // maxlength: 30,
    // validate: {
    //   validator(v) {
    //     return /^[a-zа-яё0-9.,\-–'! ]+$/i.test(v);
    //   },
    // },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: 'Некорректная ссылка на миниатюру постера к фильму',
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: 'Некорректная ссылка на постер к фильму',
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: 'Некорректная ссылка на трейлер к фильму',
    },
  },
  movieId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      default: [],
    },
  ],
  savedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('movie', movieSchema);
