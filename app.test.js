const request = require('supertest');
const express = require('express');
const app = express();

// Import the routes
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our Node.js application!' });
});

describe('API Tests', () => {
  // Test the root endpoint
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Welcome to our Node.js application!');
  });

  // Test for non-existent endpoint
  test('GET /nonexistent should return 404', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.statusCode).toBe(404);
  });
});
