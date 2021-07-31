const mongoose = require('mongoose');
const { isURL } = require('validator');

const movieSchema = new mongoose.Schema({
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
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
    type: Number,
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
