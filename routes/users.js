const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { validateGetUserReq, validateUpdateUserReq } = require('../middlewares/user/requestValidators');
const { getUser, updateUser } = require('../controllers/users');

router.get('/me', validateGetUserReq, asyncHandler(getUser));

router.patch('/me', validateUpdateUserReq, asyncHandler(updateUser));

module.exports = router;
