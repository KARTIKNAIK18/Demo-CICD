const request = require('supertest');
const express = require('express');
const app = express();

// Import the routes
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our Node.js application!' });
});

// Add test endpoints
app.post('/api/data', (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.status(201).json({ message: 'Data created', data: req.body });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
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

  // Test health check endpoint
  test('GET /api/health should return healthy status', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('healthy');
  });

  // Test POST endpoint with valid data
  test('POST /api/data with valid data should return 201', async () => {
    const testData = { name: 'Test User', email: 'test@example.com' };
    const response = await request(app)
      .post('/api/data')
      .send(testData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toEqual(testData);
  });

  // Test POST endpoint with invalid data
  test('POST /api/data with invalid data should return 400', async () => {
    const invalidData = { email: 'test@example.com' }; // missing required name
    const response = await request(app)
      .post('/api/data')
      .send(invalidData);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  // Test response headers
  test('Response should have correct content-type header', async () => {
    const response = await request(app).get('/');
    expect(response.headers['content-type']).toMatch(/json/);
  });
});
