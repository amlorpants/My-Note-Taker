const express = require('express');
const path = require('path');
const htmlRoutes = require('./htmlroutes');
const apiRoutes = require('./apiroutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', apiRoutes);

// HTML routes
app.use('/', htmlRoutes);

// Start the server to listen on the defined PORT
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
