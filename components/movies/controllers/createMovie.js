const Movie = require('../models/movie');

const createMovie = async (req, res) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  const movie = await Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  });

  const { __v, ...newMovie } = movie._doc;

  res.send({ ...newMovie, owner: { _id: newMovie.owner } });
};

module.exports = createMovie;