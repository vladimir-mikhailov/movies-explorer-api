const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { JWT_SECRET = 'dev-secret' } = process.env;

const cookieOptions = {
  maxAge: 3600000 * 24 * 7,
  httpOnly: true,
  sameSite: true,
};

const tokenOptions = { expiresIn: '7d' };

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findUserByCredentials(email, password);

  const token = jwt.sign({ _id: user._id }, JWT_SECRET, tokenOptions);

  res.cookie('jwt', token, cookieOptions).send({ message: 'Успешный логин' });
};