require('dotenv').config();
const app = require('./app');
const dbConnect = require('./utils/dbConnect');

const {
  PORT = 3000,
  // NODE_ENV = 'development',
  MONGODB_URI = 'mongodb://localhost:27017/moviedb',
} = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

const start = async () => {
  try {
    // console.log(`[node] ${NODE_ENV} mode`);

    app.listen(PORT, () => {
      // console.log(`[express] listening on port ${PORT}`);
    });

    await dbConnect(MONGODB_URI);

    // console.log('[mongoose] connected');
  } catch (e) {
    // console.error(`App init error: ${e}`);
  }
};

start();