const allowedCors = [
  '*',
  'http://localhost:3000',
  'http://localhost',
  'http://movies-whoyouvies.nomoredomains.club',
  'https://movies-whoyouvies.nomoredomains.club',
];

const cors = async (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.send(200);
  }

  next();
};

module.exports = cors;
