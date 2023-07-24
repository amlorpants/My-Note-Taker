// # Import required modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// # Create an instance of the Express application
const app = express();

// # Define the PORT for the server to listen on
const PORT = process.env.PORT || 3000;

// # Middleware for parsing JSON in request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(htmlroutes);
app.use(apiroutes);

// # Serve static files from the 'public' folder
// app.use(express.static('public'))

// # Start the server to listen on the defined PORT
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
