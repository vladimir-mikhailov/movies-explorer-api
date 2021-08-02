const User = require('../models/user');
const NotFoundError = require('../../../utils/errors/404');
const ConflictError = require('../../../utils/errors/409');
const {
  userNotFoundMessage,
  userTriedToUpdateAnotherProfileMessage,
} = require('../../../utils/responseMessages');

const throwNotFoundError = () => {
  throw new NotFoundError(userNotFoundMessage);
};

module.exports = async (req, res) => {
  const { name, email } = req.body;

  const user = await User.findById(req.user._id);

  if (!user) throwNotFoundError();

  const userId = String(user._id);

  if (userId !== req.user._id) throw new ConflictError(userTriedToUpdateAnotherProfileMessage);

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      new: true,
      runValidators: true,
      upsert: false,
    },
  ).select('-__v');

  if (!updatedUser) throwNotFoundError();

  res.status(200).send(updatedUser);
};
