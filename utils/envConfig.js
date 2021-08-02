require('dotenv').config();

const devConfig = {
  nodeEnv: 'development',
  port: 3000,
  mongoURI: 'mongodb://localhost:27017/moviedb',
  JWTSecret: 'dev-secret',
};

const {
  NODE_ENV = devConfig.nodeEnv,
  PORT = devConfig.port,
  MONGO_URI = devConfig.mongoURI,
  JWT_SECRET = NODE_ENV !== 'production' && devConfig.JWTSecret,
} = process.env;

module.exports = { NODE_ENV, PORT, MONGO_URI, JWT_SECRET };
