const User = require('../models/user');
const NotFoundError = require('../../../utils/errors/404');
const { userNotFoundMessage } = require('../../../utils/responseMessages');

module.exports = async (req, res) => {
  const user = await User.findById(req.user._id).select('-__v');

  if (!user) throw new NotFoundError(userNotFoundMessage);

  res.status(200).send(user);
};