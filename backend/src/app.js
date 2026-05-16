const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/desidhara')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('DB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Desi Dhara by Rajwari API' });
});

// Auth Routes
app.post('/api/auth/otp/send', (req, res) => {
  // Logic to send OTP via Firebase/SMS service
  res.json({ success: true, message: 'OTP sent successfully' });
});

app.post('/api/auth/otp/verify', (req, res) => {
  // Logic to verify OTP and return JWT
  res.json({ success: true, token: 'mock-jwt-token', user: { role: 'customer' } });
});

// Product Routes
app.get('/api/products', async (req, res) => {
  // Fetch products from DB
  res.json([]);
});

// Subscription Routes
app.post('/api/subscriptions', async (req, res) => {
  // Create new subscription
  res.json({ success: true });
});

app.put('/api/subscriptions/:id/pause', async (req, res) => {
  // Pause subscription
  res.json({ success: true });
});

// Wallet Routes
app.post('/api/wallet/recharge', async (req, res) => {
  // Initiate payment and recharge wallet
  res.json({ success: true });
});

// Admin Routes
app.get('/api/admin/dashboard', (req, res) => {
  res.json({
    revenue: 420000,
    activeSubscriptions: 1240,
    dailyOrders: 850
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
