// # Pseudo-code for the back-end of a note-taking application

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
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// # Serve static files from the 'public' folder
// app.use(express.static('public'))

// # API routes

// # Retrieve all notes from the db.json file and return as JSON
// GET '/api/notes':
//     Read 'db.json' file:
//         If there is an error:
//             Respond with status 500 and { error: 'Internal Server Error' }
//         Else:
//             Parse the file content as notes array
//             Respond with status 200 and notes array as JSON

// # Save a new note to the db.json file and return the new note with a unique ID
// POST '/api/notes':
//     Extract title and text from the request body
//     If title or text is missing:
//         Respond with status 400 and { error: 'Title and text are required fields' }
//     Else:
//         Read 'db.json' file:
//             If there is an error:
//                 Respond with status 500 and { error: 'Internal Server Error' }
//             Else:
//                 Parse the file content as notes array
//                 Generate a unique ID for the new note using uuid
//                 Create a new note object with the ID, title, and text
//                 Push the new note to the notes array
//                 Write the updated notes array back to 'db.json':
//                     If there is an error:
//                         Respond with status 500 and { error: 'Internal Server Error' }
//                     Else:
//                         Respond with status 200 and the new note as JSON

// # HTML routes

// # Return the 'notes.html' file
// GET '/notes':
//     Respond with 'notes.html' file

// # Return the 'index.html' file for any other routes
// GET '*':
//     Respond with 'index.html' file

// # Start the server to listen on the defined PORT
// app.listen(PORT, callback for server start)
