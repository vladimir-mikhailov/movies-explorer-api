const Movie = require('../../models/movie');

const getMovies = async (req, res) => {
  const movies = await Movie.find({ owner: req.user._id })
    // .populate('owner', '-__v')
    .populate('likes', '-__v')
    .select('-__v');

  res.send(movies);
};

module.exports = getMovies;
