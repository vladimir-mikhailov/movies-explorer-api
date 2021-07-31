const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports = async (req, res) => {
  const { email, name, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    name,
    password: hash,
  });

  const { __v, password: pass, ...newUser } = user._doc;

  res.status(201).send(newUser);
};
