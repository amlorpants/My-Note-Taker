const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// GET all notes
router.get('/notes', (req, res) => {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const notes = JSON.parse(data);
    return res.json(notes);
  });
});

// POST a new note
router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) {
    return res
      .status(400)
      .json({ error: 'Title and text are required fields' });
  }

  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const notes = JSON.parse(data);
    const newNote = {
      id: uuidv4(),
      title,
      text,
    };

    notes.push(newNote);

    fs.writeFile('./db.json', JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ error: 'Internal Server Error' });
      }

      return res.json(newNote);
    });
  });
});

module.exports = router;
