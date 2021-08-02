const mongoose = require('mongoose');
const User = require('../components/users/models/user');
const Movie = require('../components/movies/models/movie');
const fixtures = require('./fixtures');

const MONGO_URL = 'mongodb://localhost:27017/moviedb-test';

const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  bufferMaxEntries: 0,
  useFindAndModify: false,
  useCreateIndex: true,
};

beforeAll(async () => {
  await mongoose.connect(MONGO_URL, opts);
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe('Database tests', () => {
  let userId;
  let movieId;

  beforeEach(async () => {
    const user = await User.create(fixtures.user);
    userId = user._id;

    const movie = await Movie.create({ owner: userId, ...fixtures.movie });
    movieId = movie._id;
  });

  afterEach(async () => {
    await Movie.deleteOne({ _id: movieId });
    await User.deleteOne({ _id: userId });
  });

  it('createUser: Пользователь должен быть', () =>
    User.findOne({ email: fixtures.user.email }).then((user) => {
      expect(user).toBeDefined();
      expect(user.email).toBe(fixtures.user.email);
      expect(user.name).toBe(fixtures.user.name);
    }));

  it('createMovie: Фильм должен быть', () =>
    Movie.findOne({ _id: movieId }).then((movie) => {
      expect(movie).toBeDefined();
      expect(movie.movieId).toBe(fixtures.movie.movieId);
      expect(movie.nameRu).toBe(fixtures.movie.nameRu);
    }));
});
