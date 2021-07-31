const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

describe('Эндпойнты обрабатывают ошибку 404', () => {
  it('Запрос к "/" возвращает ошибку 404 Not Found', () =>
    request.get('/').then((res) => {
      expect(res.status).toBe(404);
    }));

  it('Запрос к несуществующему ресурсу возвращает ошибку 404 Not Found', () =>
    request.get('/signinadfa').then((res) => {
      expect(res.status).toBe(404);
    }));

  it('Запрос к существующему ресурсу не заданным методом возвращает ошибку 404 Not Found', () =>
    request.get('/signin').then((res) => {
      expect(res.status).toBe(404);
    }));
});
