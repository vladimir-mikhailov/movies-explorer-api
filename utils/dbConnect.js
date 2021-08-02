const mongoose = require('mongoose');

let cached = global.mongoose;

if (!cached) {
  cached = { conn: null, promise: null };
  global.mongoose = cached;
}

async function dbConnect(mongoUri) {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const mongoOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    cached.promise = await mongoose.connect(mongoUri, mongoOptions).then((mongo) => mongo);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = dbConnect;
