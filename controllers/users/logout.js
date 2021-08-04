const { logoutSuccessfulMessage } = require('../../utils/messages/usersResponseMessages');

module.exports = (req, res) => {
  res.status(200).clearCookie('jwt').send({ message: logoutSuccessfulMessage });
};
