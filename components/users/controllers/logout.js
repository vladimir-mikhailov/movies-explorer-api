module.exports = (req, res) => {
  res.status(200).clearCookie('jwt').send({ message: 'Чао-какао!' });
};