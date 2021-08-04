const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const auth = require('../middlewares/user/auth/auth');
const {
  validateLoginReq,
  validateRegisterReq,
} = require('../middlewares/user/requestValidators');
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const notFoundHandler = require('../middlewares/notFoundHandler');
const { createUser, login, logout } = require('../controllers/users');

router.post('/signin', validateLoginReq, asyncHandler(login));

router.post('/signup', validateRegisterReq, asyncHandler(createUser));

router.post('/signout', auth, logout);

router.use('/users', auth, usersRoutes);

router.use('/movies', auth, moviesRoutes);

router.use(auth, notFoundHandler);

module.exports = router;
