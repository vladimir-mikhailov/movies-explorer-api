/* eslint-disable no-console */
require('dotenv').config();
const app = require('./app');
const dbConnect = require('./utils/dbConnect');

const {
  PORT = 3000,
  NODE_ENV = 'development',
} = process.env;

const start = async () => {
  try {
    console.log(`[node] ${NODE_ENV} mode`);

    app.listen(PORT, () => {
      console.log(`[express] listening on port ${PORT}`);
    });

    await dbConnect();

    console.log('[mongoose] connected');
  } catch (e) {
    console.error(`App init error: ${e}`);
  }
};

start();