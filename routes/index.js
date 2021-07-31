const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const auth = require('../components/users/middlewares/auth');
const {
  validateLoginReq,
  validateRegisterReq,
} = require('../components/users/middlewares/requestValidators');
const usersRoutes = require('../components/users/routes');
const moviesRoutes = require('../components/movies/routes');
const notFoundHandler = require('../middlewares/notFoundHandler');
const { createUser, login, logout } = require('../components/users/controllers');

router.post('/signin', validateLoginReq, asyncHandler(login));

router.post('/signup', validateRegisterReq, asyncHandler(createUser));

router.post('/signout', auth, logout);

router.use('/users', auth, usersRoutes);

router.use('/movies', auth, moviesRoutes);

router.use(notFoundHandler);

module.exports = router;
