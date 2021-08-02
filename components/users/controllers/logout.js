const { logoutSuccessfulMessage } = require('../messages/usersResponseMessages');

module.exports = (req, res) => {
  res.status(200).clearCookie('jwt').send({ message: logoutSuccessfulMessage });
};
