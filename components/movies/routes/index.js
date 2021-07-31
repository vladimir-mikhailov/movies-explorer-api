const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const {
  validateCreateMovieReq,
  validateMovieIdParam,
  validateUserId,
} = require('../middlewares/requestValidators');
const { createMovie, getMovies, deleteMovie } = require('../controllers');

router.get('/', validateUserId, asyncHandler(getMovies));

router.post('/', validateCreateMovieReq, asyncHandler(createMovie));

router.delete('/:movieId', validateMovieIdParam, asyncHandler(deleteMovie));

module.exports = router;
