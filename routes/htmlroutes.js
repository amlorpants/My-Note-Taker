const express = require('express');
const path = require('path');

const router = express.Router();

// Serve the 'notes.html' file
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
});

// Serve the 'index.html' file for any other routes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = router;
