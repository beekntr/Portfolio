const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const newContact = new Contact({
      name,
      email,
      message
    });

    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (err) {
    res.status(500).json({ error: 'Error saving contact message' });
  }
});

module.exports = router;