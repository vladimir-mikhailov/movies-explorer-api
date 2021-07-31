const Movie = require('../models/movie');
const NotFoundError = require('../../../utils/errors/404');
const ForbiddenError = require('../../../utils/errors/403');

const deleteMovie = async (req, res) => {
  const { movieId } = req.params;
  const userId = req.user._id;

  const movie = await Movie.findOne({ _id: movieId });

  if (!movie) throw new NotFoundError('Фильма с таким id в базе нет.');

  const ownerId = String(movie.owner._id);

  if (ownerId !== userId) throw new ForbiddenError('Руки прочь от чужого фильма!');

  await Movie.findByIdAndRemove(movie._id);

  res.status(200).send({ message: 'Фильм удалён.' });
};

module.exports = deleteMovie;