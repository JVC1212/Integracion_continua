const request = require('supertest');
const { app } = require('../src/app');

// Sincroniza la base de datos antes de las pruebas
beforeAll(async () => {
});

// Cierra la conexión después de las pruebas
afterAll(async () => {
});

describe('Test root endpoint', () => {
  it('should return a successful response from the root endpoint', async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('welcome');
  });
});
