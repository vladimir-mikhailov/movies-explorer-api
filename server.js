const { PORT, MONGO_URI } = require('./utils/envConfig');
const app = require('./app');
const dbConnect = require('./utils/dbConnect');
const { appStartFailedMessage } = require('./utils/responseMessages');

const start = async () => {
  try {
    app.listen(PORT);
    await dbConnect(MONGO_URI);
  } catch (e) {
    throw new Error(appStartFailedMessage);
  }
};

start();
