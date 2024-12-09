const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/Contact');
require('dotenv').config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    'https://kshitijsinghbhati.in',
    'https://www.kshitijsinghbhati.in',
    // Include your local development URL if needed
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS middleware
app.use(cors(corsOptions));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Add this to check MongoDB connection status
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected to:', mongoose.connection.host);
});

// Contact route with detailed error logging
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form data:', req.body);

    // Check MongoDB connection status
    if (mongoose.connection.readyState !== 1) {
      throw new Error('MongoDB not connected');
    }

    const { email, message } = req.body;
    
    if (!email || !message) {
      throw new Error('Email and message are required');
    }

    // Create new contact document
    const contact = new Contact({
      email,
      message
    });

    console.log('Attempting to save contact:', contact);
    const savedContact = await contact.save();
    console.log('Contact saved successfully:', savedContact);
    
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Detailed server error:', error);
    res.status(500).json({ 
      error: error.message || 'Internal server error',
      details: error.toString()
    });
  }
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Server is working!',
    mongoStatus: mongoose.connection.readyState
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});