// # API routes taken from db/server.js

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
