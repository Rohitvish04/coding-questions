1️⃣ Basic express-rate-limit Example (Single Node Server)
// Install packages: npm install express express-rate-limit
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

// Basic rate limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,                   // Max 5 requests per window
  message: 'Too many requests, try again later'
});

// Apply limiter to all routes
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));


2️⃣ Redis-Based Rate Limiting Example (Distributed / Production Ready)
// Install packages: npm install express ioredis
const express = require('express');
const Redis = require('ioredis');
const app = express();

// Connect to Redis
const redis = new Redis({
  host: '127.0.0.1',
  port: 6379
});

// Middleware for rate limiting
const rateLimitRedis = async (req, res, next) => {
  const ip = req.ip;
  const limit = 5;         // max 5 requests
  const expire = 60;        // per 60 seconds

  const current = await redis.incr(ip); // increment counter
  if (current === 1) {
    await redis.expire(ip, expire);     // set expiration for first request
  }

  if (current > limit) {
    return res.status(429).send('Too many requests, try again later');
  }

  next();
};

app.use(rateLimitRedis);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
