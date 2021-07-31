const User = require('../models/user');
const NotFoundError = require('../../../utils/errors/404');

module.exports = async (req, res) => {
  const user = await User.findById(req.user._id).select('-__v');

  if (!user) throw new NotFoundError('Пользователя с таким id в базе нет.');

  res.status(200).send(user);
};