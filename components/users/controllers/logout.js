const { logoutSuccessfulMessage } = require('../../../utils/responseMessages');

module.exports = (req, res) => {
  res.status(200).clearCookie('jwt').send({ message: logoutSuccessfulMessage });
};
