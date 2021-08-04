const Movie = require('../../models/movie');
const ConflictError = require('../../utils/errors/409');
const { movieIsAlreadyExistMessage } = require('../../utils/messages/moviesResponseMessages');

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

  const movieFound = await Movie.findOne({ owner: req.user._id, movieId });

  if (movieFound && movieFound.movieId) throw new ConflictError(movieIsAlreadyExistMessage);

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

  res.send(newMovie);
};

module.exports = createMovie;
