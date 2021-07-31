const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const {
  validateGetUserReq,
  validateUpdateUserReq,
} = require('../middlewares/requestValidators');
const { getUser, updateUser } = require('../controllers');

router.get('/me', validateGetUserReq, asyncHandler(getUser));

router.patch('/me', validateUpdateUserReq, asyncHandler(updateUser));

module.exports = router;
